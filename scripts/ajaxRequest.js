const API_KEY = "RGAPI-67532232-2166-4447-852c-330327f03937";
let summonerData;
let recentMatches;

function requestSummonerData(summonerName) {
    $.getJSON("https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "?api_key=" + API_KEY,
        function (data) {
            return JSON.parse(data);
        }
    );
}

function getRecentMatches(summonerID) {
    $.getJSON("https://euw1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + summonerID + "/recent?api_key=RGAPI-06207fa7-aa25-4623-bf84-23ec9dde9aee",
        function (data) {
            return JSON.parse(data);
        }
    );
}

$("#searchSummoner").click(function () {
    let summonerName = $("#summonerSearchInput").val();
    summonerData = requestSummonerData(summonerName);
    $("#main").load("./pages/recentmatches.html", function () {
        $(document).attr("title", "LoLQueen - Recent Matches");
        recentMatches = getRecentMatches(summonerData.accountId);
    });
});

