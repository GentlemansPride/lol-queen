$(function () {
    $("#summonerSearchInput").keydown(function (event) {
        if (event.key === "Enter") {
            searchSummoner();
        }
    });
});

function loadMain() {
    $('#main')
        .empty()
        .load('./pages/home.html')
        .hide()
        .fadeIn("slow");
}