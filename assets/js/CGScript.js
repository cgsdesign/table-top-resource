// fetch api

var catagory = ""
var entry = ""

var fetchCatagory = function() {

}

$("#classBarb").on("click", function() {
    fetchCatagory()
})

//IMAGES -----------------------------------------------------
var ImageSearch = function() {
    var searchImageInput = document.getElementById('imageInput').value
    var placeImagesEl = document.getElementById('placeImages')
    placeImagesEl.innerHTML=""

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
                    //where images go
                    var placeImagesEl = document.querySelector('#placeImages');
                    //outer a to aply href
                    var imgLinker = document.createElement("a");
                    imgLinker.setAttribute('href', data.hits[j].largeImageURL );
                    imgLinker.setAttribute('target', '_blank' );
                    imgLinker.setAttribute('id', `${[j]}` );
                    //inner img
                    var Img = document.createElement('img');
                    Img.setAttribute('src', data.hits[j].largeImageURL);
                    console.log(Img)
                    //put it all together and drop in page
                    imgLinker.append(Img);
                    placeImagesEl.append(imgLinker);
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

//clear image search
var clearImageSearch = function() {
    var placeImagesEl = document.getElementById('placeImages')
    placeImagesEl.innerHTML=""
}

var clearImageEl = document.querySelector("#image-search-clear");
clearImageEl.addEventListener("click", clearImageSearch);
//IMAGES END-------------------------------------------------------