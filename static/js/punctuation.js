$(document).ready(function() {

    var gameId = $('#punctuation_game').val();
    var userId = $('#punctuation_user').val();
    var found = $('#punctuation_found').val();

    if (found == 'True') {
        gameDatabase.increaseScore(gameId, userId);
    } else {
        window.location = '/' + gameId + '/' + userId;
    }

});