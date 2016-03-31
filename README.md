# path-file loader for webpack

## Installation

`npm install path-file-loader --save-dev`

## Statement

Changes in the project file-loader

### modifier

@JackieWu[https://github.com/Jackie-Web]

## Usage

Keep the use of file-loader[https://github.com/webpack/file-loader]

> Q: Why change the components?

> A: Because of previous methods there is no way to change the path, so add the two variables for configuration.

## Add parameters

* `publicPath` Provide the output path configuration

* `cssPath` Provide modified CSS path configuration

## Example

> webpackConfig

`module.exports = {
   module: {
     loaders: [
       {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'path-file-loader',
            query:{
                name: '[name].[hash].[ext]',
                publicPath: './images/',
                cssPath: '../images/'
            }
        }
     ]
   }
 };
 `
