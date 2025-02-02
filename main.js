!function(){"use strict";var e="";const t={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-button",inactiveButtonClass:"modal__submit-button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},r=(e,t,r)=>{const o=t.id+"-error";e.querySelector("#"+o).textContent="",t.classList.remove(r.inputErrorClass)},o=(e,t,r)=>{(e=>e.some((e=>!e.validity.valid)))(e)?n(t,r):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))},n=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},a=e=>{document.querySelectorAll(e.formSelector).forEach((t=>{((e,t)=>{const n=Array.from(e.querySelectorAll(t.inputSelector)),a=e.querySelector(t.submitButtonSelector);o(n,a,t),n.forEach((s=>{s.addEventListener("input",(function(){((e,t,o)=>{t.validity.valid?r(e,t,o):((e,t,r,o)=>{const n=t.id+"-error";e.querySelector("#"+n).textContent=r,t.classList.add(o.inputErrorClass)})(e,t,t.validationMessage,o)})(e,s,t),o(n,a,t)}))}))})(t,e)}))};document.addEventListener("DOMContentLoaded",(()=>{a(t)}));var s=e+"images/logo.svg",c=e+"2fc47fd8e9a9bcd9612f.jpg",l=e+"images/pencil.svg",i=e+"images/plus.svg";document.getElementById("image-logo").src=s;const d=document.getElementById("profile-avatar");d.src=c,document.getElementById("edit-profile-image").src=l,document.getElementById("plusImage").src=i;const u=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),_=document.querySelector(".profile__name"),h=document.querySelector(".profile__description"),v=document.querySelector("#edit-profile-modal"),f=v.querySelector(".modal__form"),p=v.querySelector(".modal__close-button"),y=v.querySelector("#profile-name-input"),S=v.querySelector("#profile-description-input"),b=document.querySelector("#card-template"),E=document.querySelector(".cards__list"),q=document.querySelector("#add-card-modal"),g=q.querySelector(".modal__form"),k=q.querySelector(".modal__submit-button"),L=q.querySelector(".modal__close-button"),C=q.querySelector("#add-card-name-input"),U=q.querySelector("#add-card-link-input"),j=document.querySelector("#avatar-modal"),$=j.querySelector(".modal__form"),I=(j.querySelector(".modal__submit-button"),j.querySelector(".modal__close-button")),P=document.querySelector(".profile__avatar-btn"),A=j.querySelector("#profile-avatar-input"),x=document.querySelector("#delete-modal"),B=x.querySelector(".modal__form"),D=document.querySelector("#preview-modal"),T=D.querySelector(".modal__image"),w=D.querySelector(".modal__caption"),N=D.querySelector(".modal__close-button");let O,H;const J=new class{constructor(e){let{baseUrl:t,headers:r}=e;this._baseUrl=t,this._headers=r}getAppInfo(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}getInitialCards(){return fetch(`${this._baseUrl}/cards`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}getUserInfo(){return fetch(`${this._baseUrl}/users/me`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserInfo(e){let{name:t,about:r}=e;return fetch(`${this._baseUrl}/users/me`,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserAvatar(e){let{avatar:t}=e;return fetch(`${this._baseUrl}/users/me/avatar`,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserAvatar(e){return fetch(`${this._baseUrl}/users/me/avatar`,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}deleteCard(e){return fetch(`${this._baseUrl}/cards/${e}`,{method:"DELETE",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}changeLikeStatus(e,t){return fetch(`${this._baseUrl}/cards/${e}/likes`,{method:t?"DELETE":"PUT",headers:this._headers}).then((e=>e.ok?e.json():Promise.reject(`Error: ${e.status}`)))}}({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"eaa07941-85e8-4191-b5c0-cf5839401a76","Content-Type":"application/json"}});function M(e){const t=b.content.querySelector(".card").cloneNode(!0),r=t.querySelector(".card__title"),o=t.querySelector(".card__image"),n=t.querySelector(".card__like-button"),a=t.querySelector(".card__close-button");return r.textContent=e.name,o.src=e.link,o.alt=e.name,n.addEventListener("click",(t=>function(e,t){const r=e.target.classList.contains("card__like-button_liked");J.changeLikeStatus(t,!r).then((t=>{e.target.classList.toggle("card__like-button_liked")})).catch(console.error)}(t,e._id))),o.addEventListener("click",(()=>{G(D),T.src=e.link,w.textContent=e.name,T.alt=e.name})),a.addEventListener("click",(r=>function(e,t){O=e,H=t,G(x)}(t,e._id))),t}function z(e){if("Escape"===e.key){const e=document.querySelector(".modal.modal_opened");e&&K(e)}}function F(e){if(!e.target.closest(".modal__content")){const e=document.querySelector(".modal.modal_opened");e&&K(e)}}function G(e){e.classList.add("modal_opened"),document.addEventListener("keydown",z),e.addEventListener("click",F)}function K(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",z),e.removeEventListener("click",F)}J.getAppInfo().then((e=>{let[t,r]=e;t.forEach((e=>{const t=M(e);E.prepend(t)})),d.src=r.avatar||c,_.textContent=r.name,h.textContent=r.about,C.value=r.name,U.value=r.about})).catch((e=>{console.log(e)})),N.addEventListener("click",(()=>{K(D),console.log(z)})),u.addEventListener("click",(()=>{var e,t;y.value=_.textContent,S.value=h.textContent,e=f,t={inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},[y,S].forEach((o=>{r(e,o,t)})),G(v)})),p.addEventListener("click",(()=>{K(v)})),m.addEventListener("click",(()=>{G(q)})),L.addEventListener("click",(()=>{K(q)})),f.addEventListener("submit",(function(e){e.preventDefault(),J.editUserInfo({name:y.value,about:S.value}).then((e=>{_.textContent=y.value,h.textContent=S.value,K(v)})).catch(console.error)})),g.addEventListener("submit",(function(e){e.preventDefault();const r=M({name:C.value,link:U.value});E.prepend(r),n(k,t),e.target.reset(),K(q)})),$.addEventListener("submit",(function(e){e.preventDefault(),J.editUserAvatar(A.value).then((e=>{d.src=e.avatar,K(j)})).catch(console.error)})),P.addEventListener("click",(()=>{G(j)})),I.addEventListener("click",(()=>{K(j)})),B.addEventListener("submit",(function(e){e.preventDefault(),J.deleteCard(H).then((()=>{O.remove(),K(x)})).catch(console.error)})),a(t)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBS1AsT0FDekIrQixFQUFXMUUsRUFBWSxJQUV4QmdFLE1BQU1DLFFBQVFDLE1BQ25CLElBNkNBL0QsRUFBa0JoQyxpQkFBaUIsU0FBUyxLQUMxQ2tHLEVBQVVyRSxFQUFZLElBRXhCRSxFQUF1Qi9CLGlCQUFpQixTQUFTLEtBQy9DdUcsRUFBVzFFLEVBQVksSUFHekJNLEVBQVduQyxpQkFBaUIsVUFsRDVCLFNBQTRCeUYsR0FDMUJBLEVBQUkyQixpQkFDSjFFLEVBQ0crQixXQUFXaEMsR0FDWGUsTUFBSyxLQUNKaEIsRUFBYTVELFNBQ2IySCxFQUFXckUsRUFBWSxJQUV4QjJELE1BQU1DLFFBQVFDLE1BQ25CLElBcUVBdkcsRUFBaUI1QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy1tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMtbWFpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLW1haW4vLi9zcmMvc2NyaXB0cy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMtbWFpbi8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLW1haW4vLi9zcmMvdXRpbHMvQXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zdWJtaXQtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3N1Ym1pdC1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yXCIsXG59O1xuXG5jb25zdCBzaG93SW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0RWwsIGVycm9yTXNnLCBjb25maWcpID0+IHtcbiAgY29uc3QgZXJyb3JNc2dJRCA9IGlucHV0RWwuaWQgKyBcIi1lcnJvclwiO1xuICBjb25zdCBlcnJvck1zZ0VsID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBlcnJvck1zZ0lEKTtcbiAgZXJyb3JNc2dFbC50ZXh0Q29udGVudCA9IGVycm9yTXNnO1xuICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQoY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG59O1xuXG5jb25zdCBoaWRlSW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0RWwsIGNvbmZpZykgPT4ge1xuICBjb25zdCBlcnJvck1zZ0lEID0gaW5wdXRFbC5pZCArIFwiLWVycm9yXCI7XG4gIGNvbnN0IGVycm9yTXNnRWwgPSBmb3JtRWwucXVlcnlTZWxlY3RvcihcIiNcIiArIGVycm9yTXNnSUQpO1xuICBlcnJvck1zZ0VsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbCwgaW5wdXRFbCwgY29uZmlnKSA9PiB7XG4gIGlmICghaW5wdXRFbC52YWxpZGl0eS52YWxpZCkge1xuICAgIHNob3dJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXRFbCwgaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZSwgY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0RWwsIGNvbmZpZyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcbiAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dCkgPT4gIWlucHV0LnZhbGlkaXR5LnZhbGlkKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUJ1dHRvblN0YXRlID0gKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKSA9PiB7XG4gIGlmIChoYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVCdXR0b24gPSAoYnV0dG9uRWxlbWVudCwgY29uZmlnKSA9PiB7XG4gIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0VmFsaWRhdGlvbiA9IChmb3JtRWwsIGlucHV0TGlzdCwgY29uZmlnKSA9PiB7XG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQsIGNvbmZpZyk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoZm9ybUVsLCBjb25maWcpID0+IHtcbiAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWwucXVlcnlTZWxlY3RvckFsbChjb25maWcuaW5wdXRTZWxlY3RvcikpO1xuICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbCwgaW5wdXRFbGVtZW50LCBjb25maWcpO1xuICAgICAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKGNvbmZpZykgPT4ge1xuICBjb25zdCBmb3JtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmZvcm1TZWxlY3Rvcik7XG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbCkgPT4ge1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1FbCwgY29uZmlnKTtcbiAgfSk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpO1xufSk7XG4iLCJpbXBvcnQge1xuICBlbmFibGVWYWxpZGF0aW9uLFxuICBzZXR0aW5ncyxcbiAgZGlzYWJsZUJ1dHRvbixcbiAgcmVzZXRWYWxpZGF0aW9uLFxufSBmcm9tIFwiLi4vc2NyaXB0cy92YWxpZGF0aW9uLmpzXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IGxvZ29TUkMgZnJvbSBcIi4uL2ltYWdlcy9sb2dvLnN2Z1wiO1xuaW1wb3J0IGF2YXRhclNSQyBmcm9tIFwiLi4vaW1hZ2VzL3Nwb3RzLWF2YXRhci1hbmQtY2FyZC1pbWFnZXMvYXZhdGFyLmpwZ1wiO1xuaW1wb3J0IHByb2ZpbGVJbWFnZVNyYyBmcm9tIFwiLi4vaW1hZ2VzL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBwbHVzSW1hZ2VTUkMgZnJvbSBcIi4uL2ltYWdlcy9wbHVzLnN2Z1wiO1xuaW1wb3J0IEFQSSBmcm9tIFwiLi4vdXRpbHMvQXBpLmpzXCI7XG5cbmNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2UtbG9nb1wiKTtcbmxvZ29JbWFnZS5zcmMgPSBsb2dvU1JDO1xuXG5jb25zdCBwcm9maWxlQXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlLWF2YXRhclwiKTtcbnByb2ZpbGVBdmF0YXIuc3JjID0gYXZhdGFyU1JDO1xuXG5jb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtcHJvZmlsZS1pbWFnZVwiKTtcbnByb2ZpbGVJbWFnZS5zcmMgPSBwcm9maWxlSW1hZ2VTcmM7XG5cbmNvbnN0IHBsdXNJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c0ltYWdlXCIpO1xucGx1c0ltYWdlLnNyYyA9IHBsdXNJbWFnZVNSQztcblxuY29uc3QgcHJvZmlsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuY29uc3QgY2FyZE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xuY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xuXG5jb25zdCBlZGl0UHJvZmlsZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtbW9kYWxcIik7XG5jb25zdCBlZGl0Rm9ybUVsZW1lbnQgPSBlZGl0UHJvZmlsZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBlZGl0UHJvZmlsZUNsb3NlQnV0dG9uID0gZWRpdFByb2ZpbGVNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIi5tb2RhbF9fY2xvc2UtYnV0dG9uXCJcbik7XG5jb25zdCBlZGl0TW9kYWxOYW1lSW5wdXQgPSBlZGl0UHJvZmlsZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2ZpbGUtbmFtZS1pbnB1dFwiXG4pO1xuY29uc3QgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCA9IGVkaXRQcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvcihcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXG4pO1xuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRlbXBsYXRlXCIpO1xuY29uc3QgY2FyZHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcblxuY29uc3QgY2FyZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1tb2RhbFwiKTtcbmNvbnN0IGNhcmRGb3JtID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBjYXJkU3VibWl0QnV0dG9uID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3N1Ym1pdC1idXR0b25cIik7XG5jb25zdCBjYXJkTW9kYWxDbG9zZUJ1dHRvbiA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idXR0b25cIik7XG5jb25zdCBjYXJkTmFtZUlucHV0ID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbmFtZS1pbnB1dFwiKTtcbmNvbnN0IGNhcmRMaW5rSW5wdXQgPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1saW5rLWlucHV0XCIpO1xuXG5jb25zdCBhdmF0YXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXZhdGFyLW1vZGFsXCIpO1xuY29uc3QgYXZhdGFyRm9ybSA9IGF2YXRhck1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBhdmF0YXJTdWJtaXRCdXR0b24gPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zdWJtaXQtYnV0dG9uXCIpO1xuY29uc3QgYXZhdGFyTW9kYWxDbG9zZUJ1dHRvbiA9IGF2YXRhck1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19jbG9zZS1idXR0b25cIlxuKTtcbmNvbnN0IGF2YXRhck1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXItYnRuXCIpO1xuY29uc3QgYXZhdGFyTGlua0lucHV0ID0gYXZhdGFyTW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWF2YXRhci1pbnB1dFwiKTtcblxuY29uc3QgZGVsZXRlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1tb2RhbFwiKTtcbmNvbnN0IGRlbGV0ZWZvcm0gPSBkZWxldGVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuXG5cbmNvbnN0IHByZXZpZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlldy1tb2RhbFwiKTtcbmNvbnN0IHByZXZpZXdNb2RhbEltYWdlRWwgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDYXB0aW9uRWwgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2FwdGlvblwiKTtcbmNvbnN0IHByZXZpZXdNb2RhbENsb3NlID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ1dHRvblwiKTtcblxubGV0IHNlbGVjdGVkQ2FyZDtcbmxldCBzZWxlY3RlZENhcmRJZDtcblxuY29uc3QgYXBpID0gbmV3IEFQSSh7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQtYXBpLmVuLnRyaXBsZXRlbi1zZXJ2aWNlcy5jb20vdjFcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiZWFhMDc5NDEtODVlOC00MTkxLWI1YzAtY2Y1ODM5NDAxYTc2XCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuYXBpXG4gIC5nZXRBcHBJbmZvKClcbiAgLnRoZW4oKFtjYXJkcywgdXNlcl0pID0+IHtcbiAgICBjYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGl0ZW0pO1xuICAgICAgY2FyZHNMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xuICAgIH0pO1xuICBcbiAgICBwcm9maWxlQXZhdGFyLnNyYyA9IHVzZXIuYXZhdGFyIHx8IGF2YXRhclNSQztcbiAgICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubmFtZTtcbiAgICBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB1c2VyLmFib3V0O1xuICAgIGNhcmROYW1lSW5wdXQudmFsdWUgPSB1c2VyLm5hbWU7XG4gICAgY2FyZExpbmtJbnB1dC52YWx1ZSA9IHVzZXIuYWJvdXQ7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUxpa2UgKGV2dCwgaWQpIHtcbiAgY29uc3QgaXNMaWtlZCA9IGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FyZF9fbGlrZS1idXR0b25fbGlrZWRcIik7XG4gIGFwaVxuICAgIC5jaGFuZ2VMaWtlU3RhdHVzKGlkLCAhaXNMaWtlZClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fbGlrZWRcIik7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG59XG5cbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUuY29udGVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gIGNvbnN0IGNhcmROYW1lRWwgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuICBjb25zdCBjYXJkSW1hZ2UgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xuICBjb25zdCBjYXJkTGlrZUJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XG4gIGNvbnN0IGNhcmRDbG9zZUJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fY2xvc2UtYnV0dG9uXCIpO1xuXG4gIGNhcmROYW1lRWwudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gIGNhcmRJbWFnZS5zcmMgPSBkYXRhLmxpbms7XG4gIGNhcmRJbWFnZS5hbHQgPSBkYXRhLm5hbWU7XG5cbiAgY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IGhhbmRsZUxpa2UoZXZ0LCBkYXRhLl9pZCkpO1xuXG4gIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChwcmV2aWV3TW9kYWwpO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuc3JjID0gZGF0YS5saW5rO1xuICAgIHByZXZpZXdNb2RhbENhcHRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICBwcmV2aWV3TW9kYWxJbWFnZUVsLmFsdCA9IGRhdGEubmFtZTtcbiAgfSk7XG5cbiAgY2FyZENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PlxuICAgIGhhbmRsZURlbGV0ZUNhcmQoY2FyZEVsZW1lbnQsIGRhdGEuX2lkKVxuICApO1xuXG4gIHJldHVybiBjYXJkRWxlbWVudDtcbn1cblxucHJldmlld01vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xvc2VNb2RhbChwcmV2aWV3TW9kYWwpO1xuICBjb25zb2xlLmxvZyhoYW5kbGVFc2NhcGUpO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRlbEVkaXRGb3JtU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgYXBpXG4gICAgLmVkaXRVc2VySW5mbyh7XG4gICAgICBuYW1lOiBlZGl0TW9kYWxOYW1lSW5wdXQudmFsdWUsXG4gICAgICBhYm91dDogZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZTtcbiAgICAgIHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICBjbG9zZU1vZGFsKGVkaXRQcm9maWxlTW9kYWwpO1xuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRDYXJkU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7IG5hbWU6IGNhcmROYW1lSW5wdXQudmFsdWUsIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUgfTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpbnB1dFZhbHVlcyk7XG4gIGNhcmRzTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbiAgZGlzYWJsZUJ1dHRvbihjYXJkU3VibWl0QnV0dG9uLCBzZXR0aW5ncyk7XG4gIGV2dC50YXJnZXQucmVzZXQoKTtcbiAgY2xvc2VNb2RhbChjYXJkTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBdmF0YXJTdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBhcGlcbiAgICAuZWRpdFVzZXJBdmF0YXIoYXZhdGFyTGlua0lucHV0LnZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBwcm9maWxlQXZhdGFyLnNyYyA9IGRhdGEuYXZhdGFyO1xuICAgICAgY2xvc2VNb2RhbChhdmF0YXJNb2RhbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGFwaVxuICAgIC5kZWxldGVDYXJkKHNlbGVjdGVkQ2FyZElkKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHNlbGVjdGVkQ2FyZC5yZW1vdmUoKTtcbiAgICAgIGNsb3NlTW9kYWwoZGVsZXRlTW9kYWwpO1xuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVDYXJkKGNhcmRFbGVtZW50LCBjYXJkSUQpIHtcbiAgc2VsZWN0ZWRDYXJkID0gY2FyZEVsZW1lbnQ7XG4gIHNlbGVjdGVkQ2FyZElkID0gY2FyZElEO1xuICBvcGVuTW9kYWwoZGVsZXRlTW9kYWwpO1xufVxuXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBlZGl0TW9kYWxOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlTmFtZS50ZXh0Q29udGVudDtcbiAgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgcmVzZXRWYWxpZGF0aW9uKFxuICAgIGVkaXRGb3JtRWxlbWVudCxcbiAgICBbZWRpdE1vZGFsTmFtZUlucHV0LCBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0XSxcbiAgICB7XG4gICAgICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgICAgIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yXCIsXG4gICAgfVxuICApO1xuICBvcGVuTW9kYWwoZWRpdFByb2ZpbGVNb2RhbCk7XG59KTtcbmVkaXRQcm9maWxlQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xvc2VNb2RhbChlZGl0UHJvZmlsZU1vZGFsKTtcbn0pO1xuY2FyZE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG9wZW5Nb2RhbChjYXJkTW9kYWwpO1xufSk7XG5jYXJkTW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZU1vZGFsKGNhcmRNb2RhbCk7XG59KTtcbmVkaXRGb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRlbEVkaXRGb3JtU3VibWl0KTtcbmNhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQWRkQ2FyZFN1Ym1pdCk7XG5hdmF0YXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQXZhdGFyU3VibWl0KTtcblxuYXZhdGFyTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3Blbk1vZGFsKGF2YXRhck1vZGFsKTtcbn0pO1xuYXZhdGFyTW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZU1vZGFsKGF2YXRhck1vZGFsKTtcbn0pO1xuXG5kZWxldGVmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRGVsZXRlU3VibWl0KTtcblxuZnVuY3Rpb24gaGFuZGxlRXNjYXBlKGV2dCkge1xuICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwubW9kYWxfb3BlbmVkXCIpO1xuICAgIGlmIChvcGVuTW9kYWwpIGNsb3NlTW9kYWwob3Blbk1vZGFsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVPdmVybGF5Q2xpY2soZXZ0KSB7XG4gIGlmICghZXZ0LnRhcmdldC5jbG9zZXN0KFwiLm1vZGFsX19jb250ZW50XCIpKSB7XG4gICAgY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC5tb2RhbF9vcGVuZWRcIik7XG4gICAgaWYgKG9wZW5Nb2RhbCkgY2xvc2VNb2RhbChvcGVuTW9kYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlT3ZlcmxheUNsaWNrKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xuICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlT3ZlcmxheUNsaWNrKTtcbn1cblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7XG4iLCJjbGFzcyBBUEkge1xuICAgIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVycyB9KSB7XG4gICAgICB0aGlzLl9iYXNlVXJsID0gYmFzZVVybDtcbiAgICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xufVxuXG5nZXRBcHBJbmZvKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbdGhpcy5nZXRJbml0aWFsQ2FyZHMoKSwgdGhpcy5nZXRVc2VySW5mbygpXSk7XG59XG5cbmdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5Qcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbn0pO1xufVxuZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzXG4gICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgICB9KVxuICAgICAgfVxuXG5lZGl0VXNlckluZm8oeyBuYW1lLCBhYm91dCB9KSBcbntcbiAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZSxcbiAgICAgIGFib3V0LFxuICAgIH0pLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIH0pO1xufVxuZWRpdFVzZXJBdmF0YXIoeyBhdmF0YXIgfSkgXG57XG4gIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBhdmF0YXJcbiAgICB9KSxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9KTtcbn1cblxuZWRpdFVzZXJBdmF0YXIoIGF2YXRhciApIFxue1xuICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYXZhdGFyXG4gICAgfSksXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmIChyZXMub2spIHtcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfSk7XG59XG5cbmRlbGV0ZUNhcmQoY2FyZElkKSBcbntcbiAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9KTtcbn1cblxuY2hhbmdlTGlrZVN0YXR1cyhjYXJkSWQsIGlzTGlrZWQpIFxue1xuICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9L2xpa2VzYCwge1xuICAgIG1ldGhvZDogaXNMaWtlZCA/IFwiREVMRVRFXCIgOiBcIlBVVFwiLFxuICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmIChyZXMub2spIHtcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH1cbiAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfSk7XG59XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQVBJOyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwic2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImhpZGVJbnB1dEVycm9yIiwiZm9ybUVsIiwiaW5wdXRFbCIsImNvbmZpZyIsImVycm9yTXNnSUQiLCJpZCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiaW5wdXRMaXN0IiwiYnV0dG9uRWxlbWVudCIsInNvbWUiLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJoYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlQnV0dG9uIiwiZGlzYWJsZWQiLCJhZGQiLCJlbmFibGVWYWxpZGF0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNldEV2ZW50TGlzdGVuZXJzIiwiQXJyYXkiLCJmcm9tIiwiaW5wdXRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrSW5wdXRWYWxpZGl0eSIsInNob3dJbnB1dEVycm9yIiwiZXJyb3JNc2ciLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwibG9nb1NSQyIsInByb2ZpbGVBdmF0YXIiLCJhdmF0YXJTUkMiLCJwcm9maWxlSW1hZ2VTcmMiLCJwbHVzSW1hZ2VTUkMiLCJwcm9maWxlRWRpdEJ1dHRvbiIsImNhcmRNb2RhbEJ1dHRvbiIsInByb2ZpbGVOYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwiZWRpdFByb2ZpbGVNb2RhbCIsImVkaXRGb3JtRWxlbWVudCIsImVkaXRQcm9maWxlQ2xvc2VCdXR0b24iLCJlZGl0TW9kYWxOYW1lSW5wdXQiLCJlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0IiwiY2FyZFRlbXBsYXRlIiwiY2FyZHNMaXN0IiwiY2FyZE1vZGFsIiwiY2FyZEZvcm0iLCJjYXJkU3VibWl0QnV0dG9uIiwiY2FyZE1vZGFsQ2xvc2VCdXR0b24iLCJjYXJkTmFtZUlucHV0IiwiY2FyZExpbmtJbnB1dCIsImF2YXRhck1vZGFsIiwiYXZhdGFyRm9ybSIsImF2YXRhck1vZGFsQ2xvc2VCdXR0b24iLCJhdmF0YXJNb2RhbEJ1dHRvbiIsImF2YXRhckxpbmtJbnB1dCIsImRlbGV0ZU1vZGFsIiwiZGVsZXRlZm9ybSIsInByZXZpZXdNb2RhbCIsInByZXZpZXdNb2RhbEltYWdlRWwiLCJwcmV2aWV3TW9kYWxDYXB0aW9uRWwiLCJwcmV2aWV3TW9kYWxDbG9zZSIsInNlbGVjdGVkQ2FyZCIsInNlbGVjdGVkQ2FyZElkIiwiYXBpIiwiY29uc3RydWN0b3IiLCJfcmVmIiwiYmFzZVVybCIsImhlYWRlcnMiLCJ0aGlzIiwiX2Jhc2VVcmwiLCJfaGVhZGVycyIsImdldEFwcEluZm8iLCJQcm9taXNlIiwiYWxsIiwiZ2V0SW5pdGlhbENhcmRzIiwiZ2V0VXNlckluZm8iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJyZWplY3QiLCJzdGF0dXMiLCJlZGl0VXNlckluZm8iLCJfcmVmMiIsIm5hbWUiLCJhYm91dCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZWRpdFVzZXJBdmF0YXIiLCJfcmVmMyIsImF2YXRhciIsImRlbGV0ZUNhcmQiLCJjYXJkSWQiLCJjaGFuZ2VMaWtlU3RhdHVzIiwiaXNMaWtlZCIsImF1dGhvcml6YXRpb24iLCJnZXRDYXJkRWxlbWVudCIsImRhdGEiLCJjYXJkRWxlbWVudCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJjYXJkTmFtZUVsIiwiY2FyZEltYWdlIiwiY2FyZExpa2VCdXR0b24iLCJjYXJkQ2xvc2VCdXR0b24iLCJsaW5rIiwiYWx0IiwiZXZ0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUxpa2UiLCJfaWQiLCJvcGVuTW9kYWwiLCJjYXJkSUQiLCJoYW5kbGVEZWxldGVDYXJkIiwiaGFuZGxlRXNjYXBlIiwia2V5IiwiY2xvc2VNb2RhbCIsImhhbmRsZU92ZXJsYXlDbGljayIsImNsb3Nlc3QiLCJtb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYXJkcyIsInVzZXIiLCJpdGVtIiwicHJlcGVuZCIsInZhbHVlIiwiZXJyIiwibG9nIiwicmVzZXRWYWxpZGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=