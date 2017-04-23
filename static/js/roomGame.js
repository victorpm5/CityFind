$(document).ready(function() {

    var gameId = $(constants.gameIdInput).val();
    var userId = $(constants.userIdInput).val();
    console.log('GameID: ' + gameId);
    gameDatabase.setWord(gameId);
    gameDatabase.setCityGame(gameId);
    gameDatabase.setUserScore(gameId, userId)

    $('#camera-button').on('click', function() {
        window.location = '/get_pic/' + gameId + '/' + userId + '/' + $('#word_input').val();
    });

});