$(document).ready(function() {

    var gameId = $(constants.gameIdInput).val();
    var userId = $(constants.userIdInput).val();
    console.log('GameID: ' + gameId);
    gameDatabase.setWord(gameId);
    gameDatabase.setCityGame(gameId);
    gameDatabase.setUserScore(gameId, userId);
    gameDatabase.setAdminUser(gameId, userId);
    gameDatabase.setIsPlaying(gameId, userId);

    $('#camera-button').on('click', function() {
        window.location = '/get_pic/' + gameId + '/' + userId + '/' + $('#word_input').val();
    });

    $('#button-start').on('click', function() {

        var valor = $('#button-start').text();

        if(valor == 'START') {

            $('#button-start').text('STOP');
            $('#button-start').css('background-color', 'red');

            gameDatabase.start(gameId);

        }else{
            console.log('Acabar joc');
            $('#button-start').text('START');
            $('#button-start').css('background-color', 'green');
            gameDatabase.updatePlayingGame(gameId, false);
        }
    });

    gameDatabase.notifyWhenPlayingChanges(gameId, userId);

});