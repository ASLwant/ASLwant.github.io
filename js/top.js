// 找到回到顶部按钮
var backToTopButton = document.querySelector('.kira-backtotop');

// 添加点击事件处理程序
backToTopButton.addEventListener('click', function(event) {
    // 滚动页面顶部
    document.querySelector('#kira-top-header').scrollIntoView({behavior: 'smooth'});
});

