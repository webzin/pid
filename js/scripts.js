/*var hosturl="http://198.38.88.53/pid/";*/
var hosturl="http://192.168.1.100/pid/";

/*! Extra inline scripts: atlanta-mobile.original 2016-12-29 */
    document.addEventListener("touchstart", function(){}, true);
    $(function() {
        var dataSplash = $('.page-content').attr('data-splash');
        var dataRedirect = $('.page-content').attr('data-redirect');
        if(dataSplash>0){
            $('.loading-mask').addClass('stop-loading');
            setTimeout(function(){
                goToPage(dataRedirect);
            },dataSplash);
        }
    
        if (navigator.userAgent.match(/Mobi/)) {
            $('.mobile-wrapper').width('100%');
        }
        $('#grid-1-column').click(function(){
            $('.portfolio-gallery').find('.portfolio-item')
                .removeClass('grid-1-column grid-2-columns grid-3-columns')
                .addClass('grid-1-column');
            $('.options-new .small-button').removeClass('selected');
            $(this).addClass('selected');
        });
        $('#grid-2-columns').click(function(){
            $('.portfolio-gallery').find('.portfolio-item')
                .removeClass('grid-1-column grid-2-columns grid-3-columns')
                .addClass('grid-2-columns');
            $('.options-new .small-button').removeClass('selected');
            $(this).addClass('selected');
        });
        $('#grid-3-columns').click(function(){
            $('.portfolio-gallery').find('.portfolio-item')
                .removeClass('grid-1-column grid-2-columns grid-3-columns')
                .addClass('grid-3-columns');
            $('.options-new .small-button').removeClass('selected');
            $(this).addClass('selected');
        });
        $('input:radio.radio-bullet').change( function(){
            var name = $(this).attr('name');
            $('input:radio[name="'+ name +'"]').each(function( index ) {
              $(this).prev('.radio-bullet-replacement').removeClass('checked');
            });
            if ($(this).is(':checked')) {
                $(this).prev('.radio-bullet-replacement').addClass('checked');
            }else{
                $(this).prev('.radio-bullet-replacement').removeClass('checked');
            }
        });
        $('input:checkbox.checkbox-input').change( function(){
            if ($(this).is(':checked')) {
                $(this).prev('.checkbox-handle').addClass('checked');
                $(this).next('.checkbox-label').addClass('checked');
            }else{
                $(this).prev('.checkbox-handle').removeClass('checked');
                $(this).next('.checkbox-label').removeClass('checked');
            }
        });
        // Loading Pages
        $('.loading-mask').addClass('stop-loading');
        $('[data-load="1"]').click( function(e){
        });
        $('[data-load="1"]').click( function(e){
            $('.loading-mask').removeClass('stop-loading');
          /*e.preventDefault();
            var hrefPage = $(this).attr('href');
            setTimeout(function(){
                goToPage(hrefPage);
            },10);
            return false;*/
        });
        var goToPage = function(hrefPage){
            document.location = hrefPage;
        };
        window.onpopstate = function(e){
            //if(e.state){
                //$('.loading-mask').removeClass('stop-loading');
            //}
            //alert(e);
            $('.loading-mask').addClass('stop-loading');
        };
      	$(".btn-close-button").click( function(e){
        	$('.wrapper-mask').trigger('click');
          	e.preventDefault();
        });
    });
  
/*! Extra inline scripts: atlanta-mobile.original 2016-12-29 */
    document.addEventListener("touchstart", function(){}, true);
    $(function() {
        var dataSplash = $('.page-content').attr('data-splash');
        var dataRedirect = $('.page-content').attr('data-redirect');
        if(dataSplash>0){
            $('.loading-mask').addClass('stop-loading');
            setTimeout(function(){
                goToPage(dataRedirect);
            },dataSplash);
        }
        $("#submit-form").submit(function(event) {
            var dataRedirect = $(this).attr('data-redirect');
            goToPage(dataRedirect);
            event.preventDefault();
            return false;
        });
        if (navigator.userAgent.match(/Mobi/)) {
            $('.mobile-wrapper').width('100%');
        }
        $('#grid-1-column').click(function(){
            $('.portfolio-gallery').find('.portfolio-item')
                .removeClass('grid-1-column grid-2-columns grid-3-columns')
                .addClass('grid-1-column');
            $('.options-new .small-button').removeClass('selected');
            $(this).addClass('selected');
        });
        $('#grid-2-columns').click(function(){
            $('.portfolio-gallery').find('.portfolio-item')
                .removeClass('grid-1-column grid-2-columns grid-3-columns')
                .addClass('grid-2-columns');
            $('.options-new .small-button').removeClass('selected');
            $(this).addClass('selected');
        });
        $('#grid-3-columns').click(function(){
            $('.portfolio-gallery').find('.portfolio-item')
                .removeClass('grid-1-column grid-2-columns grid-3-columns')
                .addClass('grid-3-columns');
            $('.options-new .small-button').removeClass('selected');
            $(this).addClass('selected');
        });
        $('input:radio.radio-bullet').change( function(){
            var name = $(this).attr('name');
            $('input:radio[name="'+ name +'"]').each(function( index ) {
              $(this).prev('.radio-bullet-replacement').removeClass('checked');
            });
            if ($(this).is(':checked')) {
                $(this).prev('.radio-bullet-replacement').addClass('checked');
            }else{
                $(this).prev('.radio-bullet-replacement').removeClass('checked');
            }
        });
        $('input:checkbox.checkbox-input').change( function(){
            if ($(this).is(':checked')) {
                $(this).prev('.checkbox-handle').addClass('checked');
                $(this).next('.checkbox-label').addClass('checked');
            }else{
                $(this).prev('.checkbox-handle').removeClass('checked');
                $(this).next('.checkbox-label').removeClass('checked');
            }
        });
        // Loading Pages
        $('.loading-mask').addClass('stop-loading');
        $('[data-load="1"]').click( function(e){
        });
        $('[data-load="1"]').click( function(e){
            $('.loading-mask').removeClass('stop-loading');
          /*e.preventDefault();
            var hrefPage = $(this).attr('href');
            setTimeout(function(){
                goToPage(hrefPage);
            },10);
            return false;*/
        });
        var goToPage = function(hrefPage){
            document.location = hrefPage;
        };
        window.onpopstate = function(e){
            //if(e.state){
                //$('.loading-mask').removeClass('stop-loading');
            //}
            //alert(e);
            $('.loading-mask').addClass('stop-loading');
        };
      	$(".btn-close-button").click( function(e){
        	$('.wrapper-mask').trigger('click');
          	e.preventDefault();
        });
    });
 
function openNav() {
     
	 document.getElementById("mySidenav").style.width = "100%";
	 document.getElementById("mySidenav").style.left = "0";
	 
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
	document.getElementById("mySidenav").style.left = "-25%";
 
	 
}
$(document).ready(function(){
 
		
		$('#sucessMessage').click(function() {
		$('#sucessMessage').hide();
		});
	
	$("#signout").click(function(){
	localStorage.clear();
	window.location.href = "login.html";
	});
	
	if (localStorage.ut == "U") {
		$(".admin").hide();
	} 
	  
}); 
	


 
	