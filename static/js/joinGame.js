$(document).ready(function() {

    $(constants.buttonId).on('click', function() {
        var code = $(constants.codeId).val();
        var phone = $(constants.phoneId).val();
        var name = $(constants.nameId).val();
        console.log(code + ' ' + phone + ' ' + name)
        userDatabase.writeUser(phone, name);
        userDatabase.joinUser(phone, code);
    });

});