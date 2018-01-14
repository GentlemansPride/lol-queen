function keyEventListener() {
    $("#summonerSearchInput").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#searchSummoner").click();
        }
    });
}