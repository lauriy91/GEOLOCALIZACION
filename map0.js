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

const url = 'https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/gestionpublica/centrosadministrativos/MapServer?f=pjson'

fetch(url)
.then(res => res.json())
.then(data => {
    const {xmin, ymin, xmax, ymax} = data.fullExtent
    console.log(xmin, ymin,ymax,xmax)
    let marker2  = L.marker([ymin,xmin], {icon: iconMarket}).addTo(myMap)
    let marker3 = L.marker([ymax,xmax],{icon: iconMarket}).addTo(myMap)
})



