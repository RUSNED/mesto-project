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


// Находим форму в DOM
const formElement = document.querySelector('#popup')
// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('#profile__name');// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('#profile-description');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    // Выберите элементы, куда должны быть вставлены значения полей
    const profileName = document.querySelector('#profileName');
    const profileJob = document.querySelector('#profileJob');
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

const saveButton = document.querySelector('#saveButton');
saveButton.addEventListener('click', function() {
  closePopup(popup);
})


const cardContainer = document.querySelector('#cardContainer');

function cardActive () {
    const elementTemplate = document.querySelector('#elementTemplate').content;
    const cardElement = elementTemplate.querySelector('.element__card').cloneNode(true);

    cardElement.querySelector('.element__image').src = "./images/Karachaevsk.png";
    cardElement.querySelector('.element__place').textContent = 'Дюк Корморант';

    cardContainer.prepend(cardElement); 
}


cardButton.addEventListener('click',function () {
    cardActive();
    
});



