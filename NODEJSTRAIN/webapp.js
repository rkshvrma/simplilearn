var request = require('request')
function getWeather(loc) {
    return new Promise(function (resolve, reject) {
        var el = encodeURIComponent(loc);
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=a06fd3d14fff6fdde18d01d4b50d48f3&units=metric`;

        if (!loc) {
            return reject('loc not found')

        }
        request({
            url: url,
            json: true
        }, function (error,response, body) {
            if (error) {
                reject('unable to fetch weather')
            }
            else {
                resolve('its' + body.main.temp + ' in ' + body.name);
            }
        })
    })
}
getWeather('hyderabad').then(function (currentweather) {
    console.log(currentweather)
}, function (error) {
    console.log(error)
}
)