const { getOptions } = require('loader-utils')//从untils获取方法，得到webpack.config.js传来的参数(版本报错，不用了！)
const { SourceMap } = require('module');
module.exports = function (source) {
    //source参数为接受文件的内容
    let {name} = this.query//使用this.query不用getOptions了因为有问题
    const content = source.replace("李伟杭", name)//换成webpack.config.js传来的参数：野种李伟杭

    //return content

    //如果有多个需要返回的值，比如SourceMap，则需要用到loader本身提供的callback,一个返回值也可以用callback
    this.callback(null,content)
    /**
     * callback的参数说明
     * callback({
     *    // 报错
     *    error: Error | Null,
     *    // 转换后的内容
     *    content: String | Buffer,
     *    // 转换后的内容得出的sourceMap
     *    sourceMap?: SourceMap,
     *    // ast
     *    abstractSyntaxTree?: AST 
     * })
     */

}