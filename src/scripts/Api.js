class API {
    constructor() {
}

getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
        headers: {
          authorization: "eaa07941-85e8-4191-b5c0-cf5839401a76"
        }
      })
        .then(res => res.json())
}
}

export default API;