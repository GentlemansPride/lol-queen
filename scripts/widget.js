$(function () {
    $("#summonerSearchInput").keydown(function (event) {
        if (event.key === "Enter") {
            $("#searchSummoner").click();
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