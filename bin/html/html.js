const fs = require('fs')
const Handlebars = require('handlebars')
const pictogram = require('pictogram')

function generateHtml (opts) {
  var data = prepareList(pictogram.list(opts.dir || process.cwd()))
  return toHtml(data)
}

function prepareList (list) {
  return list.map(function (item) {
    return {
      name: item
    }
  })
}

function toHtml (data) {
  var tpl = Handlebars.compile(fs.readFileSync(__dirname + '/index.html.hbs', 'utf8'))
  return tpl(data)
}

function print (opts) {
  console.log(generateHtml(opts))
}

module.exports = generateHtml
module.exports.toHtml = toHtml
module.exports.prepareList = prepareList
module.exports.print = print
