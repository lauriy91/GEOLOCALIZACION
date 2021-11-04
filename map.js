const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'


let myMap = L.map('myMap').setView([4.69,-74.1],10)

L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(myMap)

//let marker = L.marker([4.69,-74.1]).addTo(myMap)

let iconMarket = L.icon({
    iconUrl: 'marker.png',
    iconSize: [60,60],
    iconAnchor: [30,60]
})

//let marker2 = L.marker([4.71,-74.1], {icon: iconMarket}).addTo(myMap) 

myMap.doubleClickZoom.disable()
myMap.on('dblclick', e =>{
    let LatLng = myMap.mouseEventToLatLng(e.originalEvent)
    L.marker([LatLng.lat, LatLng.lng], {icon: iconMarket}).addTo(myMap)
})

const url = 'https://datosabiertos.bogota.gov.co/dataset/fc66362f-ba91-4d7a-af9c-d0b3d3a60106/resource/0e432b79-8c0f-4a0c-a592-43330712fe03/download/ips.geojson'

fetch(url)
.then(res => res.json())
.then(data => {
    L.geoJson(data).addTo(myMap)
  
})



