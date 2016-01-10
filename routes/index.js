var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/results', function(req, res){
  var celciusInput = req.query.celciusInput;
  var fahrenheitInput = req.query.fahrenheitInput;
  console.log(celciusInput);


  var finalFahrenheit = celciusInput * (9/5) + 32;

  var finalCelcius = (fahrenheitInput - 32) * (5/9);

  var finishedConversion = {
    fahrenheit: {
      prevTempType: " degrees Celcius is ",
      input: celciusInput,
      output: finalFahrenheit,
      finalTempType: " degrees Fahrenheit "
    },
    celcius: {
      prevTempType: " degrees Fahrenheit is ",
      input: fahrenheitInput,
      output: finalCelcius,
      finalTempType: " degrees Celcius "
    }
  };
  //console.log("The good stuff");
  //console.log(finishedConversion.fahrenheit.input);
  //console.log(finishedConversion.fahrenheit.output);
  //console.log(finishedConversion.celcius.input);
  //console.log(finishedConversion.celcius.output);
  res.send(finishedConversion);
});

module.exports = router;
