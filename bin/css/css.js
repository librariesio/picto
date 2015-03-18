var fs = require('fs')
var Handlebars = require('handlebars')
var cssesc = require('cssesc')
var pictogram = require('pictogram')

function generateCss (opts) {
  var baseUrl = 'http://librariesio.github.io/pictogram/'
  var data = prepareList(pictogram.list(opts.dir || process.cwd()), baseUrl)
  return toCss(data)
}

function prepareList (list, baseUrl) {
  return list.map(function (item) {
    return {
      name: item,
      cssIdentifier: cssesc(item, {'isIdentifier': true}),
      url : baseUrl + item + '/' + item + '.png'
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
