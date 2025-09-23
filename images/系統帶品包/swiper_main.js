
$(function () { 


  var mainsubtitle = new Swiper('.Area_top .mainsubtitle .PD_layout .btclass', {
    wrapperClass: 'PD_wrapper', 
    slideClass: 'PD_slide',
    //循環
    loop: false, //無限循環
    
    //★5.2.1★切換特效(淡化)
    effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌) slide(一般)
    fadeEffect: {
      crossFade: true //打開自動淡出
    },
    //★5.2.1★自動撥放
    autoplay: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
      //stopOnLastSlide: true, //切換到最後時停止自動切換
      //reverseDirection: true, //反向自動輪播
    },
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        //電腦版
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },

  });	
  
  var BN_swiper = new Swiper('.BN_swiper .PD_layout .btclass', {
    wrapperClass: 'PD_wrapper', 
    slideClass: 'PD_slide',
    
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.BN_swiper .PD_layout .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //循環
    loop: false, //無限循環
    //抵亢反彈
    freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
    freeModeSticky: true, //取消只滑動1格時也可貼齊  
    freeModeMomentumBounce: true, //到頭尾不反彈  
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
        slidesPerView: 1.2,
        spaceBetween: 5,
        slidesOffsetBefore: 5, //左邊偏移量
        slidesOffsetAfter: 5, //右邊偏移量
      },
      768: {
        //電腦版
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
    },

  });	
  
    var box4_swiper = new Swiper('.box4_swiper .PD_layout .btclass', {
    wrapperClass: 'PD_wrapper', 
    slideClass: 'PD_slide',
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.box4_swiper .PD_layout .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //循環
    loop: false, //無限循環
    //抵亢反彈
    freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
    freeModeSticky: true, //取消只滑動1格時也可貼齊  
    freeModeMomentumBounce: true, //到頭尾不反彈  
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
        slidesPerView: 2.2,
        spaceBetween: 5,
        slidesOffsetBefore: 5, //左邊偏移量
        slidesOffsetAfter: 5, //右邊偏移量
      },
      768: {
        //電腦版
        slidesPerView: 4.2,
        spaceBetween: 10,
        slidesOffsetBefore: 20, //左邊偏移量
        slidesOffsetAfter: 20, //右邊偏移量
      },
    },

  });	




})



//20240625/輪播★v5.2.1★
var swiper_main = function swiper_main() { 
    
  /*輪播Area_PD1*/ 
  $(".Area_PD1 .Area_swiper .PD_layout ul").addClass('swiper-wrapper');
  $(".Area_PD1 .Area_swiper .PD_layout ul li").addClass('swiper-slide');
  var Area_PD1 = new Swiper('.Area_PD1 .Area_swiper .PD_layout .btclass', {

    //★5.2.1★小圓點【基本】-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_PD1 .Area_swiper .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_PD1 .Area_swiper .swiper-button-next',
      prevEl: '.Area_PD1 .Area_swiper .swiper-button-prev',
    },
    //★5.2.1★基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點   
    //initialSlide: Math.floor( Math.random() * $('.Area_PD1 .Area_swiper .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)
      
    //抵亢反彈
    freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
    freeModeSticky: true, //取消只滑動1格時也可貼齊

    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0:{
        //排版
        slidesPerView: 2.2, //顯示幾個
        spaceBetween: 10, //間距
        slidesOffsetBefore: 10, //左邊偏移量
        slidesOffsetAfter: 10, //右邊偏移量  
      },
      768: {
        //排版
        slidesPerView: 4.2, //顯示幾個
        spaceBetween: 10, //間距
        slidesOffsetBefore: 10, //左邊偏移量
        slidesOffsetAfter: 10, //右邊偏移量  
      },
    },
  });
    
    
  /*輪播Area_PD2*/ 
  $(".Area_PD2 .Area_swiper .PD_layout ul").addClass('swiper-wrapper');
  $(".Area_PD2 .Area_swiper .PD_layout ul li").addClass('swiper-slide');
  var Area_PD2 = new Swiper('.Area_PD2 .Area_swiper .PD_layout .btclass', {

    
    //★5.2.1★小圓點【基本】-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_PD2 .Area_swiper .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_PD2 .Area_swiper .swiper-button-next',
      prevEl: '.Area_PD2 .Area_swiper .swiper-button-prev',
    },
    //★5.2.1★基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點   
    //initialSlide: Math.floor( Math.random() * $('.Area_PD2 .Area_swiper .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)
      
    //抵亢反彈
    freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
    freeModeSticky: true, //取消只滑動1格時也可貼齊

    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0:{
        //排版
        slidesPerView: 2.2, //顯示幾個
        spaceBetween: 10, //間距
        slidesOffsetBefore: 10, //左邊偏移量
        slidesOffsetAfter: 10, //右邊偏移量  
      },
      768: {
        //排版
        slidesPerView: 4.2, //顯示幾個
        spaceBetween: 10, //間距
        slidesOffsetBefore: 10, //左邊偏移量
        slidesOffsetAfter: 10, //右邊偏移量  
      },
    },
  }); 
    
    
  /*輪播Area_PD3*/ 
  $(".Area_PD3 .Area_swiper .PD_layout ul").addClass('swiper-wrapper');
  $(".Area_PD3 .Area_swiper .PD_layout ul li").addClass('swiper-slide');
  var Area_PD3 = new Swiper('.Area_PD3 .Area_swiper .PD_layout .btclass', {

    //★5.2.1★小圓點【基本】-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_PD3 .Area_swiper .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_PD3 .Area_swiper .swiper-button-next',
      prevEl: '.Area_PD3 .Area_swiper .swiper-button-prev',
    },
    //★5.2.1★基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點   
    //initialSlide: Math.floor( Math.random() * $('.Area_PD3 .Area_swiper .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)
      
    //抵亢反彈
    freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
    freeModeSticky: true, //取消只滑動1格時也可貼齊

    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0:{
        //排版
        slidesPerView: 2.2, //顯示幾個
        spaceBetween: 10, //間距
        slidesOffsetBefore: 10, //左邊偏移量
        slidesOffsetAfter: 10, //右邊偏移量  
      },
      768: {
        //排版
        slidesPerView: 4.2, //顯示幾個
        spaceBetween: 10, //間距
        slidesOffsetBefore: 10, //左邊偏移量
        slidesOffsetAfter: 10, //右邊偏移量  
      },
    },
  }); 
    
    
  /*輪播Area_BN*/ 
  $(".Area_BN .Area_swiper .PD_layout ul").addClass('swiper-wrapper');
  $(".Area_BN .Area_swiper .PD_layout ul li").addClass('swiper-slide');
  var Area_BN = new Swiper('.Area_BN .Area_swiper .PD_layout .btclass', {

    
    //★5.2.1★小圓點【基本】-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_BN .Area_swiper .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_BN .Area_swiper .swiper-button-next',
      prevEl: '.Area_BN .Area_swiper .swiper-button-prev',
    },
    //★5.2.1★基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點   
    //initialSlide: Math.floor( Math.random() * $('.Area_BN .Area_swiper .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)
      
    //抵亢反彈
    freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
    freeModeSticky: true, //取消只滑動1格時也可貼齊

    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0:{
        //排版
        slidesPerView: 1.3, //顯示幾個
        spaceBetween: 10, //間距
        slidesOffsetBefore: 10, //左邊偏移量
        slidesOffsetAfter: 10, //右邊偏移量  
      },
      768: {
        //排版
        slidesPerView: 2.3, //顯示幾個
        spaceBetween: 10, //間距
        slidesOffsetBefore: 10, //左邊偏移量
        slidesOffsetAfter: 10, //右邊偏移量  
      },
    },
  }); 
    
    
    
    
    
    

};




/* --------------------------------------
 * 進頁面馬上執行
 * -------------------------------------- */
$(function () {
  //lazyLoadInstance.loadAll(); //圖片延遲全部加載(檢查用)
  swiper_main(); //輪播★v5.2.1★   
});


/* --------------------------------------
 * 頁面讀取完畢後執行
 * -------------------------------------- */
$(window).on('load', function () {
  lazyLoadInstance.update(); //重新觸發圖片延遲,針對共用素材、無限輪播  
  //navlight_main(); //Phone選單套件
});

