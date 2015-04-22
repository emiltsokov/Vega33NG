'use strict';

VEGAWEB.service('navService', function () {
    $('body')
    .on('focus','.product-search input',function(e){
        $(this).parent().addClass('focused')
    })
    .on('blur','.product-search input',function(e){
        $(this).parent().removeClass('focused')
    })
    .on('click','.mobile-nav-toggle',function(){
      console.log('toggle');
        $(this).toggleClass('active')
        $('.nav-wrap').toggleClass('active')
    })
    .on('click','.nav li a',function(){
        $('.mobile-nav-toggle').toggleClass('active')
        $('.nav-wrap').toggleClass('active')
    });
});