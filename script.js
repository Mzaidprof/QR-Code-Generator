const button = document.querySelector("#btn");
const qrimage = document.querySelector("#qrimg");
const imgbox = document.querySelector("#imgbox");
const input = document.querySelector("#input");

function GenerateQR(){
    let inputValue = input.value;
    if(inputValue.length > 0){
        let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
        let finalURL = URL + inputValue ;
    
        qrimage.src = finalURL;
    
        imgbox.classList.add("showimg");
    }
    else {
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000);
    }
}

button.addEventListener("click", () => {
    GenerateQR();
});

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        GenerateQR();
    }
});

qrimage.addEventListener("click", () => {
    if(qrimage.src){
        const downloadlink = document.querySelector("#downloadlink");
        downloadlink.setAttribute("href", qrimage.src);
    }
});