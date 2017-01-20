/**
 * Created by Cam on 1/17/2017.
 */
$(document).ready(function () {
        for(var i=1;i<=31;i++) {

            $('#date').append('<option value="'+ i +'">'+ i+' </option>');
        }
        for(var i=1;i<=12;i++) {

            $('#month').append('<option value="'+ i +'">'+ i+' </option>');
        }
        for(var i=1992;i<=2017;i++) {

            $('#year').append('<option value="'+ i +'">'+ i+' </option>');
        }
//
    $('#info').on('submit',function () {

        var isValid = true;
        if($('#name').val().trim() == ''){

            $('#name').next('span').text('Name is empty ! ');
            isValid = false;
        }
        else {
            $('#name').next('span').text('');
        }
        if($('#account').val().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,16})$/) == null)
        {
            $('#account').next('span').text('Tên đăng nhập từ 6-16 kí tự bao gồm chữ và số !');
            isValid = false;
        }else {
            $('#account').next('span').text('');
        }
       if($('#password').val().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,16})$/) == null){

            $('#password').next('span').text('Mật khẩu từ 6-16 kí tự bao gồm chữ và số !');
            isValid = false;
        }else {
           $('#password').next('span').text('');
       }
        if($('#password').val().trim() == ''){
            $('#re_password').next('span').text('Đã bảo là ko dc để trống mà !');
            isValid = false;

        }else {
            if($('#password').val()!= $('#re_password').val()){
                $('#re_password').next('span').text('Mật khẩu không trùng nhau !');
                isValid = false;
            } else{
                $('#re_password').next('span').text('');
            }
        }

        return isValid;
    });
});




