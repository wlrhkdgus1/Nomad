const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
       latitude, // < 위도이며 왼쪽코드와 같은의미latitude: latitude,
       longitude // < 경도이며 왼쪽코드와 같은의미longitude: longitude
    };
    saveCoords(coordsObj);

}

function handleGeoError(){
   console.log("Cant access geo location") //위치 정보를 찿을수 없습니다.
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else {
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();