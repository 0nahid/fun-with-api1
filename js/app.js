function doSomething() {
    fetch('https://www.boredapi.com/api/activity/')
        .then(res => res.json())
        .then(data => {
            document.getElementById('activity').innerText = data.activity;
            document.getElementById('explore_link').innerText = data.type;
            document.getElementById('key').innerText = data.key;
        })
}
doSomething();
setInterval(() => {
    doSomething();
}, 1000);