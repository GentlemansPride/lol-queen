const API_KEY = "RGAPI-67532232-2166-4447-852c-330327f03937";

function requestSummonerData(requestUrl) {
    $.ajax({
        type: "GET",
        url: requestUrl,
        success: function () {

        }, error: function () {

        }
    });
}

$("#searchSummoner").on("click", function () {
    let summoner = $("#summonerSearchInput").val();
    let requestUrl = concatApiString(summoner);
    requestSummonerData(requestUrl);
});

function concatApiString(name) {
    return String.concat("https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/", name, "?api_key=", API_KEY);
}