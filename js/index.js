/*搜索框内容的显示与隐藏及相关样式的改变*/
(function(){
    //查找触发事件的元素
    var searchContainer=document.querySelector(".search-container");
    var search=document.querySelector(".nav-search input");
    var img=document.querySelector(".nav-search img");
    //点击搜索框后，实现div的显示。搜索框样式的改变，搜索按钮图片地址和样式的改变
    search.onclick=function(){
        searchContainer.style.display="block";
        //搜索框样式的变化
        search.style.borderBottom="3px solid #4a4a4a";
        search.style.width="250px";
        search.style.marginLeft="-145px";
        //搜索按钮样式的变化
        img.src="img/index/search-close.png";
        img.style.margin="10px";
    }
    //点击搜索按钮后，实现div的隐藏，搜索框样式的改变，搜索按钮图片地址和样式的改变
    function close(){
        searchContainer.style.display="none";
        search.style.borderBottom="1px solid #4a4a4a";
        search.style.width="105px";
        search.style.marginLeft="0px";
        img.src="img/index/search.png";
        img.style.margin="5px";
    }
    img.onclick=function(){
        close();
    }

})();
/*点击下载*/
(function(){
    //查找触发事件的元素
    var div=document.querySelectorAll(".platforms>div>div");
    var logo=document.querySelectorAll(".platforms div>a>img");
    var p1=document.querySelector(".download-info>p:first-child");
    var img=document.querySelector(".download-info>img");
    //遍历所有logo
    for(var i=0;i<div.length;i++){
        div[i].index=i;
        //当鼠标移入div时，绑定事件处理函数
        div[i].onmousemove=function(){
            //this绑定当前触发事件的元素
            //鼠标移入macOS时，触发以下事件
            if(this.index==0){
                logo[this.index].src="img/index/ios.png";
                p1.innerHTML="扫描二维码下载";
                img.src="img/index/erweima.png";
            }else if(this.index==1){
                logo[this.index].src="img/index/android.png";
                p1.innerHTML="扫描二维码下载";
                img.src="img/index/erweima.png";
            }else if(this.index==2){
                logo[this.index].src="img/index/download.png";
                p1.innerHTML="<a href=\"#\" style=\"font-size:12px;font-weight:500;color:#ff410f;\">点击下载<br>macOS桌面端</a>";
                img.src="img/index/leftbar2.png";
            }else if(this.index==3){
                logo[this.index].src="img/index/download.png";
                p1.innerHTML="<a href=\"#\"  style=\"font-size:12px;font-weight:500;color:#ff410f;\">点击下载<br>Windows桌面端</a>";
                img.src="img/index/leftbar2.png";
            }
        }
        //当鼠标移出div时，绑定事件处理函数
        div[i].onmouseout=function(){
            //this绑定当前触发事件的元素
            if(this.index==2){
                logo[this.index].src="img/index/macOS.png";
            }else if(this.index==3){
                logo[this.index].src="img/index/windows.png";
            }
        }
    }
})();
//改为用css做了
///*播放按钮的显示与隐藏*/
//(function(){
//    //查找触发事件的元素
//    var covers=document.querySelectorAll(".adaptive-list .cover");
//    var actions=document.querySelectorAll(".cover .action");
//    //遍历所有播放按钮元素
//    for(var i=0;i<covers.length;i++){
//        covers[i].index=i;
//        //当鼠标移入cover时，绑定事件处理函数
//        covers[i].onmousemove=function(){
//            //this绑定当前触发事件的元素
//            //改变播放按钮的透明度为1--不透明，transform尺寸为原来的1.05倍
//            actions[this.index].style.opacity="1";
//            this.style.transform="scale(1.05)";
//        }
//        //改变播放按钮的透明度为0--透明，transform尺寸为原大小
//        covers[i].onmouseout=function(){
//            actions[this.index].style.opacity="0";
//            this.style.transform="scale(1)";
//        }
//    }
//})();
/*新歌榜单*/
(function(){
    var tabs=document.querySelectorAll(".song-container .song-block-title .tabs .tab");
    for(var i=0;i<tabs.length;i++){
        tabs[i].onclick=function(){
            var active=document.querySelector(".song-container  .song-block-title .tabs .tab.active");
            /*如果存在active，把它的类名变为tab，并且把正在点击的元素类名变为active*/
            if(active!=null){
                this.className="tab active";
                active.className="tab";
            }
        }
    }
})();