# Artifact-2

A minimal [Node.js](https://nodejs.org/) tutorial server built with the
[Express.js](https://expressjs.com/) web framework. It exposes two `GET`
endpoints that each return a plain-text response.

## Prerequisites

- [Node.js](https://nodejs.org/) **>= 18** (required by Express 5.x)
- **npm** (bundled with Node.js)

## Installation

Install the project dependencies:

```bash
npm install
```

This installs the `express` dependency declared in `package.json` and generates
`package-lock.json` together with the `node_modules/` directory.

## Running the server

Start the server with:

```bash
npm start
```

This runs `node server.js`. By default the server listens on
[http://localhost:3000](http://localhost:3000). To use a different port, set the
`PORT` environment variable:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response |
| ------ | --------------- | -------------- |
| `GET` | `/` | `Hello world` |
| `GET` | `/good-evening` | `Good evening` |

## Verify

With the server running, smoke-test both endpoints with `curl`:

```bash
curl -s localhost:3000/             # -> Hello world
curl -s localhost:3000/good-evening # -> Good evening
```
