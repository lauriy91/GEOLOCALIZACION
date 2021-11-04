const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'


let myMap = L.map('myMap').setView([4.69,-74.1],8)

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

const url = 'https://www.datos.gov.co/resource/sgp4-3e6k.geojson'

fetch(url)
.then(res => res.json())
.then(data => {
    L.geoJson(data).addTo(myMap)
  
})



