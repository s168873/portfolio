let map = L.map('Map').setView([50.814604, 4.386932], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.2220, 4.4375], [51.2210, 4.4395]];

let logoIcon = L.icon({
    iconUrl: 'assets/images/ChatGPT Image Nov 11, 2025, 12_55_38 AM.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

let apMarker = L.marker([51.2215, 4.4385], { icon: logoIcon }).addTo(map);
