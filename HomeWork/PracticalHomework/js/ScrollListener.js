function scroll() {
    //console.log("打印log日志");实时看下效果
    // console.log("开始滚动！");
}

var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 30) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
            // var t = document.getElementById("back_top");
            // t.style.background="while";
            // t.style.animation="fade-in";
            // t.style.animationDuration="1s";
        }
        if (e.wheelDelta < -30) { //当滑轮向下滚动时
            console.log("滑轮向下滚动");
            // var t = document.getElementById("back_top");
            // t.style.background="transparent";
            // t.style.animation="fade-out";
            // t.style.animationDuration="1s";
        }
    } else if (e.detail) { //Firefox滑轮事件
        if (e.detail > 0) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
        }
        if (e.detail < 0) { //当滑轮向下滚动时
            console.log("滑轮向下滚动");
        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {//firefox
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法 //ie 谷歌
window.onmousewheel = document.onmousewheel = scrollFunc;