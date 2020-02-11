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

