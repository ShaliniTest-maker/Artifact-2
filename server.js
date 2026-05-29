'use strict';

/**
 * server.js — Express.js application entry point.
 *
 * Minimal Node.js + Express tutorial server that exposes two plain-text
 * HTTP GET endpoints:
 *
 *   GET /              -> "Hello world"   (baseline endpoint, preserved)
 *   GET /good-evening  -> "Good evening"  (additive endpoint)
 *
 * The server follows the official Express minimal-server pattern: it creates
 * an application instance, registers inline route handlers, and binds an HTTP
 * listener to a configurable port. No middleware, routers, controllers, or
 * additional dependencies are used — `express` is the sole runtime dependency
 * (declared in package.json -> dependencies.express ^5.2.1).
 *
 * Module system: CommonJS (`require`). The sibling package.json intentionally
 * does NOT set "type": "module", so this file uses `require(...)` rather than
 * ESM `import`. package.json wires this file as the executable entry point via
 * both "main": "server.js" and "scripts.start": "node server.js".
 *
 * Runtime: Express 5.x requires Node.js >= 18; no compatibility shims needed.
 */

// Import the Express framework — the minimalist web/routing layer that
// provides the application factory, route registration, and response helpers.
const express = require('express');

// Instantiate the Express application instance that owns the route table and
// the underlying HTTP request-handling pipeline.
const app = express();

// Port to bind the HTTP listener to. Honors the PORT environment variable so
// the server can be relocated (e.g., `PORT=8080 npm start`) and falls back to
// 3000 — the conventional default for local Express development.
const PORT = process.env.PORT || 3000;

/**
 * Baseline endpoint (preserved): GET /
 *
 * Responds with the exact plain-text body "Hello world". `res.send` with a
 * string argument writes the literal body with a `text/html` content type and
 * adds no extra punctuation, whitespace, or wrapping.
 */
app.get('/', (req, res) => res.send('Hello world'));

/**
 * Additive endpoint: GET /good-evening
 *
 * Responds with the exact plain-text body "Good evening". Coexists with the
 * baseline route above; adding it does not alter the existing endpoint.
 */
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Start the HTTP server and bind it to the resolved port. The callback logs the
// listening URL for developer convenience; it does not affect the response
// bodies, which remain byte-for-byte exact as defined by the route handlers.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
