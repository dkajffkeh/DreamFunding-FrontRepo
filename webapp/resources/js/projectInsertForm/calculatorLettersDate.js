'use strict'

$(function () {

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate()


    $(".form-control.date.start").attr('min', `${year}-${month}-${date}`);

    let after3days = new Date();

    let after3daysYear = after3days.getFullYear();
    let after3daysMonth = after3days.getMonth() + 1;
    let after3daysDate = after3days.getDate() + 3;

    $(".form-control.date.end").attr('min', `${after3daysYear}-${after3daysMonth}-${after3daysDate}`);

})

//input letter counters
$(".form-control.pro_title").keydown(function () { $(".lettercounter.lc").text($(this).val().length + "/50"); })
$(".form-control.pro_title1").keydown(function () { $(".lettercounter.lc1").text($(this).val().length + "/50"); })
$("#creater-intro").keydown(function () { $(".lettercounter.lc2").text($(this).val().length + "/50"); })


$(".form-control.date.start").change(function () {
    $(".startdate").text("프로젝트 시작일 : " + $(this).val());

    if (!$(".form-control.date.end").val() == false) {
        calculateDday($(this).val(), $(".form-control.date.end").val());
    }
})
$(".form-control.date.end").change(function () {
    $(".enddate").text("프로젝트 종료일 : " + $(this).val());
    if (!$(".form-control.date.start") == false) {
        calculateDday($(".form-control.date.start").val(), $(this).val());
    }
})
function calculateDday(start, end) {
    let startArr = start.split('-');
    let endArr = end.split('-');

    let startDate = new Date(startArr[0], startArr[1], startArr[2]);
    let endDate = new Date(endArr[0], endArr[1], endArr[2])

    let diff = endDate - startDate;
    let day = 1000 * 60 * 60 * 24;

    if ((diff / day) > 0) {
        $("#dateError").text('');
        $("#dateResult").text(`총 ${diff / day}일`);
    }
    if ((diff / day) < 0) {
        $("#dateResult").text('');
        $("#dateError").text(`기간 설정이 잘못 되었습니다`);
    }
}