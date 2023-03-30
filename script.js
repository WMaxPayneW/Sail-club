let themeDark = document.querySelector('.theme-button-dark');
let themeLight = document.querySelector('.theme-button-light');
let fontSansSerif = document.querySelector('.font-button-sans-serif');
let fontSerif = document.querySelector('.font-button-serif');
let page = document.querySelector('.page');


themeDark.onclick = function () {
    page.classList.add('dark');
    themeDark.classList.add('active');
    themeLight.classList.remove('active');
}

themeLight.onclick = function () {
    page.classList.remove('dark');
    themeDark.classList.remove('active');
    themeLight.classList.add('active');
}

fontSansSerif.onclick = function () {
    page.classList.remove('serif');
    fontSansSerif.classList.add('active');
    fontSerif.classList.remove('active');
}

fontSerif.onclick = function () {
    page.classList.add('serif');
    fontSansSerif.classList.remove('active');
    fontSerif.classList.add('active');
}

let blogs = document.querySelectorAll('.blog-article.short');

for (let blog of blogs) {
    let more = blog.querySelector('.more');
        more.onclick = function () {
        blog.classList.remove('short');
    };
}

let buttonGrid = document.querySelector('.card-view-button-grid');
let buttonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

buttonList.onclick = function () {
    cards.classList.add('list');
    buttonList.classList.add('active');
    buttonGrid.classList.remove('active');
}

buttonGrid.onclick = function () {
    cards.classList.remove('list');
    buttonList.classList.remove('active');
    buttonGrid.classList.add('active');
}

let activePhoto = document.querySelector('.active-photo');
let previewList = document.querySelectorAll('.preview-list a');

for (let previewPhoto of previewList) {
    previewPhoto.onclick = function(evt) {
        evt.preventDefault();
        activePhoto.src = previewPhoto.href;
        let activeItem = document.querySelector('.active-item');
        activeItem.classList.remove('active-item');
        previewPhoto.classList.add('active-item');
    };
}