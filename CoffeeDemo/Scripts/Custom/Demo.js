$(function () {
    // Get pathname of url
    var url = window.location.pathname;
    // Determine our pill secondary navigation selection
    $(".nav-pills > li").removeClass("active");
    $(".nav-pills > li").find("a[href='" + url + "']").parent().addClass("active");

    // background for home
    if ($("#main-home").data("homepage") !== undefined) {
        $("body").addClass("background-img");
    }

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

});

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



