const inputBox = document.getElementById("inpBox");
const translateButton = document.getElementById("btn-translate");
const outputDiv = document.getElementById("output");

const sendRequest = (text) =>{
    return "https://api.funtranslations.com/translate/ferb-latin.json"+ "?text="+text;
}

translateButton.addEventListener("click", ()=> {
    fetch(sendRequest(inputBox.value)).then(response => { return response.json()}).then(result => {
        outputDiv.innerText = result.contents.translated
    }).catch(err => console.log(err))
})