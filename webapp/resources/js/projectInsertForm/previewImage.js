'use strict'

$("#thumbnail_img").click(function(){

    $("#thumbnail_uploader").click();

    });

$("#thumbnail_uploader").change(function(event){
    let reader = new FileReader();
    reader.onload = function(event){
        let $img = $("#thumbnail_img"); 
        $img.attr('src',event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
})

$("#profile_img").click(function(){

    $("#profile_uploader").click();

})

$("#profile_uploader").change(function(event){
    let reader = new FileReader();
    reader.onload = function(event){
        let $img = $("#profile_img"); 
        $img.attr('src',event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
})