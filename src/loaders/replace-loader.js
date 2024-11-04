const { getOptions } = require('loader-utils')//从untils获取方法，得到webpack.config.js传来的参数(版本报错，不用了！)
module.exports = function (source) {
    //source参数为接受文件的内容
    let {name} = this.query//使用this.query不用getOptions了因为有问题
    const content = source.replace("李伟杭",name)//换成webpack.config.js传来的参数：野种李伟杭
    return content
}