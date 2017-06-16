var countDownTime = 0;
var breakLength = 5;
var sessionLength = 25;
var intervalSession;

$(document).ready(function(){

  function moveBar(){
    var width = 1;
    var id = setInterval(frame,1000);
    function frame(){
      if(width>=100){
        clearInterval(id);
      }
      else{
        width++;
      }
    }
  }


  $('#reset-button').hide();

  $('#minus-break').on('click',function(){
    if(breakLength>0){
    breakLength--;
  }
    $('#break-time').html(breakLength);
    $('#start-pause-button').html("play_arrow");
    clearInterval(intervalSession);
  });

  $('#add-break').on('click',function(){
    breakLength++;
    $('#break-time').html(breakLength);
    $('#start-pause-button').html("play_arrow");
    clearInterval(intervalSession);
  });

  $('#minus-session').on('click',function(){
    if(sessionLength>0){
    sessionLength--;
  }
    $('#session-time').html(sessionLength);
    $('#timer').html(sessionLength);
    $('#start-pause-button').html("play_arrow");
    clearInterval(intervalSession);
  });

  $('#add-session').on('click',function(){
    sessionLength++;
    $('#session-time').html(sessionLength);
    $('#timer').html(sessionLength);
    $('#start-pause-button').html("play_arrow");
    clearInterval(intervalSession);
  });

  $('#reset-button').on('click',function(){
    breakLength = 5;
    sessionLength = 25;
    $('#break-time').html(breakLength);
    $('#session-time').html(sessionLength);
    $('#timer').html(sessionLength);
    $('#status').html("Please select the desired break and session time.");
    //$('#tips').show();
    //$('#start-pause-button').html("play_arrow");
    $('#start-pause-button').show("slow");
    $('.settings-container').show("slow");
    $(this).hide();
    clearInterval(intervalSession);
    //$('#progress-bar').css('width', '0%');
    $('#progress-bar').stop();
    $('#progress-bar').css('width', '0%');
  });

  $('#start-pause-button').on('click',function(){
    /*if($('#status').text().indexOf('SESSION!')> -1){
      $('#status').html("BREAK!");
    }
    else{
      $('#status').html("SESSION!");
    }*/
    //$('#tips').hide();

    /*if($(this).text().indexOf('play_arrow')> -1){
      $(this).html("replay");*/
      /*$('#progress-bar').delay(1000).animate({
        width:"100%"
      }, sessionLength*1000);*/

      $('.settings-container').hide("slow");
      $('#reset-button').css('transform','translateX(-0.25em)').show("slow");
      $(this).hide("slow");
      var tmpSession = sessionLength;
      var tmpBreak = breakLength;

      function countDownSession(){
        //if(sessionLength>0){
        //sessionLength--;
        //}
        //var tmpSession = sessionLength;
        //var tmpBreak = breakLength;
        $('#status').html("SESSION!");
        /*$('#progress-bar').delay(1000).animate({
          width:"100%"
        }, sessionLength*1000);*/
        //$('#timer').html(sessionLength);
        if(sessionLength >= 0){
        console.log(sessionLength + " " + $('#status').text());
        $('#timer').html(sessionLength);
        sessionLength--;

      }
        else/*(sessionLength<0)*/{
          //sessionLength = tmpSession;
          //breakLength = tmpBreak;
          countDownBreak();
          //sessionLength = tmpSession;
        }
      }

      function countDownBreak(){
        $('#status').html("BREAK!");
        if(breakLength >=0){
        console.log(breakLength + " " + $('#status').text());
        $('#timer').html(breakLength);
        breakLength--;
        }
        else/*(breakLength<0)*/{
          //countDownSession();
          breakLength = tmpBreak;
          sessionLength = tmpSession;
          countDownSession();
        }
      }
        /*if(sessionLength<0){
          sessionLength = tmpSession;
          $('#timer').html(breakLength);
          breakLength--;
          $('#status').html("BREAK!");
        }

        if(breakLength<0){
          breakLength = tmpBreak;
          $('#timer').html(sessionLength);
          sessionLength--;
          $('#status').html("SESSION!");
        }

      }*/

      intervalSession = setInterval(countDownSession, 1000);
      //intervalBreak = setInterval(countDownBreak, 1000);

      /*if(sessionLength<0){
        clearInterval(intervalSessionession);
        intervalBreak = setInterval(countDownBreak, 1000);
      }

      if(breakLength<0){
        clearInterval(intervalBreak);
        setInterval(countDownSession, 1000);
      }*/

    //}
    /*else{
      $(this).html("play_arrow");
      clearInterval(intervalSession);
      $('#status').html("Time Paused!");
    }*/


    //console.log(breakLength);
    //console.log(sessionLength);

  });

  /*$('#pause-button').on('click',function(){
    $('#status').html("PAUSED!");
    //$('#tips').hide();
    $(this).hide();
    $('#start-button').show();
  });*/


});
