import {
  enableValidation,
  settings,
  disableButton,
  resetValidation,
} from "../scripts/validation.js";
import "./index.css";
import logoSRC from "../images/logo.svg";
import avatarSRC from "../images/spots-avatar-and-card-images/avatar.jpg";
import profileImageSrc from "../images/pencil.svg";
import plusImageSRC from "../images/plus.svg";
import API from "../utils/Api.js";
import { setButtonText } from "../utils/helpers.js";

const logoImage = document.getElementById("image-logo");
logoImage.src = logoSRC;

const profileAvatar = document.getElementById("profile-avatar");
profileAvatar.src = avatarSRC;

const profileImage = document.getElementById("edit-profile-image");
profileImage.src = profileImageSrc;

const plusImage = document.getElementById("plusImage");
plusImage.src = plusImageSRC;

const profileEditButton = document.querySelector(".profile__edit-button");
const cardModalButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editFormElement = editProfileModal.querySelector(".modal__form");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editModalNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editModalDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

const cardModal = document.querySelector("#add-card-modal");
const cardForm = cardModal.querySelector(".modal__form");
const cardSubmitButton = cardModal.querySelector(".modal__submit-button");
const cardModalCloseButton = cardModal.querySelector(".modal__close-button");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

const avatarModal = document.querySelector("#avatar-modal");
const avatarForm = avatarModal.querySelector(".modal__form");
const avatarSubmitButton = avatarModal.querySelector(".modal__submit-button");
const avatarModalCloseButton = avatarModal.querySelector(
  ".modal__close-button"
);
const avatarModalButton = document.querySelector(".profile__avatar-btn");
const avatarLinkInput = avatarModal.querySelector("#profile-avatar-input");

const deleteModal = document.querySelector("#delete-modal");
const deleteForm = deleteModal.querySelector(".modal__form_dlt");

const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
const previewModalClose = previewModal.querySelector(".modal__close-button");

let selectedCard;
let selectedCardId;

const api = new API({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "eaa07941-85e8-4191-b5c0-cf5839401a76",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, user]) => {
    cards.forEach((item) => {
      const cardElement = getCardElement(item);
      cardsList.prepend(cardElement);
    });

    profileAvatar.src = user.avatar;
    profileName.textContent = user.name;
    profileDescription.textContent = user.about;
    cardNameInput.value = user.name;
    cardLinkInput.value = user.about;
  })
  .catch((err) => {
    console.log(err);
  });

function handleLike(evt, id) {
  const isLiked = evt.target.classList.contains("card__like-button_liked");
  api
    .changeLikeStatus(id, !isLiked)
    .then((data) => {
      evt.target.classList.toggle("card__like-button_liked");
    })
    .catch(console.error);
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardCloseButton = cardElement.querySelector(".card__close-button");

  cardNameEl.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardLikeButton.addEventListener("click", (evt) => handleLike(evt, data._id));

  cardImage.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImageEl.src = data.link;
    previewModalCaptionEl.textContent = data.name;
    previewModalImageEl.alt = data.name;
  });

  cardCloseButton.addEventListener("click", (evt) =>
    handleDeleteCard(cardElement, data._id)
  );

  return cardElement;
}

previewModalClose.addEventListener("click", () => {
  closeModal(previewModal);
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  const submitBtn = evt.submitter;
  setButtonText(submitBtn, true, "Saving...", "Save");
  api
    .editUserInfo({
      name: editModalNameInput.value,
      about: editModalDescriptionInput.value,
    })
    .then((data) => {
      profileName.textContent = editModalNameInput.value;
      profileDescription.textContent = editModalDescriptionInput.value;
      closeModal(editProfileModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(submitBtn, false, "Saving...", "Save");
    });
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
  api
    .addCard(inputValues)
    .then((data) => {
      const cardElement = getCardElement(data);
      cardsList.prepend(cardElement);
      disableButton(cardSubmitButton, settings);
      evt.target.reset();
      closeModal(cardModal);
    })
    .catch(console.error);
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  api
    .editUserAvatar(avatarLinkInput.value)
    .then((data) => {
      profileAvatar.src = data.avatar;
      closeModal(avatarModal);
    })
    .catch(console.error);
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();
  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
    })
    .catch(console.error);
}

function handleDeleteCard(cardElement, cardID) {
  selectedCard = cardElement;
  selectedCardId = cardID;
  openModal(deleteModal);
}
profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    editFormElement,
    [editModalNameInput, editModalDescriptionInput],
    {
      inputErrorClass: "modal__input_type_error",
      errorClass: "modal__error",
    }
  );
  openModal(editProfileModal);
});
editProfileCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});
cardModalButton.addEventListener("click", () => {
  openModal(cardModal);
});
cardModalCloseButton.addEventListener("click", () => {
  closeModal(cardModal);
});
editFormElement.addEventListener("submit", handleEditFormSubmit);
cardForm.addEventListener("submit", handleAddCardSubmit);
avatarForm.addEventListener("submit", handleAvatarSubmit);

avatarModalButton.addEventListener("click", () => {
  openModal(avatarModal);
});
avatarModalCloseButton.addEventListener("click", () => {
  closeModal(avatarModal);
});

deleteForm.addEventListener("submit", handleDeleteSubmit);

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal.modal_opened");
    if (openModal) closeModal(openModal);
  }
}

function handleOverlayClick(evt) {
  if (!evt.target.closest(".modal__content")) {
    const openModal = document.querySelector(".modal.modal_opened");
    if (openModal) closeModal(openModal);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
  modal.addEventListener("click", handleOverlayClick);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
  modal.removeEventListener("click", handleOverlayClick);
}

enableValidation(settings);
