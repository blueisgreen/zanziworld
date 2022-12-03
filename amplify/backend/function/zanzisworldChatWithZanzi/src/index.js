/* Amplify Params - DO NOT EDIT
	API_ZANZISWORLD_GRAPHQLAPIENDPOINTOUTPUT
	API_ZANZISWORLD_GRAPHQLAPIIDOUTPUT
	API_ZANZISWORLD_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { default as fetch, Request } from 'node-fetch'

const GRAPHQL_ENDPOINT = process.env.API_ZANZISWORLD_GRAPHQLAPIENDPOINTOUTPUT
const GRAPHQL_API_KEY = process.env.API_ZANZISWORLD_GRAPHQLAPIKEYOUTPUT

const query = /* GraphQL */ `
  mutation CREATE_CHAT_MESSAGE($input: CreateTodoInput!) {
    createChatMessage(input: $input) {
      who
      content
    }
  }
`

const messages = [
  'That is interesting.',
  'I will keep that in mind.',
  'Okay. Tell me more.',
  'I see. Anything else?',
  'I was thinking about that, too.',
  "Oh, that's a good one.",
  'Makes sense.',
  'Why?',
  'Got it.',
  'Super.',
  'Excellent. What else?',
  'Alright. Is that all?',
  'I could talk to you all day.',
]

const chooseAnswer = () => {
  const pick = Math.floor(Math.random() * messages.length)
  return messages[pick]
}

const saveMessage = (who, content) => {

}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  const { who, userMessage } = event
  let statusCode = 200
  let body = {}
  let response

  if (userMessage) {
    // send to data store
    const variables = {
      input: {
        who: who || 'unknown',
        content: userMessage,
      },
    }

    /** @type {import('node-fetch').RequestInit} */
    const options = {
      method: 'POST',
      headers: {
        'x-api-key': GRAPHQL_API_KEY,
      },
      body: JSON.stringify({ query, variables }),
    }

    const request = new Request(GRAPHQL_ENDPOINT, options)

    try {
      response = await fetch(request)
      body = await response.json()
      if (body.errors) statusCode = 400
    } catch (error) {
      statusCode = 400
      body = {
        errors: [
          {
            status: response.status,
            message: error.message,
            stack: error.stack,
          },
        ],
      }
    }
  }

  body.answer = { answer: chooseAnswer() }

  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  }
}
