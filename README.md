# Zanzibar World of Elemental Power (zanziworld)

Welcome to the codeline for Zanzi's World. In this incarnation, we are using AWS in all its glory to make dev and maintenance as simple as possible. Amplify seems to be sufficiently in place at this point to support whatever we would need. That said, we will keep the overall system design open to alternatives.

## Latest Accomplishment

The initial app is deployed and available at https://www.zanzisworld.com, which is fabulous proof that we have the basics at hand. We have:

* Custom URL with encryption
* Rudamentary sign-up (including email-based verification) and authentication - just enough
* A greeting page with a form that captures whatever the user submits, using a data model backed by DynamoDB
* Navigation to other features (placeholders) and related off-site content (Locals, Twitter)
* Images pulled from a cdn

A few improvements are staged and waiting to be pushed. These include:

* Nicer replies from Ask Zanzibar
* Nicer icons (Zanzi's avatar photo)
* A new widget and page for displaying micro-lessons
* Enhanced navigation options, separate by target (inside and outside Zanzi's World)

## At Bat

For our next trick, let's get authentication working with the component provided by AWS. While we are at it, let's put cookie tracking in place, too. Also, we can set up some protected routes that allow access based on user roles. We will set up protection on a page for lesson authoring.

## On Deck

Basic lesson viewing and authoring. Let's be able to create and update lessons, and have anonymous users view them.

---
---

# Instructions for Using the Dev Environment

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
