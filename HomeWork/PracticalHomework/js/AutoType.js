var str = 'js 实现的 打字效果，感觉蛮有趣的。';
var i = 0;

function typing() {
    var divTyping = document.getElementById('divTyping');
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_';
        setTimeout('typing()', 200);//递归调用
    } else {
        divTyping.innerHTML = str;//结束打字,移除 _ 光标
    }
}

typing();