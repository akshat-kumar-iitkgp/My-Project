var obj;
function run() {

    if (sessionStorage.user != undefined) obj = JSON.parse(sessionStorage.user);

    // console.log(obj)

    var src_lat = document.getElementById('src_lat');
    src_lat.innerHTML = obj["Src_Port_Lat"];


    var Src_Lng = document.getElementById('Src_Lng');
    Src_Lng.innerHTML = obj["Src_Port_Lng"];

    var Src_Port_Country = document.getElementById('Src_Port_Country');
    Src_Port_Country.innerHTML = obj["Src_Port"] + " in " + obj["Src_Country"];

    var Dest_Lat = document.getElementById('Dest_Lat');
    Dest_Lat.innerHTML = obj["Dest_Lat"];


    var Dest_Lng = document.getElementById('Dest_Lng');
    Dest_Lng.innerHTML = obj["Dest_Lng"];

    var Dest_Port_Country = document.getElementById('Dest_Port_Country');
    Dest_Port_Country.innerHTML = obj["Dest_Port"] + " in " + obj["Dest_Country"];
    console.log("map results Done Succesfully")
}