const API_KEY = "RGAPI-67532232-2166-4447-852c-330327f03937";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let summonerData;
let recentMatches;

async function requestSummonerData(summonerName) {
    $.getJSON(CORS_PROXY + "https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "?api_key=" + API_KEY,
        function (data) {
        console.log(data);
            return data;
        }
    );
}

async function getRecentMatches(summonerID) {
    $.getJSON(CORS_PROXY + "https://euw1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + summonerID + "/recent?api_key=RGAPI-06207fa7-aa25-4623-bf84-23ec9dde9aee",
        function (data) {
        console.log(data);
            return data;
        }
    );
}

async function searchSummoner() {
    let summonerName = $("#summonerSearchInput").val();
    summonerData = await requestSummonerData(summonerName);
    $("#main").load("./pages/recentmatches.html", function () {
        $(document).attr("title", "LoLQueen - Recent Matches");
        recentMatches = getRecentMatches(summonerData.accountId);
    });
}