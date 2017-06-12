var countDownTime = 0;
var breakLength = 5;
var sessionLength = 25;

$(document).ready(function(){
  $('#minus-break').on('click',function(){
    if(breakLength>0){
    breakLength--;
  }
    $('#break-time').html(breakLength);
  });

  $('#add-break').on('click',function(){
    breakLength++;
    $('#break-time').html(breakLength);
  });

  $('#minus-session').on('click',function(){
    if(sessionLength>0){
    sessionLength--;
  }
    $('#session-time').html(sessionLength);
  });

  $('#add-session').on('click',function(){
    sessionLength++;
    $('#session-time').html(sessionLength);
  });

  $('#reset-button').on('click',function(){
    breakLength = 5;
    sessionLength = 25;
    $('#break-time').html(breakLength);
    $('#session-time').html(sessionLength);
  });
});
