const initialCards = [
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    {
        name: "Resturant Terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },
    {
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },
    {
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },
    {
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },
    {
        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    }
];

const profileEditButton = document.querySelector(".profile__edit-button");
const cardModalButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editFormElement = editProfileModal.querySelector(".modal__form");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");
const editModalNameInput = editProfileModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

const cardModal = document.querySelector("#add-card-modal");
const cardForm = cardModal.querySelector(".modal__form");
const cardModalCloseButton = cardModal.querySelector(".modal__close-button");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

function getCardElement(data) {
    const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);

    const cardNameEl = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    const cardLikeButton = cardElement.querySelector(".card__like-button");

    cardNameEl.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    cardLikeButton.addEventListener("click", () => {
        cardLikeButton.classList.toggle("card__like-button_liked");
    })

    return cardElement;
};

function openModal(modal) {
    modal.classList.add("modal_opened");
};

function closeModal(modal) {
    modal.classList.remove("modal_opened");
};

function handelEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDescriptionInput.value;
    closeModal(editProfileModal);
};

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const inputValues = { name: cardNameInput.value, link: cardLinkInput.value};
    const cardElement = getCardElement(inputValues);
    cardsList.prepend(cardElement);
    closeModal(editProfileModal);
}

profileEditButton.addEventListener("click", () => {
    editModalNameInput.value = profileName.textContent;
    editModalDescriptionInput.value = profileDescription.textContent;
    openModal(editProfileModal);
});
editProfileCloseButton.addEventListener("click", () => {
    closeModal(editProfileModal);
});
cardModalButton.addEventListener("click", () => {
    openModal(cardModal);
});
cardModalCloseButton.addEventListener("click", () => {
    console.log(cardModalCloseButton);
    closeModal(cardModal);
});
editFormElement.addEventListener("submit", handelEditFormSubmit);
cardForm.addEventListener("submit", handleAddCardSubmit);
initialCards.forEach((item) => {
    const cardElement = getCardElement(item);
    cardsList.prepend(cardElement);
})