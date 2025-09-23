//延遲載圖
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".articleList .lazy", //物件
    //threshold: 300, //預載量 預設300
});


//基本設定
var is_forPC = document.body.clientWidth > 767; //forPC
var is_trigger = false; //重覆觸發

$(function(){
  var $gotop = $('#gotop');
  $gotop.click(function(){
    $("html,body").stop(true,false).animate({scrollTop:0}); //設定回頁面頂端
    return false;
  });
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300){ //設定大於300px才顯示浮層
      $gotop.addClass('cate-open');
    } else {
      $gotop.removeClass('cate-open');
    }
  });
}); 

/* 滑動的GOTO */
function goTop(val) {
	if($(window).width() > 767 ){
		var gotop_i = 30;
	} else {
		var gotop_i = 50;
	}
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}

//20200114-滑動到指定位置 javascript:goto('物件','速度','偏移')
function goto(val,tSpeed,fixstart) {
  if(!fixstart){ fixstart = 0 }; //無偏移時
  if(!tSpeed){ tSpeed = 0 }; //無速度時
  $('html,body').animate({scrollTop:$(val).offset().top - fixstart },tSpeed);
};


/* 浮層區*/
function agree(val) {
	var blackBox = $(".blackBox");
	$(blackBox).fadeOut();
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 60 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	// $('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
	// removeEditBtn()

}
$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});
 
 
 
/* 浮層區2(浮層不限高度，內容全部顯示)*/
function agree2(val) {
	$(val).css('opacity','1');
	$(val).css('pointer-events','auto');
	imglazyload();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	var this_agreeH = $(val).find('.agreeArea2').height();
	$(val).height( $('body').height() );
	
	//浮層top定位
	if( this_agreeH < winH ){
		//內容小於裝置高度，居中
		$('.agreeArea2').css('top', winST + winH/2 - this_agreeH/2 );
	} else {
		//內容大於裝置高度，置上
		$('.agreeArea2').css('top', winST + winH/100*2 );
	}

}
$(function(){
	var blackBox2 = $(".blackBox2");
	var blackBox2_close = $(".close2 , .but-close2");
	var blackBox2_BOXclose = ".Boxclose2 ";
	//點按鈕關閉
	blackBox2_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox2).attr('style','');
		$(blackBox2).find('.agreeArea2').attr('style','');
		e.preventDefault();
	});
	//點黑區關閉
	blackBox2.delegate( blackBox2_BOXclose ,"touchstart click",function(e){
		$(blackBox2).attr('style','');
		$(blackBox2).find('.agreeArea2').attr('style','');
		e.preventDefault();
	});
}); 
 


	//不入稿不顯示

    /* --------------------------------------
     * ECM入稿機制--進階功能-v20210315
     * --------------------------------------
     * ecmWriter_removeArea('.fixarea'); //針對ECM入稿區 (0)編輯模式時刪除
     * ecmWriter_showArea(''); //針對ECM入稿區 (0)編輯模式時顯示(純手機版位)
     * PdLayout_removeLi('.Area_AD,.Area_hoteven1,.Area_hoteven2'); //針對ECM入稿區 (1)沒入品隱藏
     * PdLayout_removeArea('.Area_AD'); //針對ECM入稿區 (2)全部品都沒有時整區隱藏
     * -------------------------------------- */
    //基本設定
    var is_trigger = false; //重覆觸發
    var is_forPC = document.body.clientWidth > 767; //forPC
    var is_Online = (location.protocol).indexOf('http') === 0; //線上
    var is_EcmWriter = document.querySelectorAll('input[id^="eWriterBtn"]').length > 0; //ECM編輯模式


    //針對ECM入稿區進階功能
    function ecmWriter_removeArea(val){  //(0)編輯模式時刪除物件
     if(is_EcmWriter){ //執行時機
       let _self = $(val);
       //console.log(_self)
       if(_self.length>0){
         _self.remove();
         console.log(val,'在ECM編輯模式下暫持刪除');
       }
     }
    };
    function ecmWriter_showArea(val){  //(0)編輯模式時顯示(純手機版位)
     if(is_EcmWriter){ //執行時機
       let _self = $(val);
       //console.log(_self)
       if(_self.length>0){
         _self.attr('style','display:block !important');
         console.log(val,'在ECM編輯模式下暫持顯示(純手機版位)');
       }
     }
    };
    function PdLayout_removeLi(val){  //(1)沒入品刪除
      if(!is_EcmWriter && is_Online){ //執行時機
        $(val).find('.PD_slide').each(function(){
          var _this = $(this);
          (_this.attr('data-id') === '')? _this.remove():''
        });
      }
    };
    function PdLayout_removeArea(val){ //(2)全部品都沒有時整區刪除
      if(!is_EcmWriter && is_Online){ //執行時機
        $(val).each(function(){ 
          var _this = $(this);
          (_this.find('li').length === 0)? _this.remove():''
        })
      }
    };
        
/* --------------------------------------
* 進頁面馬上執行
* -------------------------------------- */
$(function(){
  //lazyLoadInstance.loadAll(); //圖片延遲全部加載(檢查用)
  //針對ECM入稿區(輪播開始前先處理)

//  PdLayout_removeLi('.Area_banner'); //針對ECM入稿區 (1)沒入品隱藏
//  ecmWriter_removeArea('.fixarea'); //針對ECM入稿區 (0)編輯模式時刪除
//  ecmWriter_showArea('.top_pd00'); //針對ECM入稿區 (0)編輯模式時顯示(純手機版位)
  PdLayout_removeLi('.Area01, .Area_danji, .Area02, .Area04'); //針對ECM入稿區 (1)沒入品隱藏
  PdLayout_removeArea('.Area01, .Area_danji, .Area02, .Area04'); //針對ECM入稿區 (2)全部品都沒有時整區隱藏


});

/*背景互動--PC背景-背景00捲動物件*/
$.debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
	  var context = this, args = arguments;
	  later = function() {
		timeout = null;
		if (!immediate) func.apply(context, args);
	  };
	  var callNow = immediate && !timeout;
	  clearTimeout(timeout);
	  timeout = setTimeout(later, wait);
	  if (callNow) func.apply(context, args);
	};
  };
  $.throttle = function(func, wait) {
	var context, args, timeout, throttling, more, result;
	var whenDone = $.debounce(function() {
	  more = throttling = false;
	}, wait);
	return function() {
	  context = this, args = arguments;
	  var later = function() {
		timeout = null;
		if (more) func.apply(context, args);
		whenDone();
	  };
	  if (!timeout) timeout = setTimeout(later, wait);
  
	  if (throttling) {
		more = true;
	  } else {
		result = func.apply(context, args);
	  };
	  whenDone();
	  throttling = true;
	  return result;
	};
  };
  function bgscroll(val,top,num) { //背景互動(物件,起始top位置,速度)
	var $win = $(window);
	var $doc = $(document);
	var $bg  = $(val);
	var handler = $.throttle(function(e) {
	  var dTop = $doc.scrollTop()
	  highLight(dTop);
	}, 100);
	function highLight(docTop) {
	  $bg.css('background-position', 'center '+  -1*( top + docTop * num) +'px' );
	};
	$win.scroll(handler)
  };
  $(function(){ 
	bgscroll('.js-Area_bgtop_00',0,0.25);
	//bgscroll('.js-Area_bgtop_01',-500,0.25);
  });

/* --------------------------------------
 * 頁面讀取完畢後執行
 * -------------------------------------- */
$(window).on('load',function(){
  lazyLoadInstance.update(); //重新觸發圖片延遲,針對共用素材、無限輪播
});

