$(function(){
    var $lis=$(".banner-btn ul li");
    var $imgs=$(".banner-btn ul li img");
    var $bannerImgs=$(".banner-img img");
    $lis.hover(
        function(){
            var $li=$(this);
            //获取当前元素的下标
            var $index=$li.index();
            //获取该下标对应的图片
            var $img=$imgs.eq($index);
            var $bannerImg=$bannerImgs.eq($index+1);
            // var $img=$(`.banner-btn ul li:eq(${$index}) img`);
            // var $bannerImg=$(`.banner-img img:eq(${$index+1})`);
            //修改图片的属性
            $img.attr("src",$img.attr("data-enter"));
            $bannerImg.addClass("active").siblings().removeClass("active");
         },
         function(){
            var $li=$(this);
            var $index=$li.index();
            var $img=$imgs.eq($index);
            var $bannerImg=$bannerImgs.eq($index+1);
            $img.attr("src",$img.attr("data-leave"));
         }
    )
})