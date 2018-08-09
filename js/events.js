function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  }
  );
}

function frameIt(){
  $('img').on("load", function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('#typing').on("keydown", function(e){
  if (e.which === 7){
    alert ("You have pressed G");
  }
  });
}

function submitIt(){
  $('#typing').on("submit", function(){
    alert ("Your form is going to be submitted now.");
  });
  return;
}

$(document).ready(function(){

// call functions here

});
