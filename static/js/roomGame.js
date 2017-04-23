$(document).ready(function() {

    var gameId = $(constants.gameIdInput).val();
    var userId = $(constants.userIdInput).val();
    console.log('GameID: ' + gameId);
    gameDatabase.setCityGame(gameId);

    gameDatabase.setUserScore(gameId, userId)

});