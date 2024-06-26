window.onload = function(){
    /***
     *读取指定的Cookie值
     *@param {string} cookieName Cookie名称
     */

     function ReadCookie(cookie_name){
        alert("ReadCookie");
        alert(document.cookie);
        //判断是否存在cookie
        if (document.cookie.length > 0){
            //查询cookie开始部分
            cookie_start = document.cookie.indexOf(cookie_name + "=")
            //如果存在
            if (cookie_start != -1){
                //计算结束部分
                cookie_start = cookie_start + cookie_name.length + 1
                cookie_end = document.cookie.indexOf(";", cookie_start)
                //如果已经是最后一个cookie值，则取cookie长度
                if (cookie_end == -1) {
                    cookie_end = document.cookie.length
                }
                //获取cookie值，unescape对特殊字符解密
                return unescape(document.cookie.substring(cookie_start,cookie_end))
            }
        }
        //其它情况返回空
        return ""
    }

    function $(id) {
        return document.getElementById(id);
    }

    window.onload=function(){
        init();
    }

    function init() {
        alert("init")
        var searchCookie = ReadCookie("searchCookie");
        if(searchCookie && searchCookie.length>0) {
            $("msg").innerHTML = "<h1>您的搜索关键词为" + searchCookie + "!</h1>";
        } else {
            $("msg").innerHTML = "帮您找到了" + "<a href='#'>" + searchCookie +"精品课</a>";
        }
    }
}

