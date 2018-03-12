/********************************************
Step 1 define functions and objects
************************************/
const TASTEDIVE_URL = "https://tastedive.com/api/similar?q=the+help";
const GOOGLEMAPS_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=YOUR_API_KEY";

function onSubmit() {
    $(".searchForm").submit(event => {
        event.preventDefault();
        console.log("onSubmit ran");
        //get search query
        //
        displayBookData();
        displayMapData();
    });
};

function getData(queryBook, queryLocation) {

};

function displayBookData(bookData) {
    console.log(bookData);
    $(".bookResults").append(`
<ul>
<li><a href="https://wikipedia.org" id="book">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book1">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book2">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book3">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book4">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book5">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book6">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book7">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book8">Book Title</a></li>
<li><a href="https://wikipedia.org" id="book9">Book Title</a></li>
</ul>`);
    $(".bookResults").css("display", "inline-block");
};

function displayMapData(mapData) {
    console.log(mapData);
    $(".mapResults").css("display", "inline-block");
};

function truncate(string) {
    if (string.length > 5)
        return string.substring(0, 5) + '...';
    else
        return string;
};

/********************************************
Step 2 use functions and objects
************************************/

$(onSubmit);

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
