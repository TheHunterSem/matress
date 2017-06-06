/* Header */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("header-ch");
        $('.head-list').addClass("color");
        $('.header-logo').addClass("new-logo");
        $('.search-img').addClass("new-search");
        $('.phone-img').addClass("new-phone");
        $('.buy-img').addClass("new-buy");
    }
    else{
        $('header').removeClass("header-ch");
        $('.head-list').removeClass("color");
        $('.header-logo').removeClass("new-logo");
        $('.search-img').removeClass("new-search");
        $('.phone-img').removeClass("new-phone");
        $('.buy-img').removeClass("new-buy");
    }
});

/* Script for button "Learn more" */
$(document).ready(function () {
    $("#look").mouseover(function () {
        $(".no-hover").css("display", "none");
        $(".hover").css("display", "inline");
    });
        $("#look").mouseout(function () {
        $(".no-hover").css("display", "inline");
        $(".hover").css("display", "none");
    });
	
	
	$('.first-locator > div').click(function(e){
		e.preventDefault();
		$('.first-locator > div').removeClass('actives');
		$('.map-locator').hide();
		$(this).addClass('actives');
		$('.map-locator.locator-' + $(this).data('locator')).show();
	});
});

/* Script for button "Learn more" */
$(document).ready(function () {
    $("#look5").mouseover(function () {
        $(".no-hover5").css("display", "none");
        $(".hover5").css("display", "inline");
    });
        $("#look5").mouseout(function () {
        $(".no-hover5").css("display", "inline");
        $(".hover5").css("display", "none");
    });    
});

 /* Drop Mobile Menu */
 $(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }   
    var accordion = new Accordion($('#accordion'), false);
});   
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link1');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu1').not($next).slideUp().parent().removeClass('open');
        };
    }   
    var accordion = new Accordion($('#accordion'), false);
});
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link2');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
        };
    }   
    var accordion = new Accordion($('#accordion'), false);
});
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link3');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu3').not($next).slideUp().parent().removeClass('open');
        };
    }   
    var accordion = new Accordion($('#accordion'), false);
});
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link4');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu4').not($next).slideUp().parent().removeClass('open');
        };
    }   
    var accordion = new Accordion($('#accordion'), false);
});


$(document).ready(function () {
    $(".style-active1").mouseover(function () {
        $(".hov-link1").css("color", "#203bf2");
    });
        $(".style-active1").mouseout(function () {
        $(".hov-link1").css("color", "#000000");
    });
    $(".style-active2").mouseover(function () {
        $(".hov-link2").css("color", "#203bf2");
    });
        $(".style-active2").mouseout(function () {
        $(".hov-link2").css("color", "#000000");
    }); 
    $(".style-active3").mouseover(function () {
        $(".hov-link3").css("color", "#203bf2");
    });
        $(".style-active3").mouseout(function () {
        $(".hov-link3").css("color", "#000000");
    }); 
    $(".style-active4").mouseover(function () {
        $(".hov-link4").css("color", "#203bf2");
    });
        $(".style-active4").mouseout(function () {
        $(".hov-link4").css("color", "#000000");
    });
    $(".style-active5").mouseover(function () {
        $(".hov-link5").css("color", "#203bf2");
    });
        $(".style-active5").mouseout(function () {
        $(".hov-link5").css("color", "#000000");
    });
    $(".style-active6").mouseover(function () {
        $(".hov-link6").css("color", "#203bf2");
    });
        $(".style-active6").mouseout(function () {
        $(".hov-link6").css("color", "#000000");
    });
    $(".style-active7").mouseover(function () {
        $(".hov-link7").css("color", "#203bf2");
    });
        $(".style-active7").mouseout(function () {
        $(".hov-link7").css("color", "#000000");
    });
    $(".style-active8").mouseover(function () {
        $(".hov-link8").css("color", "#203bf2");
    });
        $(".style-active8").mouseout(function () {
        $(".hov-link8").css("color", "#000000");
    });
    $(".style-active9").mouseover(function () {
        $(".hov-link9").css("color", "#203bf2");
    });
        $(".style-active9").mouseout(function () {
        $(".hov-link9").css("color", "#000000");
    });
    $(".style-active10").mouseover(function () {
        $(".hov-link10").css("color", "#203bf2");
    });
        $(".style-active10").mouseout(function () {
        $(".hov-link10").css("color", "#000000");
    });
    $(".style-active11").mouseover(function () {
        $(".hov-link11").css("color", "#203bf2");
    });
        $(".style-active11").mouseout(function () {
        $(".hov-link11").css("color", "#000000");
    });
    $(".style-active12").mouseover(function () {
        $(".hov-link12").css("color", "#203bf2");
    });
        $(".style-active12").mouseout(function () {
        $(".hov-link12").css("color", "#000000");
    });
    $(".style-active13").mouseover(function () {
        $(".hov-link13").css("color", "#203bf2");
    });
        $(".style-active13").mouseout(function () {
        $(".hov-link13").css("color", "#000000");
    }); 
    $(".style-active14").mouseover(function () {
        $(".hov-link14").css("color", "#203bf2");
    });
        $(".style-active14").mouseout(function () {
        $(".hov-link14").css("color", "#000000");
    });
    $(".style-active15").mouseover(function () {
        $(".hov-link15").css("color", "#203bf2");
    });
        $(".style-active15").mouseout(function () {
        $(".hov-link15").css("color", "#000000");
    }); 
    $(".style-active16").mouseover(function () {
        $(".hov-link16").css("color", "#203bf2");
    });
        $(".style-active16").mouseout(function () {
        $(".hov-link16").css("color", "#000000");
    }); 
    $(".style-active17").mouseover(function () {
        $(".hov-link17").css("color", "#203bf2");
    });
        $(".style-active17").mouseout(function () {
        $(".hov-link17").css("color", "#000000");
    });
    $(".style-active18").mouseover(function () {
        $(".hov-link18").css("color", "#203bf2");
    });
        $(".style-active18").mouseout(function () {
        $(".hov-link18").css("color", "#000000");
    }); 
    $(".style-active19").mouseover(function () {
        $(".hov-link19").css("color", "#203bf2");
    });
        $(".style-active19").mouseout(function () {
        $(".hov-link19").css("color", "#000000");
    });
    $(".style-active20").mouseover(function () {
        $(".hov-link20").css("color", "#203bf2");
    });
        $(".style-active20").mouseout(function () {
        $(".hov-link20").css("color", "#000000");
    }); 
    $(".style-active21").mouseover(function () {
        $(".hov-link21").css("color", "#203bf2");
    });
        $(".style-active21").mouseout(function () {
        $(".hov-link21").css("color", "#000000");
    });
    $(".style-active22").mouseover(function () {
        $(".hov-link22").css("color", "#203bf2");
    });
        $(".style-active22").mouseout(function () {
        $(".hov-link22").css("color", "#000000");
    });
    $(".style-active23").mouseover(function () {
        $(".hov-link23").css("color", "#203bf2");
    });
        $(".style-active23").mouseout(function () {
        $(".hov-link23").css("color", "#000000");
    });  
    $(".style-active24").mouseover(function () {
        $(".hov-link24").css("color", "#203bf2");
    });
        $(".style-active24").mouseout(function () {
        $(".hov-link24").css("color", "#000000");
    });  
    $(".style-active25").mouseover(function () {
        $(".hov-link25").css("color", "#203bf2");
    });
        $(".style-active25").mouseout(function () {
        $(".hov-link25").css("color", "#000000");
    });                                         
});

/* Script for change the size of the goods */
$(document).ready(function () {

  $('.catalog-quantity-items-btn.small-items').click(function () {
      $('.catalog-quantity-items-btn.big-items').removeClass('active');
      $('.catalog-quantity-items-btn.small-items').addClass('active');
  });

    $('.catalog-quantity-items-btn.big-items').click(function () {
        $('.catalog-quantity-items-btn.small-items').removeClass('active');
        $('.catalog-quantity-items-btn.big-items').addClass('active');
    });

});