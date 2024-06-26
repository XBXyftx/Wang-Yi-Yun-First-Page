// window.onload = function(){
//     // /***
//     //  *读取指定的Cookie值
//     //  *@param {string} cookieName Cookie名称
//     //  */

//     //  function ReadCookie(cookie_name){
//     //     alert("ReadCookie");
//     //     alert(document.cookie);
//     //     //判断是否存在cookie
//     //     if (document.cookie.length > 0){
//     //         //查询cookie开始部分
//     //         cookie_start = document.cookie.indexOf(cookie_name + "=")
//     //         //如果存在
//     //         if (cookie_start != -1){
//     //             //计算结束部分
//     //             cookie_start = cookie_start + cookie_name.length + 1
//     //             cookie_end = document.cookie.indexOf(";", cookie_start)
//     //             //如果已经是最后一个cookie值，则取cookie长度
//     //             if (cookie_end == -1) {
//     //                 cookie_end = document.cookie.length
//     //             }
//     //             //获取cookie值，unescape对特殊字符解密
//     //             return unescape(document.cookie.substring(cookie_start,cookie_end))
//     //         }
//     //     }
//     //     //其它情况返回空
//     //     return ""
//     // }

//     // function $(id) {
//     //     return document.getElementById(id);
//     // }

//     // window.onload=function(){
//     //     init();
//     // }

//     // function init() {
//     //     alert("init")
//     //     var searchCookie = ReadCookie("searchCookie");
//     //     if(searchCookie && searchCookie.length>0) {
//     //         $("msg").innerHTML = "<h1>您的搜索关键词为" + searchCookie + "!</h1>";
//     //     } else {
//     //         $("msg").innerHTML = "帮您找到了" + "<a href='#'>" + searchCookie +"精品课</a>";
//     //     }
//     // }
//     // cookie未能成功因为浏览器会自动对本地文件发送给本地文件的cookie进行拦截



//     document.addEventListener("DOMContentLoaded", function() {
//         // 创建一个URLSearchParams对象，用于处理URL查询字符串
//         const urlParams = new URLSearchParams(window.location.search);
//         // 获取URL参数中的"user"参数的值
//         const userText = urlParams.get('user');
//         // 获取显示用户输入内容的DOM元素
//         const displayUserText = document.getElementById("msg");

//         // 如果URL参数中包含"user"参数
//         if (userText) {
//             // 更新DOM元素的文本内容，显示用户输入的值
//             displayUserText.textContent = `User input: ${userText}`;
//         } else {
//             // 如果URL中没有"user"参数，显示默认消息
//             displayUserText.textContent = 'No user input received.';
//         }
//     });

// }




// 以下是对url传递方法的尝试

document.addEventListener("DOMContentLoaded", function() {
    // 获取URL参数
    const params = new URLSearchParams(window.location.search);
    const userText = params.get('user');
    // 显示参数内容
    const displayElement = document.getElementById('display');
    displayElement.textContent = userText;
});

document.addEventListener("click", function() {
    // 获取按钮和输入框的DOM元素
    // alert("DOMContentLoaded")
    const mySpan = document.getElementById("mySpan");
    const userInput = document.getElementById("user");

    // 为按钮添加点击事件监听器
    mySpan.addEventListener("click", function() {
        // 获取输入框的值
        const userText = userInput.value;

        // 检查输入框是否有值
        if (userText) {
            // 创建带有输入框内容作为参数的URL
            const url = `../html/second.html?user=${encodeURIComponent(userText)}`;
            // 跳转到新的URL（second.html页面）
            window.location.href = url;
        }
    });
});
