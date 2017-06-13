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
    $('#timer').html(sessionLength);
  });

  $('#add-session').on('click',function(){
    sessionLength++;
    $('#session-time').html(sessionLength);
    $('#timer').html(sessionLength);
  });

  $('#reset-button').on('click',function(){
    breakLength = 5;
    sessionLength = 25;
    $('#break-time').html(breakLength);
    $('#session-time').html(sessionLength);
    $('#timer').html(sessionLength);
    $('#status').html("Please select the desired break and session time.");
    //$('#tips').show();
    $('#start-pause-button').html("play_arrow");
  });

  $('#start-pause-button').on('click',function(){
    if($('#status').text().indexOf('SESSION!')> -1){
      $('#status').html("BREAK!");
    }
    else{
      $('#status').html("SESSION!");
    }
    //$('#tips').hide();

    if($(this).text().indexOf('play_arrow')> -1){
      $(this).html("pause");
    }
    else{
      $(this).html("play_arrow");
    }
    //$('#pause-button').show();
  });

  $('#pause-button').on('click',function(){
    $('#status').html("PAUSED!");
    //$('#tips').hide();
    $(this).hide();
    $('#start-button').show();
  });
});
