$(document).ready(function() {

    firebaseDatabase.init();

});

var constants = {
    gameReference : "game/",
    userReference : "user/",
    isPlayingReference : "/isPlaying",
    hasFinishedReference : "/hasFinished",
    usersReference : "/users",
    value : "value",

    cityId : "#city-text",
    phoneId : "#phone-text",
    nameId : "#name-text",
    codeId : "#code-text",
    buttonId : "#form-button"
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
        console.log('New Game at: ' + constants.gameReference + gameId);
        firebase.database().ref(constants.gameReference + gameId).set({
            city: city,
            isPlaying: false,
            hasFinished: false,
            admin: userAdminId
        });
        firebase.database().ref(constants.gameReference + gameId + constants.usersReference + '/' + userAdminId).set(0);
        return true;
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

var userDatabase = {

    writeUser : function(userId, name) {
        console.log('New User at: ' + constants.userReference + userId);
        firebase.database().ref(constants.userReference + userId).set({
            name: name
        });
        return true;
    },

    joinUser : function(userId, gameId) {
        console.log('Join User at: ' + constants.gameReference + gameId + constants.usersReference + '/' + userId);
        firebase.database().ref(constants.gameReference + gameId + constants.usersReference + '/' + userId).set(0);
    },

    getUserName : function(userId) {
        return firebase.database().ref(constants.userReference + userId).once(constants.value)
                .then(function(snapshot) {
                  return snapshot.val().name;
                });
    }

}

var utils = {

    makeId : function() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

}