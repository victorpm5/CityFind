$(document).ready(function() {

    firebaseDatabase.init();
    gameDatabase.updateFinishedGame('111111', true);

});

var constants = {
    gameReference : "game/",
    isPlayingReference : "/isPlaying",
    hasFinishedReference : "/hasFinished",
    value : "value"
}

var firebaseDatabase = {

    init: function() {
        var config = {
            apiKey: "AIzaSyAhoYEMnBrO-nNB_50LimITrkWHvwAcipM",
            authDomain: "copenhacks2017.firebaseapp.com",
            databaseURL: "https://copenhacks2017.firebaseio.com",
            projectId: "copenhacks2017",
            storageBucket: "copenhacks2017.appspot.com",
            messagingSenderId: "1097292714945"
        };
        firebase.initializeApp(config);
    }

}

var gameDatabase = {

    writeGame : function(gameId, city, userAdminId) {
        firebase.database().ref(constants.gameReference + gameId).set({
            city: city,
            isPlaying: false,
            hasFinished: false,
            admin: userAdminId
        });
    },


    updatePlayingGame : function(gameId, isPlaying) {
        var updates = {};
        updates['/' + constants.gameReference +
                gameId +
                constants.isPlayingReference] = isPlaying;

        return firebase.database().ref().update(updates);
    },

    updateFinishedGame : function(gameId, hasFinished) {
        var updates = {};
        updates['/' + constants.gameReference +
                gameId +
                constants.hasFinishedReference] = hasFinished;

        return firebase.database().ref().update(updates);
    },

    notifyWhenPlayingChanges : function(gameId) {
        var gamePlayingRef = firebase.
                database().ref( constants.gameReference +
                                gameId +
                                constants.gamePlayingRef);
        gamePlayingRef.on(constants.value, function(snapshot) {
            // TODO notify users
        });
    },

    getCityGame : function(gameId) {
        return firebase.database().ref(constants.gameReference + gameId).once(constants.value)
                .then(function(snapshot) {
                  return snapshot.val().city;
                });
    }

}