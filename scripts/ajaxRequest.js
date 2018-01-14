const API_KEY = "RGAPI-67532232-2166-4447-852c-330327f03937";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

function requestSummonerData(summonerName, callback) {
    $.getJSON(CORS_PROXY + "https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "?api_key=" + API_KEY,
        function (data) {
            callback(data);
        }
    );
}

function requestRecentMatches(accountId, callback) {
    $.getJSON(CORS_PROXY + "https://euw1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + accountId + "/recent?api_key=" + API_KEY,
        function (data) {
            console.log(data);
            callback(data)
        }
    );
}

function searchSummoner() {
    let summonerName = $("#summonerSearchInput").val();
    requestSummonerData(summonerName, function (summonerData) {
        requestRecentMatches(summonerData.accountId, function (recentMatches) {
            $("#main").empty();
            $("#main").load("./pages/recentmatches.html", function () {
                $(document).attr("title", "LoLQueen - Recent Matches");
                let templateScript = $("#recent-matches").html();
                let template = Handlebars.compile(templateScript);
                $("#main").append(template(recentMatches));
            });
        })
    });
}
