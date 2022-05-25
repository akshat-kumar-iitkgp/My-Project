

var obj;
function run() {
    // console.log("runfunction")
    if (sessionStorage.user != undefined) obj = JSON.parse(sessionStorage.user);

    console.log(obj);


    document.getElementById('headerline').innerHTML = "From " + obj["Src_City"] + "," + obj["Src_Country"] + " to " + obj["Dest_City"] + "," + obj["Dest_Country"];
    initMap();


}

function initMap() {
    console.log("here");
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: { lat: 34.0479, lng: 78.9629 },
        mapTypeId: "terrain",
    });

    const PlanCoordinates = [
        // { lat: -19.76666667, lng: 34.83333333 },
        // { lat: 23.0, lng: 70.18333333 }
        // // ,
        { lat: parseFloat(obj["Src_Port_Lat"]), lng: parseFloat(obj["Src_Port_Lng"]) },
        { lat: parseFloat(obj["Src_Lat"]), lng: parseFloat(obj["Src_Lng"]) },
        { lat: parseFloat(obj["Dest_Port_Lat"]), lng: parseFloat(obj["Dest_Port_Lng"]) },
        { lat: parseFloat(obj["Dest_Lat"]), lng: parseFloat(obj["Dest_Lng"]) }
    ];

    console.log("here", PlanCoordinates);

    const Path = new google.maps.Polyline({
        path: PlanCoordinates,
        geodesic: true,
        strokeColor: "#000000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    const beachMarker = new google.maps.Marker({
        position: PlanCoordinates[2],
        map,
        title: "Destination Port" + " : " + obj["Dest_Port"],
    });
    const beachMarker1 = new google.maps.Marker({
        position: PlanCoordinates[1],
        map,
        title: "Source Port" + " : " + obj["Src_Port"],
    });
    const beachMarker2 = new google.maps.Marker({
        position: PlanCoordinates[3],
        map,
        title: "Destination City" + " : " + obj["Dest_City"],
    });
    const beachMarker3 = new google.maps.Marker({
        position: PlanCoordinates[0],
        map,
        title: "Source City" + " : " + obj["Src_City"],
    });




    Path.setMap(map);
}

// window.initMap = initMap;
