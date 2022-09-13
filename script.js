const body = document.querySelector('body');
const popup = document.querySelector('#popup');
const popupProfile = document.querySelector('#popupProfile');
const openButton = document.querySelector('#openButton');
const closeButton = document.querySelector('#closeButton');

function openPopup (){
    popup.classList.add ('popup_opened');
}

function closePopup (){
    popup.classList.remove ('popup_opened');
}

openButton.addEventListener('click',function () {
    openPopup();
});

closeButton.addEventListener('click',function () {
    closePopup();
});

document.addEventListener('click', (e) => {
    if(e.target === popup) { 
        closePopup();
    }
});

const elementCard = document.querySelectorAll('.element__card');
const like = document.querySelectorAll('.element__like-button');

like.forEach(function(likeIcon) {
  likeIcon.addEventListener('click', function(ex) {
    likeIcon.classList.toggle('element__like-button_active');
  });
});

