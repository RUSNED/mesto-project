const body = document.querySelector("body");

//popup профиль
const popup = document.querySelector("#popup");
const popupProfile = document.querySelector("#popupProfile");
const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

openButton.addEventListener("click", function () {
  openPopup();
});

closeButton.addEventListener("click", function () {
  closePopup();
});

document.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

//popup карточки
const popupCard = document.querySelector("#popupCard");
const openButtonCard = document.querySelector("#openButtonCard");
const closeButtonCard = document.querySelector("#closeButtonCard");

function openPopupCard() {
  popupCard.classList.add("popup_openedCard");
}

function closePopupCard() {
  popupCard.classList.remove("popup_openedCard");
}

openButtonCard.addEventListener("click", function () {
  openPopupCard();
});

closeButtonCard.addEventListener("click", function () {
  closePopupCard();
});
const saveButtonCard = document.querySelector("#saveButtonCard");
saveButtonCard.addEventListener("click", function () {
  closePopupCard(popup);
});

document.addEventListener("click", (e) => {
    if (e.target === popupCard) {
      closePopupCard();
    }
  });


//ввод имени в профиль
const formElement = document.querySelector("#popup"); // Находим форму в DOM
// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector("#profile__name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector("#profile-description"); // Воспользуйтесь инструментом .querySelector()
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  nameInput.getAttribute("value");
  jobInput.getAttribute("value");
  // Выберите элементы, куда должны быть вставлены значения полей
  const profileName = document.querySelector("#profileName");
  const profileJob = document.querySelector("#profileJob");
  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

const saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", function () {
  closePopup(popup);
});

//создание карточек на странице из массива
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardContainer = document.querySelector("#cardContainer");
const elementTemplate = document.querySelector("#elementTemplate").content;

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

//создание новой карточки
function cardActive({ name, link }) {
  const cardElement = elementTemplate
    .querySelector(".element__card")
    .cloneNode(true);
  cardElement.querySelector(".element__place").textContent = name;
  cardElement.querySelector(".element__image").src = link;
  cardElement.querySelector(".element__image").alt = name;
  cardContainer.prepend(cardElement);
//лайки
const like = cardElement.querySelector(".element__like-button");
  like.addEventListener('click', function (event) {
    event.target.classList.toggle("element__like-button_active");
  });
   //удаление
const buttonTrash = cardElement.querySelector(".element__trash");
buttonTrash.addEventListener ('click', handleDelete);
  function handleDelete (event){
    const currentCard = event.target.closest (".element__card");
    currentCard.remove()
};
}
function render() {
  placeInfo.forEach(cardActive);
}

render();


