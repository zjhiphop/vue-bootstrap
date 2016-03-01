# {{ name }}

> {{ description }}

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```
$ npm install -g vue-cli
$ vue init zjhiphop/vue-bootstrap my-project
$ cd my-project
$ npm install
$ npm run dev
```

### Folder Structure

``` 
.
├── build
│   ├── dev-server.js         # development server script
│   ├── karma.conf.js         # unit testing config
│   ├── webpack.base.conf.js  # shared base webpack config
│   ├── webpack.dev.conf.js   # development webpack config
│   ├── webpack.prod.conf.js  # production webpack config
│   └── ...
├── src
│   ├── main.js               # app entry file
│   ├── App.vue               # main app component
│   ├── components            # ui components
│   │   └── ...
│   ├── services              # shared common used service, such as: location,popup
│   ├── filters               # global used common filters, such as: date
│   ├── scss                  # global used common css, such as: reset
│   ├── libs                  # third party js libs (please use minified version)
│   └── assets                # module assets (processed by webpack)
│       └── ...
├── static                    # pure static assets (directly copied)
├── dist                      # built files ready for deploy
├── test
│   └── unit                  # unit tests
│       ├── index.js          # unit test entry file
│       └── ...
├── .babelrc                  # babel config
├── .eslintrc.js              # eslint config
├── index.html                # main html file
└── package.json              # build scripts and dependencies
```
## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm test
```

#### For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
=======
