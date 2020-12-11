        'use strict'
        //클릭했을때 스로라이드 해주는 자바스크립트
        $("#first_bar").click(function(){scrolltoggleFirstbar()}); //스토리 바 눌렀을때 토글
        $("#firstbar_remote").click(function(){scrolltoggleFirstbar();}); //리모트 스토리 바 눌렀을때 토글.
        $("#second_bar").click(function(){scrolltoggleSecondbar();});
        $("#secondbar_remote").click(function(){scrolltoggleSecondbar();});
        
        function scrolltoggleFirstbar(){

            $("#reward_wrapper").css('display','none');

            $("#story_wrapper").slideToggle('slow');
            window.scrollTo(0,0);
        };
        function scrolltoggleSecondbar(){

            $("#story_wrapper").css('display','none');

            $("#reward_wrapper").slideToggle('slow');
            window.scrollTo(0,0);

        }