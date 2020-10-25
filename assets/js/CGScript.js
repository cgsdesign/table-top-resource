
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
                    imgLinker.setAttribute('href', data.hits[j].largeImageURL);
                    imgLinker.setAttribute('target', '_blank' );
                    imgLinker.setAttribute('id', `${[j]}` );
                    //inner img
                    var Img = document.createElement('img');
                    Img.setAttribute('src', data.hits[j].largeImageURL);
                    console.log(data.hits[j].largeImageURL)
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
//allow search on enter
var checkEnterImg = function(){
    if (event.keyCode === 13) {
        ImageSearch()
    }
}

var userFormElIB = document.querySelector("#image-search-button");
userFormElIB.addEventListener("click", ImageSearch);
var userFormClickElI = document.querySelector("#imageInput");
userFormClickElI.addEventListener("keyup", checkEnterImg)

//clear image search
var clearImageSearch = function() {
    var placeImagesEl = document.getElementById('placeImages')
    placeImagesEl.innerHTML=""
}

var clearImageEl = document.querySelector("#image-search-clear");
clearImageEl.addEventListener("click", clearImageSearch);
//IMAGES END-------------------------------------------------------

//VIDEO START--------------------------------------------------------

var VideoSearch = function() {
    var searchVideoInput = document.getElementById('videoInput').value
    var placeVideoEl = document.getElementById('placeVideos')
    placeVideoEl.innerHTML=""

//fetch vids with PIXBAY 
var API_KEY = '18746508-966e8434b1d9d133d03bfb9ac';
var URL = "https://pixabay.com/api/videos/?key="+API_KEY+"&per_page=3&q="+encodeURIComponent(`${searchVideoInput}`);
    $.getJSON(URL, function(data){
        if (parseInt(data.totalHits) > 0)
            {  
            console.log(data)
            //place Video
            for (var j=0; j < 3; j++){
             //where videos go
                var placeVideoEl = document.querySelector('#placeVideos');
                placeVideoEl.setAttribute("class","row")
                vidLinker = document.createElement("a");
                vidLinker.setAttribute('href', `${data.hits[j].videos.small.url}`);
                console.log(data.hits[j].videos.small.url)
                vidLinker.setAttribute('target', '_blank' );
                vidLinker.setAttribute('id', `V+${[j]}` );
                //play
                Play = document.createElement("button");
                Play.innerHTML="Play"

                //inner still
                var Still = document.createElement('img');
                    Still.setAttribute('src', `https://i.vimeocdn.com/video/${data.hits[j].picture_id}_300.jpg`);
                    //put it all together and drop in page
                    vidLinker.append(Still);
                    vidLinker.append(Play);

                    placeVideoEl.append(vidLinker);
                }
                return
            }
        else{
            console.log('No hits');
            var noVideoEl = document.getElementById('placeVideos')
            noVideoEl.innerHTML="<h2 class='placeVideo'>The internet lacks your imagination, Please try another search.</h2>"
        }
    });
}

//allow search on enter
var checkEnterVideo = function(){
    if (event.keyCode === 13) {
        VideoSearch()
    }
}

var userFormElVB = document.querySelector("#video-search-button");
userFormElVB.addEventListener("click", VideoSearch);
var userFormClickElV = document.querySelector("#videoInput");
userFormClickElV.addEventListener("keyup", checkEnterVideo)

//clear image search
var clearVideoSearch = function() {
    var placeVideoEl = document.getElementById('placeVideos')
    placeVideoEl.innerHTML=""
}

var clearVideoEl = document.querySelector("#video-search-clear");
clearVideoEl.addEventListener("click", clearVideoSearch);