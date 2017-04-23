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

    $('#button-start').on('click', function() {

        var valor = $('#button-start').text();

        if(valor == 'START') {

            $('#button-start').text('STOP');
            $('#button-start').css('background-color', 'red');

            //    countdown!
        }else{
            console.log('Acabar joc');
            //acabar joc
        }
    });

});