// fetch api

var catagory = ""
var entry = ""

var fetchCatagory = function() {

}

$("#classBarb").on("click", function() {
    fetchCatagory()
})

var ImageSearch = function() {
    var searchImageInput = document.getElementById('imageInput').value
    var placeImagesEl = document.getElementById('placeImages')
   // var clearImageInput = document.getElementById('imageInput').value
    placeImagesEl.innerHTML=""
   // clearImageInput.innerHTML=""
//fetch pictures with PIXBAY 
var API_KEY = '18746508-966e8434b1d9d133d03bfb9ac';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(`${searchImageInput}`);
    $.getJSON(URL, function(data){
        if (parseInt(data.totalHits) > 0)
            {  
                console.log(searchImageInput)
                //place Images
                for (var j=0; j < 4; j++){
                    //console.log(data.hits[j])
                    //console.log(data.hits[j].largeImageURL);
                    var placeImagesEl = document.querySelector('#placeImages');
                    //searchImageInput.value = 'Search';
                    var Img = document.createElement('img');
                    Img.setAttribute('src', data.hits[j].largeImageURL);
                    Img.setAttribute('href', data.hits[j].largeImageURL );
                    Img.setAttribute('url', "blank" );
                    console.log(Img)
                    placeImagesEl.append(Img);
                }
                return
            }
        else{
            console.log('No hits');
            var noImagesEl = document.getElementById('placeImages')
            noImagesEl.innerHTML="<h2 class='placeImages'>The internet lacks your imagination, Please try another search.</h2>"
        }
    });
}
var userFormEl = document.querySelector("#image-search-button");
userFormEl.addEventListener("click", ImageSearch);
