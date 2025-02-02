!function(){"use strict";var e="";const t={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-button",inactiveButtonClass:"modal__submit-button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},r=(e,t,r)=>{const o=t.id+"-error";e.querySelector("#"+o).textContent="",t.classList.remove(r.inputErrorClass)},o=(e,t,r)=>{(e=>e.some((e=>!e.validity.valid)))(e)?n(t,r):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))},n=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},a=e=>{document.querySelectorAll(e.formSelector).forEach((t=>{((e,t)=>{const n=Array.from(e.querySelectorAll(t.inputSelector)),a=e.querySelector(t.submitButtonSelector);o(n,a,t),n.forEach((s=>{s.addEventListener("input",(function(){((e,t,o)=>{t.validity.valid?r(e,t,o):((e,t,r,o)=>{const n=t.id+"-error";e.querySelector("#"+n).textContent=r,t.classList.add(o.inputErrorClass)})(e,t,t.validationMessage,o)})(e,s,t),o(n,a,t)}))}))})(t,e)}))};document.addEventListener("DOMContentLoaded",(()=>{a(t)}));var s=e+"images/logo.svg",c=e+"2fc47fd8e9a9bcd9612f.jpg",l=e+"images/pencil.svg",i=e+"images/plus.svg";document.getElementById("image-logo").src=s;const d=document.getElementById("profile-avatar");d.src=c,document.getElementById("edit-profile-image").src=l,document.getElementById("plusImage").src=i;const u=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),_=document.querySelector(".profile__name"),h=document.querySelector(".profile__description"),v=document.querySelector("#edit-profile-modal"),f=v.querySelector(".modal__form"),p=v.querySelector(".modal__close-button"),y=v.querySelector("#profile-name-input"),S=v.querySelector("#profile-description-input"),b=document.querySelector("#card-template"),E=document.querySelector(".cards__list"),q=document.querySelector("#add-card-modal"),g=q.querySelector(".modal__form"),k=q.querySelector(".modal__submit-button"),L=q.querySelector(".modal__close-button"),C=q.querySelector("#add-card-name-input"),U=q.querySelector("#add-card-link-input"),j=document.querySelector("#avatar-modal"),$=j.querySelector(".modal__form"),I=(j.querySelector(".modal__submit-button"),j.querySelector(".modal__close-button")),P=document.querySelector(".profile__avatar-btn"),A=j.querySelector("#profile-avatar-input"),B=document.querySelector("#delete-modal"),x=B.querySelector(".modal__form"),D=document.querySelector("#preview-modal"),T=D.querySelector(".modal__image"),w=D.querySelector(".modal__caption"),N=D.querySelector(".modal__close-button");let O,H;const J=new class{constructor(e){let{baseUrl:t,headers:r}=e;this._baseUrl=t,this._headers=r}getAppInfo(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}getInitialCards(){return fetch(`${this._baseUrl}/cards`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}getUserInfo(){return fetch(`${this._baseUrl}/users/me`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserInfo(e){let{name:t,about:r}=e;return fetch(`${this._baseUrl}/users/me`,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserAvatar(e){let{avatar:t}=e;return fetch(`${this._baseUrl}/users/me/avatar`,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserAvatar(e){return fetch(`${this._baseUrl}/users/me/avatar`,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}deleteCard(e){return fetch(`${this._baseUrl}/cards/${e}`,{method:"DELETE",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}changeLikeStatus(e,t){return fetch(`${this._baseUrl}/cards/${e}/likes`,{method:t?"DELETE":"PUT",headers:this._headers}).then((e=>e.ok?e.json():Promise.reject(`Error: ${e.status}`)))}}({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"eaa07941-85e8-4191-b5c0-cf5839401a76","Content-Type":"application/json"}});function M(e){const t=b.content.querySelector(".card").cloneNode(!0),r=t.querySelector(".card__title"),o=t.querySelector(".card__image"),n=t.querySelector(".card__like-button"),a=t.querySelector(".card__close-button");return r.textContent=e.name,o.src=e.link,o.alt=e.name,n.addEventListener("click",(t=>function(e,t){const r=e.target.classList.contains("card__like-button_liked");J.changeLikeStatus(t,!r).then((t=>{e.target.classList.toggle("card__like-button_liked")})).catch(console.error)}(t,e._id))),o.addEventListener("click",(()=>{G(D),T.src=e.link,w.textContent=e.name,T.alt=e.name})),a.addEventListener("click",(r=>function(e,t){O=e,H=t,G(B)}(t,e._id))),t}function z(e){if("Escape"===e.key){const e=document.querySelector(".modal.modal_opened");e&&K(e)}}function F(e){if(!e.target.closest(".modal__content")){const e=document.querySelector(".modal.modal_opened");e&&K(e)}}function G(e){e.classList.add("modal_opened"),document.addEventListener("keydown",z),e.addEventListener("click",F)}function K(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",z),e.removeEventListener("click",F)}J.getAppInfo().then((e=>{let[t,r]=e;t.forEach((e=>{const t=M(e);E.prepend(t)})),d.src=r.avatar,C.value=r.name,U.value=r.about})).catch((e=>{console.log(e)})),N.addEventListener("click",(()=>{K(D),console.log(z)})),u.addEventListener("click",(()=>{var e,t;y.value=_.textContent,S.value=h.textContent,e=f,t={inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},[y,S].forEach((o=>{r(e,o,t)})),G(v)})),p.addEventListener("click",(()=>{K(v)})),m.addEventListener("click",(()=>{G(q)})),L.addEventListener("click",(()=>{K(q)})),f.addEventListener("submit",(function(e){e.preventDefault(),J.editUserInfo({name:y.value,about:S.value}).then((e=>{_.textContent=y.value,h.textContent=S.value,K(v)})).catch(console.error)})),g.addEventListener("submit",(function(e){e.preventDefault();const r=M({name:C.value,link:U.value});E.prepend(r),n(k,t),e.target.reset(),K(q)})),$.addEventListener("submit",(function(e){e.preventDefault(),J.editUserAvatar(A.value).then((e=>{d.src=e.avatar,K(j)})).catch(console.error)})),P.addEventListener("click",(()=>{G(j)})),I.addEventListener("click",(()=>{K(j)})),x.addEventListener("submit",(function(e){e.preventDefault(),J.deleteCard(H).then((()=>{O.remove(),K(B)})).catch(console.error)})),a(t)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEMsaUJBQWlCLFNBQVMsS0FDMUNrRyxFQUFVckUsRUFBWSxJQUV4QkUsRUFBdUIvQixpQkFBaUIsU0FBUyxLQUMvQ3VHLEVBQVcxRSxFQUFZLElBR3pCTSxFQUFXbkMsaUJBQWlCLFVBbEQ1QixTQUE0QnlGLEdBQzFCQSxFQUFJMkIsaUJBQ0oxRSxFQUNHK0IsV0FBV2hDLEdBQ1hlLE1BQUssS0FDSmhCLEVBQWE1RCxTQUNiMkgsRUFBV3JFLEVBQVksSUFFeEIyRCxNQUFNQyxRQUFRQyxNQUNuQixJQXFFQXZHLEVBQWlCNUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMtbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLW1haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy1tYWluLy4vc3JjL3NjcmlwdHMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLW1haW4vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy1tYWluLy4vc3JjL3V0aWxzL0FwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fc3VibWl0LWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zdWJtaXQtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvclwiLFxufTtcblxuY29uc3Qgc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dEVsLCBlcnJvck1zZywgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVycm9yTXNnSUQgPSBpbnB1dEVsLmlkICsgXCItZXJyb3JcIjtcbiAgY29uc3QgZXJyb3JNc2dFbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZXJyb3JNc2dJRCk7XG4gIGVycm9yTXNnRWwudGV4dENvbnRlbnQgPSBlcnJvck1zZztcbiAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgaGlkZUlucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dEVsLCBjb25maWcpID0+IHtcbiAgY29uc3QgZXJyb3JNc2dJRCA9IGlucHV0RWwuaWQgKyBcIi1lcnJvclwiO1xuICBjb25zdCBlcnJvck1zZ0VsID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBlcnJvck1zZ0lEKTtcbiAgZXJyb3JNc2dFbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGNoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWwsIGlucHV0RWwsIGNvbmZpZykgPT4ge1xuICBpZiAoIWlucHV0RWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93SW5wdXRFcnJvcihmb3JtRWwsIGlucHV0RWwsIGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2UsIGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZUlucHV0RXJyb3IoZm9ybUVsLCBpbnB1dEVsLCBjb25maWcpO1xuICB9XG59O1xuXG5jb25zdCBoYXNJbnZhbGlkSW5wdXQgPSAoaW5wdXRMaXN0KSA9PiB7XG4gIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXQpID0+ICFpbnB1dC52YWxpZGl0eS52YWxpZCk7XG59O1xuXG5jb25zdCB0b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlQnV0dG9uID0gKGJ1dHRvbkVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldFZhbGlkYXRpb24gPSAoZm9ybUVsLCBpbnB1dExpc3QsIGNvbmZpZykgPT4ge1xuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0LCBjb25maWcpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKGZvcm1FbCwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmlucHV0U2VsZWN0b3IpKTtcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWwsIGlucHV0RWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChjb25maWcpID0+IHtcbiAgY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWwpID0+IHtcbiAgICBzZXRFdmVudExpc3RlbmVycyhmb3JtRWwsIGNvbmZpZyk7XG4gIH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBlbmFibGVWYWxpZGF0aW9uKHNldHRpbmdzKTtcbn0pO1xuIiwiaW1wb3J0IHtcbiAgZW5hYmxlVmFsaWRhdGlvbixcbiAgc2V0dGluZ3MsXG4gIGRpc2FibGVCdXR0b24sXG4gIHJlc2V0VmFsaWRhdGlvbixcbn0gZnJvbSBcIi4uL3NjcmlwdHMvdmFsaWRhdGlvbi5qc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBsb2dvU1JDIGZyb20gXCIuLi9pbWFnZXMvbG9nby5zdmdcIjtcbmltcG9ydCBhdmF0YXJTUkMgZnJvbSBcIi4uL2ltYWdlcy9zcG90cy1hdmF0YXItYW5kLWNhcmQtaW1hZ2VzL2F2YXRhci5qcGdcIjtcbmltcG9ydCBwcm9maWxlSW1hZ2VTcmMgZnJvbSBcIi4uL2ltYWdlcy9wZW5jaWwuc3ZnXCI7XG5pbXBvcnQgcGx1c0ltYWdlU1JDIGZyb20gXCIuLi9pbWFnZXMvcGx1cy5zdmdcIjtcbmltcG9ydCBBUEkgZnJvbSBcIi4uL3V0aWxzL0FwaS5qc1wiO1xuXG5jb25zdCBsb2dvSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWxvZ29cIik7XG5sb2dvSW1hZ2Uuc3JjID0gbG9nb1NSQztcblxuY29uc3QgcHJvZmlsZUF2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZS1hdmF0YXJcIik7XG5wcm9maWxlQXZhdGFyLnNyYyA9IGF2YXRhclNSQztcblxuY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXByb2ZpbGUtaW1hZ2VcIik7XG5wcm9maWxlSW1hZ2Uuc3JjID0gcHJvZmlsZUltYWdlU3JjO1xuXG5jb25zdCBwbHVzSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXNJbWFnZVwiKTtcbnBsdXNJbWFnZS5zcmMgPSBwbHVzSW1hZ2VTUkM7XG5cbmNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmNvbnN0IGNhcmRNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiKTtcblxuY29uc3QgZWRpdFByb2ZpbGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLW1vZGFsXCIpO1xuY29uc3QgZWRpdEZvcm1FbGVtZW50ID0gZWRpdFByb2ZpbGVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuY29uc3QgZWRpdFByb2ZpbGVDbG9zZUJ1dHRvbiA9IGVkaXRQcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvcihcbiAgXCIubW9kYWxfX2Nsb3NlLWJ1dHRvblwiXG4pO1xuY29uc3QgZWRpdE1vZGFsTmFtZUlucHV0ID0gZWRpdFByb2ZpbGVNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9maWxlLW5hbWUtaW5wdXRcIlxuKTtcbmNvbnN0IGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQgPSBlZGl0UHJvZmlsZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2ZpbGUtZGVzY3JpcHRpb24taW5wdXRcIlxuKTtcbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKTtcbmNvbnN0IGNhcmRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpc3RcIik7XG5cbmNvbnN0IGNhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbW9kYWxcIik7XG5jb25zdCBjYXJkRm9ybSA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuY29uc3QgY2FyZFN1Ym1pdEJ1dHRvbiA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zdWJtaXQtYnV0dG9uXCIpO1xuY29uc3QgY2FyZE1vZGFsQ2xvc2VCdXR0b24gPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2UtYnV0dG9uXCIpO1xuY29uc3QgY2FyZE5hbWVJbnB1dCA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLW5hbWUtaW5wdXRcIik7XG5jb25zdCBjYXJkTGlua0lucHV0ID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbGluay1pbnB1dFwiKTtcblxuY29uc3QgYXZhdGFyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F2YXRhci1tb2RhbFwiKTtcbmNvbnN0IGF2YXRhckZvcm0gPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuY29uc3QgYXZhdGFyU3VibWl0QnV0dG9uID0gYXZhdGFyTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc3VibWl0LWJ1dHRvblwiKTtcbmNvbnN0IGF2YXRhck1vZGFsQ2xvc2VCdXR0b24gPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIi5tb2RhbF9fY2xvc2UtYnV0dG9uXCJcbik7XG5jb25zdCBhdmF0YXJNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyLWJ0blwiKTtcbmNvbnN0IGF2YXRhckxpbmtJbnB1dCA9IGF2YXRhck1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1hdmF0YXItaW5wdXRcIik7XG5cbmNvbnN0IGRlbGV0ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtbW9kYWxcIik7XG5jb25zdCBkZWxldGVmb3JtID0gZGVsZXRlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcblxuXG5jb25zdCBwcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxJbWFnZUVsID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xuY29uc3QgcHJldmlld01vZGFsQ2FwdGlvbkVsID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDbG9zZSA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idXR0b25cIik7XG5cbmxldCBzZWxlY3RlZENhcmQ7XG5sZXQgc2VsZWN0ZWRDYXJkSWQ7XG5cbmNvbnN0IGFwaSA9IG5ldyBBUEkoe1xuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLWFwaS5lbi50cmlwbGV0ZW4tc2VydmljZXMuY29tL3YxXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcImVhYTA3OTQxLTg1ZTgtNDE5MS1iNWMwLWNmNTgzOTQwMWE3NlwiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cbmFwaVxuICAuZ2V0QXBwSW5mbygpXG4gIC50aGVuKChbY2FyZHMsIHVzZXJzXSkgPT4ge1xuICAgIGNhcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZ2V0Q2FyZEVsZW1lbnQoaXRlbSk7XG4gICAgICBjYXJkc0xpc3QucHJlcGVuZChjYXJkRWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHByb2ZpbGVBdmF0YXIuc3JjID0gdXNlcnMuYXZhdGFyO1xuICAgIGNhcmROYW1lSW5wdXQudmFsdWUgPSB1c2Vycy5uYW1lO1xuICAgIGNhcmRMaW5rSW5wdXQudmFsdWUgPSB1c2Vycy5hYm91dDtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9KTtcblxuZnVuY3Rpb24gaGFuZGxlTGlrZSAoZXZ0LCBpZCkge1xuICBjb25zdCBpc0xpa2VkID0gZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgYXBpXG4gICAgLmNoYW5nZUxpa2VTdGF0dXMoaWQsICFpc0xpa2VkKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FyZEVsZW1lbnQoZGF0YSkge1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRUZW1wbGF0ZS5jb250ZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgY29uc3QgY2FyZE5hbWVFbCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XG4gIGNvbnN0IGNhcmRJbWFnZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gIGNvbnN0IGNhcmRMaWtlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgY29uc3QgY2FyZENsb3NlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19jbG9zZS1idXR0b25cIik7XG5cbiAgY2FyZE5hbWVFbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgY2FyZEltYWdlLnNyYyA9IGRhdGEubGluaztcbiAgY2FyZEltYWdlLmFsdCA9IGRhdGEubmFtZTtcblxuICBjYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4gaGFuZGxlTGlrZShldnQsIGRhdGEuX2lkKSk7XG5cbiAgY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHByZXZpZXdNb2RhbCk7XG4gICAgcHJldmlld01vZGFsSW1hZ2VFbC5zcmMgPSBkYXRhLmxpbms7XG4gICAgcHJldmlld01vZGFsQ2FwdGlvbkVsLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuYWx0ID0gZGF0YS5uYW1lO1xuICB9KTtcblxuICBjYXJkQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+XG4gICAgaGFuZGxlRGVsZXRlQ2FyZChjYXJkRWxlbWVudCwgZGF0YS5faWQpXG4gICk7XG5cbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xufVxuXG5wcmV2aWV3TW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZU1vZGFsKHByZXZpZXdNb2RhbCk7XG4gIGNvbnNvbGUubG9nKGhhbmRsZUVzY2FwZSk7XG59KTtcblxuZnVuY3Rpb24gaGFuZGVsRWRpdEZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBhcGlcbiAgICAuZWRpdFVzZXJJbmZvKHtcbiAgICAgIG5hbWU6IGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZSxcbiAgICAgIGFib3V0OiBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gZWRpdE1vZGFsTmFtZUlucHV0LnZhbHVlO1xuICAgICAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIGNsb3NlTW9kYWwoZWRpdFByb2ZpbGVNb2RhbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZENhcmRTdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dFZhbHVlcyA9IHsgbmFtZTogY2FyZE5hbWVJbnB1dC52YWx1ZSwgbGluazogY2FyZExpbmtJbnB1dC52YWx1ZSB9O1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGlucHV0VmFsdWVzKTtcbiAgY2FyZHNMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xuICBkaXNhYmxlQnV0dG9uKGNhcmRTdWJtaXRCdXR0b24sIHNldHRpbmdzKTtcbiAgZXZ0LnRhcmdldC5yZXNldCgpO1xuICBjbG9zZU1vZGFsKGNhcmRNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUF2YXRhclN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGFwaVxuICAgIC5lZGl0VXNlckF2YXRhcihhdmF0YXJMaW5rSW5wdXQudmFsdWUpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHByb2ZpbGVBdmF0YXIuc3JjID0gZGF0YS5hdmF0YXI7XG4gICAgICBjbG9zZU1vZGFsKGF2YXRhck1vZGFsKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgYXBpXG4gICAgLmRlbGV0ZUNhcmQoc2VsZWN0ZWRDYXJkSWQpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgc2VsZWN0ZWRDYXJkLnJlbW92ZSgpO1xuICAgICAgY2xvc2VNb2RhbChkZWxldGVNb2RhbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNhcmQoY2FyZEVsZW1lbnQsIGNhcmRJRCkge1xuICBzZWxlY3RlZENhcmQgPSBjYXJkRWxlbWVudDtcbiAgc2VsZWN0ZWRDYXJkSWQgPSBjYXJkSUQ7XG4gIG9wZW5Nb2RhbChkZWxldGVNb2RhbCk7XG59XG5cbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVOYW1lLnRleHRDb250ZW50O1xuICBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICByZXNldFZhbGlkYXRpb24oXG4gICAgZWRpdEZvcm1FbGVtZW50LFxuICAgIFtlZGl0TW9kYWxOYW1lSW5wdXQsIGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXRdLFxuICAgIHtcbiAgICAgIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxuICAgICAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JcIixcbiAgICB9XG4gICk7XG4gIG9wZW5Nb2RhbChlZGl0UHJvZmlsZU1vZGFsKTtcbn0pO1xuZWRpdFByb2ZpbGVDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZU1vZGFsKGVkaXRQcm9maWxlTW9kYWwpO1xufSk7XG5jYXJkTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3Blbk1vZGFsKGNhcmRNb2RhbCk7XG59KTtcbmNhcmRNb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWwoY2FyZE1vZGFsKTtcbn0pO1xuZWRpdEZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGVsRWRpdEZvcm1TdWJtaXQpO1xuY2FyZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVBZGRDYXJkU3VibWl0KTtcbmF2YXRhckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVBdmF0YXJTdWJtaXQpO1xuXG5hdmF0YXJNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuTW9kYWwoYXZhdGFyTW9kYWwpO1xufSk7XG5hdmF0YXJNb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWwoYXZhdGFyTW9kYWwpO1xufSk7XG5cbmRlbGV0ZWZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVEZWxldGVTdWJtaXQpO1xuXG5mdW5jdGlvbiBoYW5kbGVFc2NhcGUoZXZ0KSB7XG4gIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC5tb2RhbF9vcGVuZWRcIik7XG4gICAgaWYgKG9wZW5Nb2RhbCkgY2xvc2VNb2RhbChvcGVuTW9kYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU92ZXJsYXlDbGljayhldnQpIHtcbiAgaWYgKCFldnQudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWxfX2NvbnRlbnRcIikpIHtcbiAgICBjb25zdCBvcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLm1vZGFsX29wZW5lZFwiKTtcbiAgICBpZiAob3Blbk1vZGFsKSBjbG9zZU1vZGFsKG9wZW5Nb2RhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdmVybGF5Q2xpY2spO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG4gIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdmVybGF5Q2xpY2spO1xufVxuXG5lbmFibGVWYWxpZGF0aW9uKHNldHRpbmdzKTtcbiIsImNsYXNzIEFQSSB7XG4gICAgY29uc3RydWN0b3IoeyBiYXNlVXJsLCBoZWFkZXJzIH0pIHtcbiAgICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xuICAgICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG59XG5cbmdldEFwcEluZm8oKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFt0aGlzLmdldEluaXRpYWxDYXJkcygpLCB0aGlzLmdldFVzZXJJbmZvKCldKTtcbn1cblxuZ2V0SW5pdGlhbENhcmRzKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbn1cblByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xufSk7XG59XG5nZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbmVkaXRVc2VySW5mbyh7IG5hbWUsIGFib3V0IH0pIFxue1xuICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lLFxuICAgICAgYWJvdXQsXG4gICAgfSksXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmIChyZXMub2spIHtcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfSk7XG59XG5lZGl0VXNlckF2YXRhcih7IGF2YXRhciB9KSBcbntcbiAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGF2YXRhclxuICAgIH0pLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIH0pO1xufVxuXG5lZGl0VXNlckF2YXRhciggYXZhdGFyICkgXG57XG4gIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBhdmF0YXJcbiAgICB9KSxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9KTtcbn1cblxuZGVsZXRlQ2FyZChjYXJkSWQpIFxue1xuICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIH0pO1xufVxuXG5jaGFuZ2VMaWtlU3RhdHVzKGNhcmRJZCwgaXNMaWtlZCkgXG57XG4gIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XG4gICAgbWV0aG9kOiBpc0xpa2VkID8gXCJERUxFVEVcIiA6IFwiUFVUXCIsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfVxuICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9KTtcbn1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBUEk7Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJzZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaGlkZUlucHV0RXJyb3IiLCJmb3JtRWwiLCJpbnB1dEVsIiwiY29uZmlnIiwiZXJyb3JNc2dJRCIsImlkIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dExpc3QiLCJidXR0b25FbGVtZW50Iiwic29tZSIsImlucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImhhc0ludmFsaWRJbnB1dCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlZCIsImFkZCIsImVuYWJsZVZhbGlkYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJBcnJheSIsImZyb20iLCJpbnB1dEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tJbnB1dFZhbGlkaXR5Iiwic2hvd0lucHV0RXJyb3IiLCJlcnJvck1zZyIsInZhbGlkYXRpb25NZXNzYWdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJsb2dvU1JDIiwicHJvZmlsZUF2YXRhciIsImF2YXRhclNSQyIsInByb2ZpbGVJbWFnZVNyYyIsInBsdXNJbWFnZVNSQyIsInByb2ZpbGVFZGl0QnV0dG9uIiwiY2FyZE1vZGFsQnV0dG9uIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJlZGl0UHJvZmlsZU1vZGFsIiwiZWRpdEZvcm1FbGVtZW50IiwiZWRpdFByb2ZpbGVDbG9zZUJ1dHRvbiIsImVkaXRNb2RhbE5hbWVJbnB1dCIsImVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQiLCJjYXJkVGVtcGxhdGUiLCJjYXJkc0xpc3QiLCJjYXJkTW9kYWwiLCJjYXJkRm9ybSIsImNhcmRTdWJtaXRCdXR0b24iLCJjYXJkTW9kYWxDbG9zZUJ1dHRvbiIsImNhcmROYW1lSW5wdXQiLCJjYXJkTGlua0lucHV0IiwiYXZhdGFyTW9kYWwiLCJhdmF0YXJGb3JtIiwiYXZhdGFyTW9kYWxDbG9zZUJ1dHRvbiIsImF2YXRhck1vZGFsQnV0dG9uIiwiYXZhdGFyTGlua0lucHV0IiwiZGVsZXRlTW9kYWwiLCJkZWxldGVmb3JtIiwicHJldmlld01vZGFsIiwicHJldmlld01vZGFsSW1hZ2VFbCIsInByZXZpZXdNb2RhbENhcHRpb25FbCIsInByZXZpZXdNb2RhbENsb3NlIiwic2VsZWN0ZWRDYXJkIiwic2VsZWN0ZWRDYXJkSWQiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIl9yZWYiLCJiYXNlVXJsIiwiaGVhZGVycyIsInRoaXMiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwiZ2V0QXBwSW5mbyIsIlByb21pc2UiLCJhbGwiLCJnZXRJbml0aWFsQ2FyZHMiLCJnZXRVc2VySW5mbyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsInJlamVjdCIsInN0YXR1cyIsImVkaXRVc2VySW5mbyIsIl9yZWYyIiwibmFtZSIsImFib3V0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlZGl0VXNlckF2YXRhciIsIl9yZWYzIiwiYXZhdGFyIiwiZGVsZXRlQ2FyZCIsImNhcmRJZCIsImNoYW5nZUxpa2VTdGF0dXMiLCJpc0xpa2VkIiwiYXV0aG9yaXphdGlvbiIsImdldENhcmRFbGVtZW50IiwiZGF0YSIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsImNhcmROYW1lRWwiLCJjYXJkSW1hZ2UiLCJjYXJkTGlrZUJ1dHRvbiIsImNhcmRDbG9zZUJ1dHRvbiIsImxpbmsiLCJhbHQiLCJldnQiLCJ0YXJnZXQiLCJjb250YWlucyIsInRvZ2dsZSIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlTGlrZSIsIl9pZCIsIm9wZW5Nb2RhbCIsImNhcmRJRCIsImhhbmRsZURlbGV0ZUNhcmQiLCJoYW5kbGVFc2NhcGUiLCJrZXkiLCJjbG9zZU1vZGFsIiwiaGFuZGxlT3ZlcmxheUNsaWNrIiwiY2xvc2VzdCIsIm1vZGFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhcmRzIiwidXNlcnMiLCJpdGVtIiwicHJlcGVuZCIsInZhbHVlIiwiZXJyIiwibG9nIiwicmVzZXRWYWxpZGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=