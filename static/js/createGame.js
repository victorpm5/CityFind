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