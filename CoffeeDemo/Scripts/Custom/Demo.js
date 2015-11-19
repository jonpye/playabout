$(document).ready(function () {

    // background for home
    if ($("#main-home").data("homepage") !== undefined) {
        $("body").addClass("background-img");
    }

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

});

//Signal R
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



