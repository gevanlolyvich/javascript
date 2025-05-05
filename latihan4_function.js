function convertCelciusToFahrenheit(temperature) {
    return (9/5) * temperature + 32; 
}
console.log(convertCelciusToFahrenheit(90));

// memasukan dalam variable
function convertCelciusToFahrenheit_test(temperature) {
    const temperatureInFarenheit = (9/5) * temperature +32;
    console.log('hasil konversi:', temperatureInFarenheit);
}
const temperatureInCelcius = 120;
convertCelciusToFahrenheit_test(temperatureInCelcius);


//function expression
const convertCelciusToFahrenheit_expression = function (temperature) {
    return (9/5) * temperature + 32;
}
temperatureInFarenheit = convertCelciusToFahrenheit_expression(90);
console.log('hasil konversi expression', temperatureInFarenheit);


//function arrow
const convertCelciusToFahrenheit_arrow = (temperature) => {
    return (9/5) * temperature + 32;
}
temperatureInFarenheit = convertCelciusToFahrenheit_arrow(90);
console.log('hasil konversi arrow', temperatureInFarenheit);
// cara ringkas tanpa menggunakan kurung kurawal dan return
// const convertCelsiusToFahrenheitInConciseSyntax = (temperature) => (9 / 5) * temperature + 32;