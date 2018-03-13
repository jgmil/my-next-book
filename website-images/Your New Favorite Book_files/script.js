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
    displayMapData("hey");
};

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

function displayMapData(mapData) {
    console.log(mapData);
    $(".mapResults").css("display", "block");
};

function truncate(string) {
    if (string.length > 300)
        return string.substring(0, 300) + '...';
    else
        return string;
};

/********************************************
Step 2 use functions and objects
************************************/

$(document).ready(function () {
    $(".mapResults").css("display", "none");
    $(".searchForm").submit(event => {
        event.preventDefault();
        console.log("onSubmit ran");
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



/*const TASTEDIVE_SEARCH_URL = 'https://tastedive.com/api/similar?';

function getData(searchTerm, callback) {
  const query = {
    k: '302151-MyNextBo-ICUKSR70',
    q: `the help`,
    type: 'books'
  };
  $.getJSON(TASTEDIVE_SEARCH_URL, query, callback);
}

function onSubmit() {
    $('.searchForm').submit(event => {
    event.preventDefault();
    const query = {
        k: '302151-MyNextBo-ICUKSR70',
        q: `the help`,
        type: 'books'
    };
    $.getJSON(TASTEDIVE_SEARCH_URL, query, callback);
    getData(query, displayData);
  });
}


function displayData(data) {
  console.log(data);
  }


$(onSubmit);*/
