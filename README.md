# GFW injectable components

Showcase of GFW components with the use of react Styleguidist library.

## Installation / setting up locally

```bash
yarn && yarn start
```

This will set up the app running on port 6060.

## Publishing to NPM

Merging PRs to master or pushing commits directly into master triggers Travis CI that checks if the commit is tagged and if it is, it automatically publishes a new version to NPM.
To have a full control over the releases, we're tagging the commits locally.
To tag a commit and trigger npm publish upon pushing to master, follow these steps:

1. Make sure everything works on master and that you want to indeed publish new version to npm
2. Run in the project folder command line: `npm version patch|minor|major -m "Bumping to %s"`
  - this will bump version in the package.json
  - commit and tag
3. `git push` to push the commit with bumped version to master
4. `git push --tags` to push the tags
5. Travis CI will be triggered and upon seeing the tagged commit, it will publish a new version to NPM :rocket:

## SSR Rendering

If you are importing and building your app with SSR all our components are compatible. You just need to add some global styles to you app to handle the resposnive breakpoints on the server side.

```js
// server.js

import React from "react"
import ReactDOMServer from "react-dom/server"
import express from "express"

import { App } from "./App"
import { mediaStyle } from "./Media"

const app = express()

app.get("/", (_req, res) => {
  const html = ReactDOMServer.renderToString(<App />)

  res.send(`
    <html>
      <head>
        <title>@artsy/fresnel - SSR Example</title>

        <!–– Inject the generated styles into the page head -->
        <style type="text/css">${mediaStyle}</style>
      </head>
      <body>
        <div id="react">${html}</div>

        <script src='/assets/app.js'></script>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.warn("\nApp started at http://localhost:3000 \n")
})
```