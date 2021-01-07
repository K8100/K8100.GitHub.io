var images=["../image/bookk1.jpg","../image/bookk2.jpg","../image/bookk3.jpg"];
var timer;
onload = function() {
    // 3.切换图片src属性 - 什么时候切换 - 周期性切换
    //   也就是说,在页面加载之后,开启一个周期性定时器,定时器内部要完成图片切换
    timer = setInterval("changeImage()", 3000);
}
// 定义一个计数器
var index = 0;
function changeImage() {
    // 4.切换图片src属性
    // a.获得img标签
    var banner = document.getElementById("banner");
    // b.修改它的src属性
    index ++;
    banner.src = images[index % 3];
}
function stopImage() {
    // 暂停轮播就是让定时器暂停工作
    clearInterval(timer);
}
function startImage() {
    timer = setInterval("changeImage()", 1000);
}