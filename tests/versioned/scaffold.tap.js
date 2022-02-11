/*
 * Copyright 2022 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

const tap = require('tap')
const helpers = require('./helpers')
const utils = require('@newrelic/test-utilities')

tap.test('Next.js', function (t) {
  t.autoend()
  let agent
  let app
  let port

  t.before(async function () {
    agent = utils.TestAgent.makeInstrumented()
    agent.registerInstrumentation({
      moduleName: './next-server',
      type: 'web-framework',
      onRequire: require('../../lib/server')
    })
    // I was hoping to use require.cache to see stuff was loaded via CLI
    // istanbul and nyc is getting loaded so that might be a tell
    // It also does not look like the CLI adds context to say the suite was executed
    // via Tap CLI
    //await helpers.build()
    port = await getPort()
    app = await helpers.start(port)
  })

  t.teardown(() => {
    app.options.httpServer.close()
    agent.unload()
  })

  t.test('should properly name transactions', (t) => {
    let transactions = 0
    agent.agent.on('transactionFinished', function (tx) {
      transactions++
      const name =
        transactions === 1
          ? 'WebTransaction/WebFrameworkUri/Nextjs/GET//api/person/[id]'
          : 'WebTransaction/WebFrameworkUri/Nextjs/GET//person/[id]'
      t.equal(tx.name, name, 'should properly name Next transaction')
    })

    return helpers.makeRequest('/person/1', port).then((res) => {
      t.equal(transactions, 2, 'should be 2 transactions')
      t.equal(res.statusCode, 200)
      t.end()
    })
  })
})
