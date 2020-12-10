// promises.js

// var result = fetch("url");

var result = fetch("https://imbd8.p.rapidapi.com/title/auto-complete");

result.then((httpResponse) => {
    console.log(httpResponse)
});



function download(url, callback) {}

download('http://test.site/image', (result) => {
    result; // => 'http://test.site/image'
});