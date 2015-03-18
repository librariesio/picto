var test = require('tape')

var css = require('../../../bin/css/css.js')

test('pictorgram.prepareList', function (t){
  t.plan(5)
  var list = css.prepareList(['c++', 'scala'])

  t.equals(list.length, 2, 'list has 2 items')

  // escape names
  t.equals(list[0].name, 'c++', 'first name is c++')
  t.equals(list[0].cssIdentifier, 'c\\+\\+', 'cssIdentifier is escaped')
  t.equals(list[1].name, 'scala', 'second name is scala')
  t.equals(list[1].cssIdentifier, 'scala', 'cssIdentifier is unescaped')
})
