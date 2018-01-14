const API_KEY = "RGAPI-67532232-2166-4447-852c-330327f03937";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let CHAMPS;

$(function () {
    $.getJSON("./data/champions.json", function (data) {
        CHAMPS = data;
    })
});

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
            callback(data);
        }
    );
}

function searchSummoner() {
    let summonerName = $("#summonerSearchInput").val();
    $("#main").empty().load("./pages/loading.html");
    requestSummonerData(summonerName, function (summonerData) {
        requestRecentMatches(summonerData.accountId, function (recentMatches) {
            let matches = [];
            recentMatches.forEach(match => matches.push({
                lane: match.lane,
                champion: CHAMPS[match.champion],
                season: match.season,
                role: match.role
            }));
            $("#main")
                .empty()
                .load("./pages/recentmatches.html", function () {
                    $(document).attr("title", "LoLQueen - Recent Matches");
                    let templateScript = $("#recent-matches").html();
                    let template = Handlebars.compile(templateScript);
                    $("#main").append(template(recentMatches));
                });
        })
    });
}
