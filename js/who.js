function loadUser() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            const userInfo = data.results[0];
            const userName = userInfo.name;
            const location = userInfo.location;
            const userIdentity = userInfo.picture;
            document.getElementById('user-name').innerText =
                ` ${userName.title} ${userName.first} ${userName.last} `;
            document.getElementById('mail').innerText = userInfo.email;
            document.getElementById('address').innerText = location.city;
            document.getElementById('user-image').src = userIdentity.large;
        })
}
loadUser();
setInterval(() => {
    loadUser();
}, 0);