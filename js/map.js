let map = L.map('Map').setView([51.220117, 4.396364], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.220117, 4.396364], [51.220117, 4.396364]];

let logoIcon = L.icon({
    iconUrl: 'assets/images/ChatGPT Image Nov 11, 2025, 12_55_38 AM.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

let apMarker = L.marker([51.220117, 4.396364], { icon: logoIcon }).addTo(map);
