// 在 js 文件夹中的 backtotop.js 文件中编写以下代码
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果
    });
}

// 在页面加载完成后调用 scrollToTop 函数
window.addEventListener('load', function() {
    const backButton = document.querySelector('.kira-backtotop'); // 获取回到顶部按钮
    backButton.addEventListener('click', scrollToTop); // 绑定点击事件，点击按钮时调用 scrollToTop 函数
});

