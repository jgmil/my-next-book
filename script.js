//search for similar books using the TasteDive API and the
function getBookData(titleQuery) {
    var params = {
        type: 'books',
        info: '1',
        k: '302151-MyNextBo-ICUKSR70'
    };
    var result = $.ajax({
            url: "https://tastedive.com/api/similar?q=" + titleQuery,
            data: params,
            dataType: "jsonp",
            type: "GET"
        })
        /* if the call is successful (status 200 OK) show results */
        .done(function (result) {
            if (result.Similar.Results.length === 0) {
                alert("Try a different book");
            } else {
                displayBookData(result.Similar.Results)
            };
        })
        /* if the call is NOT successful show errors */
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
};

//based on the user's search, use the Google Maps API to find the geocode of the address
function getMapData(locationQuery, locationType) {
    console.log(locationQuery, locationType);
    let address = locationQuery.replace(/\s+/g, "+");
    let results = $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDn4kjOD4MK2ShiRICpTEZ08XvHNGSTL7M",
            dataType: "json",
            type: "GET"
        })

        .done(function (results) {
            console.log(results);
            let geocode = results.results["0"].geometry.location;
            console.log(geocode);
            initMap(geocode, locationType);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    $(".mapResults").css("display", "block");
};

var map;
var infowindow;

//use the geocode returned from the previous API call, and the location type the user chose to find nearby libraries or bookstores
function initMap(geocode, locationType) {
    if (geocode == undefined) {
        let geocode = {
            "lat": "40.7127753",
            "lng": "-74.0059728"
        };
    }
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

//use the results to create markers on the map
function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    } else {
        alert("Try again!");
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function () {
        let contentString = `<div id = "infoWindow" role="dialog"> <p>${place.name}</p> <p> ${place.vicinity}</p></div>`;
        infowindow.setContent(contentString);
        infowindow.open(map, this);
    });
}

//display the results of similar books
function displayBookData(bookData) {
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

//on page load, reset the page listen for user input
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
        getBookData(titleQuery);
        getMapData(locationQuery, locationType);
    });
});
