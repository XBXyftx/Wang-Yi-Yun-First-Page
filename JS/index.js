window.onload = function() {
    // 获取所有轮播图的图片元素
    let imgs = document.querySelectorAll('.bannerImg');
    // 获取所有轮播图下方的小圆点元素
    let circles = document.querySelectorAll('.circle');
    // 获取左按钮
    let leftBtn = document.getElementById('btn-left');
    // 获取右按钮
    let rightBtn = document.getElementById('btn-right');
    // 获取轮播图区域的容器元素
    let content = document.getElementById('content');
    // 当前显示图片的索引
    let currentIndex = 0;
    // 自动播放的定时器
    let timer;

    // 显示指定索引的图片，并更新小圆点的状态
    function showImage(index) {
        // 遍历所有图片，显示当前索引的图片，隐藏其他图片
        imgs.forEach((img, i) => {
            img.parentElement.style.display = (i === index) ? 'block' : 'none';
        });
        // 遍历所有小圆点，激活当前索引的小圆点，取消激活其他小圆点
        circles.forEach((circle, i) => {
            circle.classList.toggle('active', i === index);
        });
    }

    // 显示下一张图片
    function nextImage() {
        // 更新当前索引到下一张图片，循环到第一张
        currentIndex = (currentIndex + 1) % imgs.length;
        // 显示当前索引的图片
        showImage(currentIndex);
    }

    // 显示上一张图片
    function prevImage() {
        // 更新当前索引到上一张图片，循环到最后一张
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        // 显示当前索引的图片
        showImage(currentIndex);
    }

    // 为右按钮添加点击事件，点击显示下一张图片
    rightBtn.addEventListener('click', nextImage);
    // 为左按钮添加点击事件，点击显示上一张图片
    leftBtn.addEventListener('click', prevImage);

    // 为每个小圆点添加点击事件，点击显示对应索引的图片
    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    // 启动自动播放
    function startAutoPlay() {
        // 每3秒显示下一张图片
        timer = setInterval(nextImage, 3000);
    }

    // 停止自动播放
    function stopAutoPlay() {
        // 清除定时器
        clearInterval(timer);
    }

    // 鼠标移入轮播图区域，停止自动播放，显示左右按钮
    content.addEventListener('mouseover', () => {
        stopAutoPlay();
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
    });

    // 鼠标移出轮播图区域，启动自动播放，隐藏左右按钮
    content.addEventListener('mouseleave', () => {
        startAutoPlay();
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    });

    // 页面加载完成后，启动自动播放
    startAutoPlay();

    // 利用cookie进行页面间数据传递
    /***
         * @param {string} cookieName Cookie名称
         * @param {string} cookieValue Cookie值
         */
    function SetCookie(cookieName,cookieValue) {
        /*设置Cookie值*/
        document.cookie = cookieName + "=" + encodeURIComponent(cookieValue)
        // encodeURIComponent用于编码字符串防止乱码发生
        // escape()的编码方法已经过时encodeURIComponent可以更有效的阻止乱码
    }
    function login() {
        alert("a")
        var searchCookie = $("user").value;
            if(searchCookie.length>0 && searchCookie) {
                SetCookie("searchCookie", searchCookie);
                /*second.html*/
                document.location = "../html/second.html";
            }
    }
    function $(id) {
        return document.getElementById(id);
    }

};
