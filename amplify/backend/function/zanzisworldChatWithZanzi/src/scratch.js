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

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  const { who, userMessage } = event
  const statusCode = 200
  const body = {
    salutation: 'Dear ' + who,
    youSaid: userMessage,
    myReply: chooseAnswer(),
  }

  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  }
}
