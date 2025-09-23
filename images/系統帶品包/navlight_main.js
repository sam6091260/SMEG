$(window).on('load', function () {
  //定義區塊Class
  var $WRAPPER = $('.WRAPPER'); //最大包

 /* 
   * -------------------------------------------
   *PC黏人精-區塊錨點
   * -------------------------------------------
   */
  //高亮
  $WRAPPER.navLight({
    navarea: '.fixarea_tabbar',        //最大包Class。預設.NavArea
    navs: '.fix_box',                     //區塊Class。預設.Nav
    lightCls: 'cate-hover',           //高亮Class。預設cate-hover
    content: '.js-PC',        //選單對應內容區塊Class。預設.js-navlight_content
    diffTop: 100,                     //距離頂部的誤差值。預設100
    //開關
    open_light: true,                 //啟動--高亮對應區塊。
    open_getname: true,               //啟動--自動擷取選單資料
  });
  //滑鼠移置特定高度時，黏人精顯現
  $(window).scroll(function() {
    if ( $(this).scrollTop() > $('.js-navlight_content').eq(0).offset().top - 400 ){ //設定大於300px才顯示浮層
      $(".fixarea_tabbar").addClass('fixarea_off');
    } else {
      $(".fixarea_tabbar").removeClass('fixarea_off');
    }
  });  

    
    
  /* 
   * -------------------------------------------
   * Phone選單套件【NavArea_tabbar公版錨點頁籤】
   * -------------------------------------------
   */
  //置頂
  $WRAPPER.find('.NavArea_tabbar').topSuction({});
  //展開
  $WRAPPER.find('.NavArea_tabbar').navbtn({});
  //高亮
  $WRAPPER.navLight({
    navarea: '.NavArea_tabbar', //最大包Class。預設.NavArea
    lightCls: 'cate-hover',           //高亮Class。預設cate-hover
    content: '.js-navlight_content',		//選單對應內容區塊Class。預設.js-navlight_content
    top_i: 15, //錨點偏移
    //開關
    open_light: true, //啟動--高亮對應區塊。
    open_getname: true, //啟動--自動擷取選單資料
  });

  /* 
   * -------------------------------------------
   * 錨點1
   * -------------------------------------------
   */
  //置頂
  $WRAPPER.find('.Area_floorPD_NavArea_tabbar1').topSuction({});
  //展開
  $WRAPPER.find('.Area_floorPD_NavArea_tabbar1').navbtn({});
  //高亮
  $WRAPPER.navLight({
    navarea: '.Area_floorPD_NavArea_tabbar1', //最大包Class。預設.NavArea
    lightCls: 'cate-hover', //高亮Class。預設cate-hover
    content: '.js-navlight_Area_floorPD1', //選單對應內容區塊Class。預設.js-navlight_content
    top_i: 15, //錨點偏移
    //開關
    open_light: true, //啟動--高亮對應區塊。
    open_getname: true, //啟動--自動擷取選單資料
  });
    
  /* 
   * -------------------------------------------
   * 錨點2
   * -------------------------------------------
   */
  //置頂
  $WRAPPER.find('.Area_floorPD_NavArea_tabbar2').topSuction({});
  //展開
  $WRAPPER.find('.Area_floorPD_NavArea_tabbar2').navbtn({});
  //高亮
  $WRAPPER.navLight({
    navarea: '.Area_floorPD_NavArea_tabbar2', //最大包Class。預設.NavArea
    lightCls: 'cate-hover', //高亮Class。預設cate-hover
    content: '.js-navlight_Area_floorPD2', //選單對應內容區塊Class。預設.js-navlight_content
    top_i: 15, //錨點偏移
    //開關
    open_light: true, //啟動--高亮對應區塊。
    open_getname: true, //啟動--自動擷取選單資料
  });


  /*多選單互動啟動(勿動)*/
  fNavChange()

});
