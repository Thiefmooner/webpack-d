const { getOptions } = require('loader-utils')//从untils获取方法，得到webpack.config.js传来的参数(版本报错，不用了！)
const { SourceMap } = require('module');
module.exports = async function (source) {
    //source参数为接受文件的内容
    let {name} = this.query//使用this.query不用getOptions了因为有问题
    const content = await source.replace("李伟杭", name)//换成webpack.config.js传来的参数：野种李伟杭
    //使用async、await处理异步loader，注意这里是示例，并不是真的异步
    return content//注意返回的是content
}