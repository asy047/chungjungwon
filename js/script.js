$(function() {
	$('.gnb').each(function() {
		var $depth1 = $('.depth1'),
				$sub_outer = $('.sub_outer'),
				$sub_bg = $('.sub_bg')
		$depth1.mouseenter(function() {
			$(this).children().next().stop().slideDown();
			$sub_bg.css('display','block');
		});
		$('.sub').mouseleave(function() {
			$sub_outer.css('display','none');
				$sub_bg.css('display','none');
		})
		$depth1.mouseenter(function(){
			$(this).siblings().children().next().stop().slideUp();
		})
	})
	var swiper = new Swiper('.mv', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
		autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	var swiper = new Swiper('.swiper01', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
		autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	$('#tab_menu').each(function(){
		var tab_menu = $(this),
				tab_gnb = $(this).find('.tab_gnb') ,
				a = tab_gnb.find('a'),
				boxes = $('#tab_menu > div');
		
		tab_gnb.on('click', 'a', function(e){
			e.preventDefault();
			var $this = $(this);
			
			if ($this.hasClass('on')) {
				return;
			}
			a.removeClass('on');
			$this.addClass('on');
			
			boxes.hide();
			$($this.attr('href')).show();
		});
		
		a.eq(0).trigger('click');
		
	});
		$('.search_text').on('click', 'a', function(){
			var txt = $(this).text();
//			alert(txt);
			$('.search_bar > input[name=search]').val(txt);
		});
	
	
	$('.autoplay').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
	
	$('.footer_top_left_list').on('click', function(){
		$('.footer_top_left_list ul').stop().slideToggle();
	})
	
	$(window).scroll(function(){
		if ($(window).scrollTop() > 300) {
			$('.btn_top_area').addClass('on');
		}else {
			$('.btn_top_area').removeClass('on');
		}
	});
	
});