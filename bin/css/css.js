const fs = require('fs')
const Handlebars = require('handlebars')
const cssesc = require('cssesc')
const pictogram = require('pictogram')

const BASE_URL = 'http://librariesio.github.io/pictogram/'

function generateCss (opts) {
  var baseUrl = opts.baseUrl || BASE_URL
  var data = prepareList(pictogram.list(opts.dir || process.cwd()), baseUrl)
  return toCss(data)
}

function prepareList (list, baseUrl) {
  return list.map(function (item) {
    var urlSafeItem = encodeURIComponent(item)
    return {
      name: item,
      cssIdentifier: cssesc(item, {'isIdentifier': true}),
      url : baseUrl + urlSafeItem + '/' + urlSafeItem + '.png'
    }
  })
}

function toCss (data) {
  var tpl = Handlebars.compile(fs.readFileSync(__dirname + '/pictogram.css.hbs', 'utf8'))
  return tpl(data)
}

function print (opts) {
  console.log(generateCss(opts))
}

module.exports = generateCss
module.exports.toCss = toCss
module.exports.prepareList = prepareList
module.exports.print = print
