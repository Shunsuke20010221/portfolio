"use strict";
const current_temp = document.querySelector('.current_temp');
const weather_icon = document.querySelector('.weather_icon');
const current_humi = document.querySelector('.current_humi');
const current_wind = document.querySelector('.current_wind');
const select = document.querySelector('#select_box');

let city = `${select.value}`;

const API_KEY = '29a2640072af10017c1eea3f56197366';
let current_url = `https://api.openweathermap.org/data/2.5/weather?q=${city},jp&units=metric&APPID=${API_KEY}&lang=ja`;
let forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},jp&units=metric&APPID=${API_KEY}&lang=ja`;


//現在の天気を取得
fetch(current_url)
.then(res => {
    // res.json()をreturnすることで、次のthenにAPIで取得できる
    // データをオブジェクト形式で渡すことができる
    return res.json();
})
.then(data => {
    // res.json()で受け取った中身を確認
    // 実際にはここでdataの中身を利用して様々な処理をする
    current_view(data);
});

 // 現在の天気の表示処理
const current_view = (data) => {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    let temp = Math.round(data.main.temp);
    current_temp.innerHTML = `${Math.round(data.main.temp)}<span class = "c">℃</span>`;
    current_humi.innerHTML = `湿度：${Math.round(data.main.humidity)}%`;
    current_wind.innerHTML = `風速：${Math.round(data.wind.speed)}m/s`
    weather_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    if(temp >= 25){
        
    }else if(temp <= 15) {

    }else {

    }
}

select.addEventListener('change',() => {
    console.log(select.value);
    city = select.value;
    current_url = `https://api.openweathermap.org/data/2.5/weather?q=${city},jp&units=metric&APPID=${API_KEY}&lang=ja`;
    forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},jp&units=metric&APPID=${API_KEY}&lang=ja`;

    fetch(current_url)
    .then(res => {
    // res.json()をreturnすることで、次のthenにAPIで取得できる
    // データをオブジェクト形式で渡すことができる
        return res.json();
    })
    .then(data => {
    // res.json()で受け取った中身を確認
    // 実際にはここでdataの中身を利用して様々な処理をする
        current_view(data);
    });
});
