/********************************************
Step 1 define functions and objects
************************************/
const TASTEDIVE_URL = "https://tastedive.com/api/similar?q=the+help";
const GOOGLEMAPS_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=YOUR_API_KEY";

function getBookData(titleQuery) {
    var params = {
        type: 'books',
        info: '1',
        k: '302151-MyNextBo-ICUKSR70'
    };
    var result = $.ajax({
            /* update API end point */
            url: "https://tastedive.com/api/similar?q=" + titleQuery,
            data: params,
            dataType: "jsonp",
            /*set the call type GET / POST*/
            type: "GET"
        })
        /* if the call is successful (status 200 OK) show results */
        .done(function (result) {
            /* if the results are meeningful, we can just console.log them */
            //console.log(result.Similar.Results);
            displayBookData(result.Similar.Results);

        })
        /* if the call is NOT successful show errors */
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
};

function getMapData(locationQuery, locationType) {
    console.log(locationQuery, locationType);
    let address = locationQuery.replace(/\s+/g, "+");
    let results = $.ajax({
            /* update API end point */
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDn4kjOD4MK2ShiRICpTEZ08XvHNGSTL7M",
            dataType: "json",
            type: "GET"
        })

        .done(function (results) {
                //                console.log(results);
                let geocode = results.results["0"].geometry.location;
                console.log(geocode);
                initMap(geocode, locationType);
            }

        );

    $(".mapResults").css("display", "block");
};

var map;
var infowindow;

function initMap(geocode, locationType) {

    map = new google.maps.Map(document.getElementById('map'), {
        center: geocode,
        zoom: 14
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: geocode,
        radius: 1500,
        keyword: locationType
    }, callback);
}

function callback(results, status) {
    console.log(results);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
        console.log(place.name);
        console.log(place.vicinity);
        let contentString = `<div id = "infoWindow" role="dialog"> <p>${place.name}</p> <p> ${place.vicinity}</p></div>`;
        infowindow.setContent(contentString);
        infowindow.open(map, this);
    });
}

function displayBookData(bookData) {
    console.log(bookData);
    for (let i = 0; i < bookData.length; i++) {
        console.log(bookData[i].Name);
        $(".bookResults ul").append(`
            <li class="bookTitle">
            <a class="moreInfoLink" href="${bookData[i].wUrl}">${bookData[i].Name}</a>
            <div class="teaser">${bookData[i].wTeaser}</div>
            </li>
        `);
    }
    $(".bookResults").css("display", "block");
};


/********************************************
Step 2 use functions and objects
************************************/

$(document).ready(function () {
    $(".mapResults").css("display", "none");
    $(".searchForm").submit(event => {
        event.preventDefault();
        $(".bookResults ul").html("");
        const titleQuery = $(event.currentTarget).find('.titleQuery').val();
        if (titleQuery == "") {
            alert("Please enter a book title.");
        };
        $(event.currentTarget).find('.titleQuery').val("");
        const locationQuery = $(event.currentTarget).find('.locationQuery').val();
        if (locationQuery == "") {
            alert("Please enter a location.");
        };
        $(event.currentTarget).find('.locationQuery').val("");
        const locationType = $("input[type=radio][name=locationType]:checked").val();
        //        console.log(locationQuery);
        //        console.log(locationType);
        //        console.log(titleQuery);
        //get data next
        getBookData(titleQuery);
        getMapData(locationQuery, locationType);
    });
});
