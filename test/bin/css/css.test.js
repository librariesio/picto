var test = require('tape')

var css = require('../../../bin/css/css.js')

test('pictorgram.prepareList', function (t){
  t.plan(10)

  var data = ['c++', 'f#', 'scala']
  var list = css.prepareList(data, 'http://butt.systems/')

  t.equals(list.length, data.length, 'list has all items')

  // escape names
  t.equals(list[0].name, 'c++', 'first name is c++')
  t.equals(list[0].cssIdentifier, 'c\\+\\+', '+ is escaped in cssIdentifier')
  t.equals(list[0].url, 'http://butt.systems/c%2B%2B/c%2B%2B.png', '+ is encoded in url')

  t.equals(list[1].name, 'f#', 'second name is f#')
  t.equals(list[1].cssIdentifier, 'f\\#', '# is escaped in cssIdentifier')
  t.equals(list[1].url, 'http://butt.systems/f%23/f%23.png', '# is escaped in url')

  t.equals(list[2].name, 'scala', 'third name is scala')
  t.equals(list[2].cssIdentifier, 'scala', 'cssIdentifier is unescaped')
  t.equals(list[2].url, 'http://butt.systems/scala/scala.png', 'url is unescaped')
})
