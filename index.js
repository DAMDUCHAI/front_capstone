var btnDecrementValue=document.getElementsByClassName("btn-decrementValue")
var btnIncrementValue=document.getElementsByClassName("btn-incrementValue")



for (var i=0;i<btnIncrementValue.length; i++) {

    btnIncrementValue[i].addEventListener('click',function(event){
          var buttonClick = event.target;
  var input=buttonClick.parentElement.children[1];
  var inputValue=input.value;

  var newValue=parseInt(inputValue)+1;
input.value=newValue
        });

}


for (var i=0;i<btnDecrementValue.length; i++) {

    btnDecrementValue[i].addEventListener('click',function(event){
        var buttonClick = event.target;
        var input=buttonClick.parentElement.children[1];
        var inputValue=input.value;
        if(inputValue==0){
            input.value=0;
            return
          }
        var newValue=parseInt(inputValue)-1;
      input.value=newValue
    });

}