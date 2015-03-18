
# Picto

A CLI for wrangling [pictograms](https://github.com/librariesio/pictogram)

 **Install via npm**
```sh
npm install -g picto
```

## Commands

**See pictograms in your terminal!**

```sh
picto show haskell
```

![picto show haskell](https://cloud.githubusercontent.com/assets/58871/6697281/78d00dbe-cce7-11e4-9399-7ff7095be34d.png)


**List the published pictograms**
```sh
picto ls
```

**Generate the css for all picotgrams in the current dir**
```sh
cd pictograms
picto css > pictograms.css
```

**Grab a pictogram from a url**
```sh
cd pictograms
picto grab <name> <url> <referrer>
```

**Grab a pictogram from a GitHub org**
```sh
cd pictograms
picto gh <name> <org>
```

**Show a ghuser avatar on the terminal, because we can**
```sh
picto ghuser barisbalic
```

![picto ghuser barisbalic](https://cloud.githubusercontent.com/assets/58871/6719286/6b52c62a-cdb1-11e4-81dc-31c7a4f10137.png)

## Credits

- Images in the terminal via [picture-tube](https://github.com/substack/picture-tube)
- CLI arg wrangling via [nomnom](https://github.com/harthur/nomnom)
- [libraries.io]() via [@andrew](https://github.com/andrew)



              _        __
       ___   (_) ____ / /_ ___   ___ _  ____ ___ _  __ _
      / _ \ / / / __// __// _ \ / _ `/ / __// _ `/ /  ' \
     / .__//_/  \__/ \__/ \___/ \_, / /_/   \_,_/ /_/_/_/
    /_/                        /___/

                 A pictorial symbol for a word or phrase.

                                  A libraries.io project.
