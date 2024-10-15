confirm("next?");
function upDate(previewPic) {
    console.log('Hovered over image');  // Check if the event triggers
}

function upDate(previewPic) {
    console.log('Alt text: ', previewPic.alt);  // Print alt text
    console.log('Source: ', previewPic.src);    // Print image source
}

function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;  // Update the text
}
function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;  // Set new background image
    imageDiv.innerHTML = previewPic.alt;  // Update the text
}
function undo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "";  // Reset background image
    imageDiv.innerHTML = "Hover over an image below to display here.";  // Reset text
}
function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    console.log('Alt text: ', previewPic.alt);  // Log alt text
    console.log('Source: ', previewPic.src);    // Log image source
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;  // Update background image
    imageDiv.innerHTML = previewPic.alt;  // Update text
}

function undo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "";  // Reset background image
    imageDiv.innerHTML = "Hover over an image below to display here.";  // Reset text
}
function initializeGallery() {
    console.log("Gallery loaded");
}
function upDate(previewPic) {
    console.log('Image focused or hovered:', previewPic.alt);
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log('Image focus lost or mouse left');
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
window.onload = function () {
    const images = document.querySelectorAll('.gallery img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        images[i].addEventListener('focus', function () {
            upDate(images[i]);
        });
        images[i].addEventListener('blur', function () {
            undo();
        });
    }
};
function upDate(previewPic) {
    console.log('Image focused or hovered:', previewPic.alt);
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log('Image focus lost or mouse left');
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

window.onload = function () {
    console.log("Gallery loaded");
    const images = document.querySelectorAll('.gallery img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        images[i].addEventListener('focus', function () {
            upDate(images[i]);
        });
        images[i].addEventListener('blur', function () {
            undo();
        });
    }
};
