#!/usr/bin/env node

/*

              _        __
       ___   (_) ____ / /_ ___   ___ _  ____ ___ _  __ _
      / _ \ / / / __// __// _ \ / _ `/ / __// _ `/ /  ' \
     / .__//_/  \__/ \__/ \___/ \_, / /_/   \_,_/ /_/_/_/
    /_/                        /___/

                 A pictorial symbol for a word or phrase.

                                  A libraries.io project.

 Create a new pictogram entry for a name or serve up what have.

 ```sh
 # grab a image url
 picto grab <name> <url> <source>

 # grab the org image from github
 picto gh <name> <org>

 # Serve up the data dir on port
 picto serve -p 8080

 # create a css file for all pictograms
 picto css

 # list all pictograms
 picto list

 # Erh merh gerd
 picto show <name>
 ```

*/
const http = require('http')
const ecstatic = require('ecstatic')
const cli = require('nomnom')
const grab = require('./grab/grab.js')
const regrab = require('./regrab/regrab.js')
const gh = require('./gh/gh.js')
const ghUser = require('./gh/user.js')
const css = require('./css/css.js')
const list = require('./list/list.js')
const show = require('./show/show.js')

cli.command('ls').callback(list)

cli.command('list').callback(list)

cli.command('show').options({
  name: {
    required: true,
    position: 1,
    help: "the concept"
  }
}).callback(show)

cli.command('grab').options({
  name: {
    required: true,
    position: 1,
    help: "the concept"
  },
  url: {
    required: true,
    position: 2,
    help: 'the image url'
  },
  referrer: {
    required: true,
    position: 3,
    help: 'the page you found the image on'
  },
  force: {
    flag: true,
    abbr: 'f',
    help: 'to hell with the consequences'
  }
}).callback(grab)

cli.command('regrab').options({
  name: {
    required: true,
    position: 1,
    help: "the concept"
  },
}).callback(regrab)

cli.command('gh').options({
  name: {
    required: true,
    position: 1,
    help: "the concept"
  },
  org: {
    position: 2,
    help: 'the github org name'
  },
  force: {
    flag: true,
    abbr: 'f',
    help: 'to hell with the consequences'
  }
}).callback(gh)

cli.command('ghuser').options({
  name: {
    required: true,
    position: 1,
    help: "github username"
  }
}).callback(ghUser)

cli.command('serve').options({
  port: {
    abbr: 'p',
    position: 1,
    help: 'serve up the pictogram'
  }
}).callback(function(opts){
  var port = opts.port || 1337
  http.createServer(
    ecstatic({ root: __dirname + '/../data' })
  ).listen(port);
  console.log('Serving pictograms on :' + port)
})

cli.command('css').options({
  dir: {
    position: 1,
    help: 'directory of pictograms'
  }
}).callback(css.print)

cli.parse();
