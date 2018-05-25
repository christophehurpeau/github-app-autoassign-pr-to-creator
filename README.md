# github-app-autoassign-pr-to-creator

> a GitHub App built with [probot](https://github.com/probot/probot) that autoassign PR to creator

## Github App

https://github.com/apps/autoassign-pr-to-creator

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Deploy

```sh
now -e APP_ID=aaa \
     -e WEBHOOK_SECRET=bbb \
     -e NODE_ENV=production \
     -e PRIVATE_KEY="$(cat key.pem)" \
     -e LOG_LEVEL=info
```
