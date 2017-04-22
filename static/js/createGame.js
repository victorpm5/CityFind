$(document).ready(function() {

    $(constants.buttonId).on('click', function() {
        var city = $(constants.cityId).val();
        var phone = $(constants.phoneId).val();
        var name = $(constants.nameId).val();
        var random = Math.floor((Math.random() * 100000) + 1);
        userDatabase.writeUser(phone, name);
        gameDatabase.writeGame(random, city, nameId);
    });

});

var constants = {
    cityId : "#city-text",
    phoneId : "#phone-text"
    nameId : "#name-text",
    buttonId : "#form-button",
}