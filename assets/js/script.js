// fetch api

var catagory = ""
var entry = ""

var fetchCatagory = function() {

}

$("#classBarb").on("click", function() {
    fetchCatagory()
})




//fetch pictures with PIXBAY
var API_KEY = '18746508-966e8434b1d9d133d03bfb9ac';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('fantasy');
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.largeImageURL); });

else
    console.log('No hits');
});