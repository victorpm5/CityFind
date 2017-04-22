$(document).ready(function() {

    firebaseDatabase.init();

});

var constants = {
    gameReference : "game/",
    isPlayingReference : "/starCount",
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

    writeGame : function(gameId, city) {
        firebase.database().ref(constants.gameReference + gameId).set({
            city: city,
            isPlaying: false
        });
    },


    updatePlayingGame : function(gameId, isPlaying) {
        // TODO
    },

    notifyWhenPlayingChanges : function() {
        var gamePlayingRef = firebase.
                database().ref( constants.gameReference +
                                postId +
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