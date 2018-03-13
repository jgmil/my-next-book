/********************************************
Step 1 define functions and objects
************************************/
const TASTEDIVE_URL = "https://tastedive.com/api/similar?q=the+help";
const GOOGLEMAPS_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=YOUR_API_KEY";

function onSubmit() {
    $(".searchForm").submit(event => {
        event.preventDefault();
        console.log("onSubmit ran");
        const titleTarget = $(event.currentTarget).find('.titleQuery');
        const titleQuery = titleTarget.val();
        titleTarget.val("");
        const locationTarget = $(event.currentTarget).find('.locationQuery');
        const locationQuery = locationTarget.val();
        locationTarget.val("");
        const locationType = $("input[type=radio][name=locationType]:checked").val();
        $('input[type=radio][name="locationType"]').attr("checked", false);
        console.log(locationQuery);
        console.log(locationType);
        console.log(titleQuery);
        //get data next
        displayBookData();
        displayMapData();
    });
};

function getData(titleQuery, locationQuery) {

};

function displayBookData(bookData) {
    console.log(bookData);
    $(".bookResults").html(`
<ul>
<li class="bookTitle" id="book">Book Title <a class="moreInfoLink" href="https://wikipedia.org">More Info</a></li>
<li class="bookTitle" id="book1">Book Title <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
<li class="bookTitle" id="book2">Book Title <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
<li class="bookTitle" id="book3">Book Title <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
<li class="bookTitle" id="book4">Book Title that is really long <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
<li class="bookTitle" id="book5">Book Title <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
<li class="bookTitle" id="book6">Book Title <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
<li class="bookTitle" id="book7">Book Title <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
<li class="bookTitle" id="book8">Book Title <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
<li class="bookTitle" id="book9">Book Title <a class="moreInfoLink" href="https://wikipedia.org" >More Info</a></li>
</ul>`);
    $(".bookResults").css("display", "inline-block");
    $(hoverDescription);
};

function hoverDescription() {
    $("li").hover(
        function () {
            $(this).append($("<div id='bookDescription'> ***</div>"));
        },
        function () {
            $(this).find("div:last").remove();
        }
    );
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
