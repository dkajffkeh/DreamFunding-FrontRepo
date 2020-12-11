'use strict'

 //리워드 제공 가능수 옵션 클릭했을때 수량을 입력받는 input 보여줄지 말지.
 $("#reward_condition1").click(function(){
    $("#rewardAmount").css('display','none');
})
$("#reward_condition2").click(function(){
    $("#rewardAmount").css('display','flex');
})   
    
//리워드 옵션 선택자  20201211 여기부터 진행 해야함.
$("#rewardInputBtn").click(function(){

    let optionValues = $("#reward-options").val();
    let createLi = document.createElement('li');
    let createInput = document.createElement('input')
    createInput.setAttribute('type','hidden')
    createInput.setAttribute('name','tempName');
    createLi.setAttribute('onclick','deleteList(this)');
   

    if(optionValues.trim().length!=0){ //뭔가가 입력 된 경우

        createLi.innerHTML=optionValues;
        createInput.setAttribute("value",optionValues);
        $("#reward_list").append(createLi); //리스트에 추가됨.
        $("#reward-options").val('');


    } else {
        alert("입력값이 없습니다.")
    }
});

function deleteList(event){
    let rewardOption = event.innerHTML;

    //이거 input nane=options 요소도 나중에 반드시 삭제하는 로직 만들어야함
    if(confirm(rewardOption + "항목을 삭제 하시겠습니까?")){
        event.remove();
    }

}