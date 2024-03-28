const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
setInterval(() => {

    let currentTime = new Date();
    hrs.innerText = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerText = (currentTime.getMinutes < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerText = (currentTime.getSeconds < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
