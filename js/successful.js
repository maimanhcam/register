/**
 * Created by Cam on 1/20/2017.
 */
$(document).ready(function () {
    var arr2=[];
    var arr3=[];
    var str='';
    var url = decodeURIComponent($(location).attr('href'));
    var name=url.slice(url.indexOf("?")+1, url.length);
    var arr = name.split('&');
    for(var i=0;i<arr.length;i++) {

        arr2.push(arr[i].split('='));
    }




    arr3=arr2[0][1].split('+');
    for (var i=0;i<arr3.length;i++){

        str+=arr3[i]+' ';
    }

    $('#display').append('<label id="' + arr2[0][0] + '">' + arr2[0][0] + '<span>: '+str + '</span></label><br/>');
    for(var i=1; i<arr2.length-3;i++) {

        $('#display').append('<label id="' + arr2[i][0] + '">' + arr2[i][0] + '<span>: '+ arr2[i][1] + '</span></label><br/>');

    }


        $('#display').append('<label id="' + arr2[7][0] + '">' + arr2[7][0] + '<span>:' + arr2[7][1] + '/' + arr2[8][1] + '/' + arr2[9][1] + '</span></label>');

})