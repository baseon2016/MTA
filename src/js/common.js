export default {
  // 页面滚动到指定位置动画
  slideTo(targetPageY) {
    const timer = setInterval(function() {
      var currentY = document.documentElement.scrollTop || document.body.scrollTop; //当前及滑动中任意时刻位置
      var distance = targetPageY > currentY ? targetPageY - currentY : currentY - targetPageY; //剩余距离
      var speed = Math.ceil(distance / 10); //每时刻速度
      if (currentY == targetPageY) {
        clearInterval(timer);
      } else {
        window.scrollTo(0, targetPageY > currentY ? currentY + speed : currentY - speed);
      }
    }, 10);
  }
};
