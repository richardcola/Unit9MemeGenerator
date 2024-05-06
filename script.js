document.getElementById("memeForm").addEventListener("submit", function(event) {
    event.preventDefault();


//get input values
var imageUrl = document.getElementById("imageUrl").value;
var topText = document.getElementById("topText").value;
var bottomText = document.getElementById("bottomText").value;

//clear input fields
document.getElementById("imageUrl").value = "";
document.getElementById("topText").value = ""; 
document.getElementById("bottomText").value = "";

//create meme container
var memeContainer = document.createElement("div");
memeContainer.classList.add("meme-container");

//create image Element
var img = document.createElement("img");
img.classList.add("meme-img");
img.src = imageUrl;

//create top text Element
var topTextElem = document.createElement("div");
topTextElem.classList.add("meme-text", "top-text");
topTextElem.textContent = topText;

//create bottom text Element
var bottomTextElem = document.createElement("div");
bottomTextElem.classList.add("meme-text", "bottom-text");
bottomTextElem.textContent = bottomText;

// Position the bottom text relative to the image
bottomTextElem.style.position = "absolute";
bottomTextElem.style.left = "0";
bottomTextElem.style.right = "0";
bottomTextElem.style.bottom = "0px"; 


//append elements to meme container
memeContainer.appendChild(img);
memeContainer.appendChild(topTextElem);
memeContainer.appendChild(bottomTextElem);

//create remove button
var removeBtn = document.createElement("button");
removeBtn.classList.add("remove-btn");
removeBtn.textContent = "Remove";
removeBtn.addEventListener("click", function() {
    memeContainer.remove();
});

//append remove button to meme container
memeContainer.appendChild(removeBtn);

//append meme container to meme container div
document.getElementById("memeContainer").appendChild(memeContainer);
});

