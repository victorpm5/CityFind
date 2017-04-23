$(document).ready(function() {

    var gameId = $(constants.gameIdInput).val();
    console.log('GameID: ' + gameId);

    gameDatabase.setCityGame(gameId);

});