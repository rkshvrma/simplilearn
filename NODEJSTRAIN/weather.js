var request = require('request');

module.exports = function (location) {
    return new Promise(function(resolve,reject){
    var el = encodeURIComponent(location)
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=a06fd3d14fff6fdde18d01d4b50d48f3&units=metric`;
    // if (!loc) {
    //     return reject('loc not found')

    // }
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error) {
            reject('unable to fetch weather')
        }
        else {
            resolve('It\'s ' + body.main.temp + ' in ' + body.name);
        }
    });
})
}