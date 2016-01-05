$(function () {
    // Get pathname of url
    var url = window.location.pathname;
    // Determine our pill secondary navigation selection
    $(".nav-pills > li").removeClass("active");
    $(".nav-pills > li").find("a[href='" + url + "']").parent().addClass("active");

    // background for home
    //if ($("#bg").data("homepage") !== undefined) {
        $("body").addClass("background-img");
    //}

    // Illustrate popover
    $('#popover').popover({
        html: true,
        content: function () {
            return $('#popover_content_wrapper').html();
        }
    });

    $('body').on('click', function (e) {
        $('#popover').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });


    // Calendar page
    $('#calendar').fullCalendar({

        googleCalendarApiKey: 'AIzaSyAtd_PjDFPVVZ7xVlXBG_o0wCjS5M5NPOY',
        events: 'n1ljmulrh99gvq2q8j70euqi7k@group.calendar.google.com',

        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },

        eventClick: function (event) {
            //if (event.url) {
            //return false;
            //}
            return false;
        },

        loading: function (bool) {
            if (bool)
                $('#loading').show();
            else
                $('#loading').hide();
        }
    });

    // Animate scroll to top of page
    $('.top-of-page').each(function () {
        $(this).click(function () {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });
    });

    // Allow any link to scroll to any element if fromClick and toElement supplied
    function scrollToElement(fromClick, toElement) {
        $("#" + fromClick).click(function () {
            var isIntExp8 = isIE(8);

            // If we are using IE8, scroll element contained within html coz IE has to be different with everything!!!
            $(isIntExp8 ? 'html' : 'body').animate({
                scrollTop: $("#" + toElement).offset().top
            }, 1000);
        });
    }

    $('[data-toggle="tooltip"]').tooltip();


    // top of page link to fade in when page scrolls to x px!
    $(window).scroll(function () {
        $(this).scrollTop() > 200 ? $('#toTop').slideDown() : $('#toTop').slideUp();
        $('.alert').slideUp();

        // Show or hide the angular nav bar
        angularBar(true);
    });

    // If not on angular page (contacts controller) slide the nav bar up and deselect the link in menu
    var angularBar = function (isScroll) {
        isScroll = isScroll || false;
        if (url.indexOf('/Contacts') < 0) {
            isScroll ? $('.angular-menu').slideUp() : $('.angular-menu').hide();
            $('.angular-link').parent().removeClass('selected-link-green');
        }
        else {
            $('.angular-menu').show().slideDown();
            $('.angular-link').parent().addClass('selected-link-green');
        }
    }
   
    // Check for each page
    angularBar();

    $('#toTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // To allow bs modals (if exists on page) to open and the page not shift when scroll bar hides
    var fixedCls = '.navbar-fixed-top,.navbar-fixed-bottom';
    var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
    $.fn.modal.Constructor.prototype.setScrollbar = function () {
        oldSSB.apply(this);
        if (this.bodyIsOverflowing && this.scrollbarWidth)
            $(fixedCls).css('padding-right', this.scrollbarWidth);
    }

    var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
    $.fn.modal.Constructor.prototype.resetScrollbar = function () {
        oldRSB.apply(this);
        $(fixedCls).css('padding-right', '');
    }
    if (this.bodyIsOverflowing && this.scrollbarWidth) $('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);

    // If we have a modal, remove the css for html that uses overflow-y: scroll (set to auto) 
    if ($('.modal-dialog').length > 0) $('html').css("overflow-y", "auto");
    

    // Click event of angular menu item
    $('.angular-link').click(function () {
        $('.angular-menu').slideToggle();
        $(this).parent().toggleClass('selected-link-green');
    });

});  // End document load


// Determine if users browser is IE, pass in a version to return true or false
function isIE(version, comparison) {
    var $div = $('<div style="display:none;"/>').appendTo($('body'));
    $div.html('<!--[if ' + (comparison || '') + ' IE ' + (version || '') + ']><a>&nbsp;</a><![endif]-->');
    var ieTest = $div.find('a').length;
    $div.remove();
    return ieTest;
}

//Signal R hub conn
$(function () {
    var con = $.hubConnection();
    var hub = con.createHubProxy('HospitalDataHub');
    hub.on('onHitRecorded', function (i) {
        $('#hitCount').text(i);
    });
    con.start(function () {
        hub.invoke('RecordHit');
    });
});

// For any drop down lists that have an empty value (i.e. "Select X...") remove that entry on change
$('select').change(function () {
    $("select option[value='']").remove();
});



