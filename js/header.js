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