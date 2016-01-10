$(function(){
  $('#calculate').on('click', function(){
    var parameters = {celciusInput: $('#celciusInput').val(), fahrenheitInput: $('#fahrenheitInput').val() };
    $.get( '/results', parameters, function(data) {
      $('#results').html("");
      for (var key in data) {
        var item = data[key];
        if(item.input){
          $('#results').append(item.input + item.prevTempType + item.output + item.finalTempType + '<br>');
        }
      };
    console.log(data);
      
    });
  });
});