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