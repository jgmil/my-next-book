/********************************************
Step 1 define functions and objects
************************************/
const TASTEDIVE_URL = "https://tastedive.com/api/similar?q=the+help";
const GOOGLEMAPS_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=YOUR_API_KEY"

const testBookData = {
    0 {
        Name: "The Secret Life Of Bees"
        Type: "book"
        wTeaser: "The Secret Life of Bees is a book by author Sue Monk Kidd. Set in 1964, it is a coming-of-age story about loss and betrayal. It received critical acclaim and was a New York Times bestseller. It won the 2004 Book Sense Book of the Year Awards (Paperback), and was nominated for the Orange Broadband Prize for Fiction.The book was later was adapted into a film directed by Gina Prince-Bythewood.Set in Sylvan, South Carolina, in 1964, The Secret Life of Bees tells the story of a 14-year-old white girl, Lily Melissa Owens, whose life has been shaped around the blurred memory of the afternoon her mother was killed. She lives in a house with her abusive father, whom she refers to as T. Ray. They have a no-nonsense maid, Rosaleen, who acts as a surrogate mother for Lily. The book opens with Lily's discovery of bees in her bedroom. Then, after Rosaleen is arrested for pouring her bottle of "
        snuff juice " on three white men, Lily breaks her out of the hospital and they decide to leave town. They begin hitch-hiking toward Tiburon, SC, a place written on the back of an image of the Virgin Mary as a black woman, which Deborah, her mother, had owned. They spend a night in the woods with little food and little hope before reaching Tiburon. There, they buy lunch at a general store, and Lily recognizes a picture of the same "
        Black Mary " but on the side of a jar of honey. They receive directions to the origin of that honey, the Boatwright residence. They are introduced to the Boatwright sisters, the makers of the honey: August, May, and June, who are all black. Lily makes up a story about being an orphan. Lily and Rosaleen are invited to stay with the sisters."
        wUrl: "https://en.wikipedia.org/wiki/The_Secret_Life_of_Bees_(novel)
    }
}

function onSubmit {
    event.preventDefault();
    //get search query
    //
}

function getData(queryBook, queryLocation) {

}

function displayBookData(bookData) {
    console.log(bookData);
}

function displayMapData(mapData) {
    console.log(mapData);
}

/********************************************
Step 2 use functions and objects
************************************/


/*const TASTEDIVE_SEARCH_URL = 'https://tastedive.com/api/similar?';

function getData(searchTerm, callback) {
  const query = {
    k: '302151-MyNextBo-ICUKSR70',
    q: `the help`,
    type: books
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
