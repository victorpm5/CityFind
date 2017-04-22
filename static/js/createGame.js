$(document).ready(function() {

    $(constants.buttonId).on('click', function() {
        var city = $(constants.cityId).val();
        var phone = $(constants.phoneId).val();
        var name = $(constants.nameId).val();
        var random = utils.makeId();
        userDatabase.writeUser(phone, name);
        gameDatabase.writeGame(random, city, phone);
    });

});

var utils = {

    makeId : function() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

}