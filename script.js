function submit() {
    var toSubmit = document.querySelector(".to-submit");
    var submited = document.querySelector(".submited");
    var rating = (document.querySelector("input[name='rating']:checked").value)
    var conteudo = document.querySelector(".conteudo")
    
    if (rating === "null"){
        
    }else{
        toSubmit.style.display = "none";
        submited.style.display = "flex";
        conteudo.innerHTML = "You selected "+ rating + " out of 5";
    }
}