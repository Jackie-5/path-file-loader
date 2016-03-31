/**
 * Created by JackieWu on 16/3/31.
 */
var loaderUtils = require("loader-utils");

module.exports = function (content) {
    this.cacheable && this.cacheable();
    if (!this.emitFile) throw new Error("emitFile is required from module system");
    var query = loaderUtils.parseQuery(this.query);
    var fileName = loaderUtils.interpolateName(this, query.name || "[name].[ext]", {
        context: query.context || this.options.context,
        content: content,
        regExp: query.regExp
    });
    var url = query.publicPath ? query.publicPath.split('/').join('/') + fileName.split('/')[fileName.split('/').length - 1] : query.cssPath ? query.cssPath + fileName.split('/')[fileName.split('/').length - 1] : fileName;
    var cssPath = query.cssPath ? query.cssPath + fileName.split('/')[fileName.split('/').length - 1] : url;
    this.emitFile(url, content);
    return "module.exports = __webpack_public_path__ + " + JSON.stringify(cssPath) + ";";
};
module.exports.raw = true;
