function Com () {
    var div=document.createElement('div')
    div.innerHTML="第二个入口文件"
    return div
}
document.body.appendChild(Com())