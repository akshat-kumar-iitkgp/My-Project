async function jsonget() {
    var sourceCity = document.getElementById("source_city").value;
    var sourceCountry = document.getElementById('src_country').value;
    var destCity = document.getElementById('dest_city').value;
    var destCountry = document.getElementById('dest_country').value;
    console.log(sourceCity, sourceCountry, destCity, destCountry);


    var url = new URL("http://127.0.0.1:8000/my-route?");
    var params = {
        st: sourceCity,
        sc: sourceCountry,
        dt: destCity,
        dc: destCountry
    }
    console.log(params);
    for (k in params) {
        url.searchParams.append(k, params[k]);
    }

    console.log(url.href);


    // http://127.0.0.1:8000/my-route?st=Delhi&sc=India&dt=Lusaka&dc=Zambia
    const response = await fetch(url
        , {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            // type: "cors",
            cache: 'no-cache',
            headers: {
                // 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    )
    console.log(response);

    const data = await response.json();

    if (data === undefined) {
        alert("api not fetched ")
    }
    else {
        // console.log("hereee,data");
        sessionStorage.setItem("user", JSON.stringify(data))
    }



}

async function submitForm() {

    console.log("fetching data");

    if (sessionStorage.user != undefined) {
        sessionStorage.user = '';
    }
    await jsonget();
    console.log(sessionStorage, sessionStorage.user);
    location.href = "result.html"; 
}

