export function setButtonText(submitBtn, isLoading, loadingText = "Saving...", defaultText = "Save"){
    if (isLoading){
        submitBtn.textContent = loadingText;
        submitBtn.setAttribute("disabled", true);
    }
    else {
        submitBtn.textContent = defaultText;
        submitBtn.removeAttribute("disabled");
    }
}