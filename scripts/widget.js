$(document).ready(function () {
    $("#summonerSearchInput").keyup(function (event) {
        console.log("called");
        if (event.keyCode === 13) {
            $("#searchSummoner").click();
        }
    });
});

function loadMain() {
    $('#main').empty();
    $('#main').load('./pages/home.html');
}