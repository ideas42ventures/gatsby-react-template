![CI Status](https://github.com/ideas42ventures/gatsby-ideas42ventures.com/actions/workflows/ci.yml/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/54c31282-d217-4b74-8a80-971a2b1838ad/deploy-status)](https://app.netlify.com/sites/gatsby-ideas42ventures/deploys) [![codecov](https://codecov.io/gh/ideas42ventures/gatsby-ideas42ventures.com/branch/main/graph/badge.svg?token=ZZHD0V5IUT)](https://codecov.io/gh/ideas42ventures/gatsby-ideas42ventures.com)



<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Your website name
</h1>

## About this template

Technology choices:
- Gatsby, React, Netlify
- eslint
- Jest for unit testing
- cypress for end to end tests



## Creating a repository from this template

1. Follow [Github instrcutions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for creating a repo from a template
1. [Link your Netlify account](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)


## 🚀 Development Quick start

1. **Prerequisites**
    - Install yarn. `npm install --global yarn`

    - Install gatsby-cli `npm install -g gatsby-cli`

    - To use our githooks (we recommend that you do, they will ensure that your branch passes CI), run
      ```shell
      git config core.hooksPath .githooks
      ```
    - To use the correct version of Node for the project run from the root directory
      ```
      nvm use
      ```


1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    yarn install
    yarn develop
    ```

    Your site is now running at http://localhost:8000!

    Pages should update automatically as you edit the code.
    *Note:* CSS will sometimes not update after the page encounters an error, so you may have to manually refresh.

1. **Run tests**

    We use [Jest](https://jestjs.io/docs/getting-started) as our test runner and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) facilitate testing React components.

    Run tests by using `yarn test` or `yarn test:watch`. Using watch will watch for changes to your files and re-run the tests as files are updated.

    Information on our testing setup:
    - [Gatsby/Jest Setup](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/)
    - [React testing library setup](https://testing-library.com/docs/react-testing-library/setup)

1.  **Run and serve build locally**

    The build and develop scripts are not identical. To ensure the build process runs smoothly, run:

    ```shell
    yarn build
    ```

    To serve the built site, run:

    ```shell
    yarn serve
    ```

    See: [Overview of the Gatsby Build Process](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/) for more information.

## More information

### Linting and Formatting

  There are several commands for linting your code:

  - `yarn lint:js` runs linting on JavaScript and TypeScript files
  - `yarn lint:styles` runs linting on `.scss` files
  - `yarn lint` runs both of the above
  - `yarn lint:fix` runs both Typescript/Javascript linting and styles linting with the `--fix` flag
  - `yarn format` runs prettier on your code

  `yarn lint` and `yarn format` will be run via the pre-push hook. Your code should be properly linted and formatted before you request PR review.

### End to end testing

We use [cypress](https://docs.cypress.io/) to run end to end tests. To run end to end tests locally:

  1. Run the local server `yarn run start`
  1. Open the test runner `yarn run test:e2e`

To run the tests on the production build locally:
  1. Build and serve the code: `yarn build && yarn serve`
  1. Explicitly sent the base url when running the tests: `CYPRESS_BASE_URL=http://localhost:9000 yarn test:e2e`

End to end tests will be run via [netlify-plugin-cypress](https://github.com/cypress-io/netlify-plugin-cypress) when a PR is made. If they fail, the Netlify build will fail; check the Netlify logs for details.

### Redirects

Redirects can be added via the `static/_redirects` file. Because we are doing redirect via [Netlify](https://docs.netlify.com/routing/redirects/), redirects will not be applied locally. You can test your redirect via the netlify preview in your pull request.

### MDX pages

Because of the way Gatsby processes imports on `.mdx` pages, you cannot use relative imports on these pages. The directory is set to `/src`, so any imports in your `.mdx` pages should assume `/src` as the root directory.

### Creating a shared git hook
  1. Add the hook file you want to add to the `.githooks` directory
  1. Make it executable, e.g. `chmod +x .githooks/pre-commit`

### Skipping the pre-push hook
If you are certain a pre-push verification step should be overridden (e.g., a minor package version update shouldn't be commited yet), you can run `git push --no-verify` to push your branch by skipping the hook.

### Testing GitHub Actions locally

Rather than having to commit and push everytime you want to test out changes to GitHub Action YAML files, you can run install [nektos/act](https://github.com/nektos/act) with `$ brew install act` and run with `$ act` to run them via a locally served Docker container.

If you add an action that is unsupported by act, you can skip that action locally by adding the following line in your `.github/workflows/ci.yaml` file: `if: ${{ !env.ACT }}`.

### Updating from this template

If you want to update your repository from this template, add the template as a remote, fetch the template's `main` branch and merge it into your branch.

```
git remote add template git@github.com:ideas42ventures/gatsby-react-template.git
git fetch template
git merge template/main
```

### Code coverage

These steps will enable you to turn on code coverage for the project.

1. Login to [codecov.io](codecov.io)
1. Enable code coverage for your repo
1. Enter the CODECOV_TOKEN into your GitHub action secrets, by going to `Settings > Secrets > Actions secret > New repository secret`
1. Uncomment the code coverage lines in `.github/workflows/ci.yml`.

### Images
 They can then be imported directly into a file and used with and `img` tag, or accessed via graphql query. Svg images can be imported and used directly by adding `.inline.svg` to the name of the file.

#### Direct import
This method does not take advantage of gatsby's image processing.
Images should be placed in the `src/images` directory.

```javascript
import MyImage from "../images/my-image.png

() => (
  <img src={MyImage}>
)
```

#### Gatsby image query
Images should be placed in the `static/assets/images` directory.

```javascript
const PeopleList: React.FC<PeopleListProps> = ({
  peopleImages = [],
}) => {

  return (
    <ul>
      {peopleImages.map((member) => {
        const personImage = peopleImages.find((img) => img.name === member.img);
        return (
          <li><img
            src={profileImageUrl}
            alt={person.name}
            className="card__image"
            data-testid="personImage"
          /></li>
        );
      })}
    </ul>
  );
};

export default (props: PeopleListProps): JSX.Element => (
  <StaticQuery
    query={graphql`
      query PeopleImagesQuery {
        allFile(filter: { relativeDirectory: { eq: "people" } }) {
          nodes {
            childImageSharp {
              gatsbyImageData(width: 400, height: 400)
            }
            name
          }
        }
      }
    `}
    render={(data) => (
      <PeopleList peopleImages={data.allFile.nodes} {...props} />
    )}
  />
);
```

#### SVGs
Svgs can be used inline by if the file ends in `.inline.svg`. They can then be imported and used as components.

```javascript
import CoolSvg from 'cool.inline.svg';

() => (
  <CoolSvg />
)
```

## **Learn more about Gatsby**

  - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

  - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

  - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

  - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

  - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

  - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
