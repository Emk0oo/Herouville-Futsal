var map = L.map('map').setView([49.202548542168834, -0.3442810549249789], 13);
var marker = L.marker([49.202548542168834, -0.3442810549249789]).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


