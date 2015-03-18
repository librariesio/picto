/*

              _        __
       ___   (_) ____ / /_ ___   ___ _  ____ ___ _  __ _
      / _ \ / / / __// __// _ \ / _ `/ / __// _ `/ /  ' \
     / .__//_/  \__/ \__/ \___/ \_, / /_/   \_,_/ /_/_/_/
    /_/                        /___/

                 A pictorial symbol for a word or phrase.

                                  A libraries.io project.

- pictograms on the console...
*/
const pictureTube = require('picture-tube')
const pictogram = require('pictogram')

function show (opts) {
  var tube = pictureTube()
  tube.pipe(process.stdout)
  // TODO: barfs on all, only support single for now.
  var list = opts.all ? pictogram.list() : [opts.name]
  list.forEach(function (name) {
    pictogram(name).pipe(tube)
  })
}

module.exports = show
