<a href="https://opensource.newrelic.com/oss-category/#community-plus"><picture><source media="(prefers-color-scheme: dark)" srcset="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/dark/Community_Plus.png"><source media="(prefers-color-scheme: light)" srcset="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/Community_Plus.png"><img alt="New Relic Open Source community plus project banner." src="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/Community_Plus.png"></picture></a>

**Note**: This instrumentation has been merged into the [New Relic Node.js Agent](https://github.com/newrelic/node-newrelic/releases/tag/v12.0.0), please upgrade to v12.0.0 of `newrelic`.

# New Relic Next.js instrumentation 
[![npm status badge][4]][5] [![Next.js Instrumentation CI][1]][2] [![codecov][6]][7]

This is New Relic's official Next.js framework instrumentation for use with the New Relic [Node.js agent](https://github.com/newrelic/node-newrelic).

This module provides instrumentation for server-side rendering via [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props), [middleware](https://nextjs.org/docs/middleware), and New Relic transaction naming for both page and server requests. It does not provide any instrumentation for actions occurring during build or in client-side code.  If you want telemetry data on actions occurring on the client (browser), you can [inject the browser agent](./docs/faqs/browser-agent.md).

Here are documents for more in-depth explanations about [transaction naming](./docs/transactions.md), and [segments/spans](./docs/segments-and-spans.md).

**Note**: The minimum supported Next.js version is [12.0.9](https://github.com/vercel/next.js/releases/tag/v12.0.9).  If you are using Next.js middleware the minimum supported version is [12.2.0](https://github.com/vercel/next.js/releases/tag/v12.2.0).

## Installation

Currently this package is not bundled with the agent, and must be installed as a standalone.  However, the package depends on the agent so you will get all the capabilities of the agent when loading this package.

```
npm install @newrelic/next
```

```js
NODE_OPTIONS='-r @newrelic/next' next start
```

If you cannot control how your program is run, you can load the `@newrelic/next` module before any other module in your program. However, we strongly suggest you avoid this method at all costs.  We found bundling when running `next build` causes problems and also will make your bundle unnecessarily large.

```js
require('@newrelic/next')

/* ... the rest of your program ... */
```

### Custom Next.js servers

If you are using next as a [custom server](https://nextjs.org/docs/advanced-features/custom-server), you're probably not running your application with the `next` CLI.  In that scenario we recommend running the Next.js instrumentation as follows.

```js
node -r @newrelic/next your-program.js
```

For more information, please see the agent [installation guide][3].

## Getting Started

Our [API and developer documentation](http://newrelic.github.io/node-newrelic/) for writing instrumentation will be of help. We particularly recommend the tutorials and various "shim" API documentation.

## FAQs

If you are having trouble getting the `@newrelic/next` package to instrument Next.js, take a look at our [FAQs](./docs/faqs/README.md).

## Testing

The module includes a suite of unit and functional tests which should be used to
verify that your changes don't break existing functionality.

All tests are stored in `tests/` and are written using
[Tap](https://www.npmjs.com/package/tap) with the extension `.test.js` (unit), or `.tap.js` (versioned).

To run the full suite, run: `npm test`.

Individual test scripts include:

```
npm run unit
npm run versioned
```

## Example projects

The following example applications show how to load the `@newrelic/next` instrumentation, inject browser agent, and handle errors:

 * [Pages Router example](https://github.com/newrelic/newrelic-node-examples/tree/58f760e828c45d90391bda3f66764d4420ba4990/nextjs-legacy)
 * [App Router example](https://github.com/newrelic/newrelic-node-examples/tree/58f760e828c45d90391bda3f66764d4420ba4990/nextjs-app-router)

## Support

New Relic hosts and moderates an online forum where you can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

* [New Relic Documentation](https://docs.newrelic.com/docs/agents/nodejs-agent/getting-started/introduction-new-relic-nodejs): Comprehensive guidance for using our platform
* [New Relic Community](https://forum.newrelic.com/): The best place to engage in troubleshooting questions
* [New Relic Developer](https://developer.newrelic.com/): Resources for building a custom observability applications
* [New Relic University](https://learn.newrelic.com/): A range of online training for New Relic users of every level
* [New Relic Technical Support](https://support.newrelic.com/) 24/7/365 ticketed support. Read more about our [Technical Support Offerings](https://docs.newrelic.com/docs/licenses/license-information/general-usage-licenses/support-plan).

## Contribute

We encourage your contributions to improve the Next.js instrumentation module! Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.

If you have any questions, or want to execute our corporate CLA (which is required if your contribution is on behalf of a company), drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

If you would like to contribute to this project, review [these guidelines](./CONTRIBUTING.md).

To all contributors, we thank you!  Without your contribution, this project would not be what it is today.  We also host a community project page dedicated to [New Relic Next.js instrumentation](https://opensource.newrelic.com/projects/newrelic/newrelic-node-nextjs).

## License
New Relic Next.js instrumentation is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.

New Relic Next.js instrumentation also uses source code from third-party libraries. You can find the full details on which libraries are used and the terms under which they are licensed in the third-party notices document.

[1]: https://github.com/newrelic/newrelic-node-nextjs/workflows/Next.js%20Instrumentation%20CI/badge.svg
[2]: https://github.com/newrelic/node-newrelic-nextjs/actions
[3]: https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent
[4]: https://img.shields.io/npm/v/@newrelic/next.svg 
[5]: https://www.npmjs.com/package/@newrelic/next
[6]: https://codecov.io/gh/newrelic/newrelic-node-nextjs/branch/main/graph/badge.svg?token=UPO8LT1X4W 
[7]: https://codecov.io/gh/newrelic/newrelic-node-nextjs
