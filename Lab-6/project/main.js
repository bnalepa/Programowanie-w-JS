window.onload = function(){
    const links = new Set([
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg6SNRxoTBGTHMxnV59khl2t1dAS0oynUMg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsXARN9tm6drVx30jwrEswb4IUa_5215ILw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZ-bY63aj4YNLsBiMm-BY2jjyXWVs9a1efw&usqp=CAU",
    ])
    
    function renderGallery()
    {
        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
        for(let item of links){
            const div = document.createElement("div");
            const image = document.createElement("img");
            image.setAttribute("src", item);
            image.setAttribute("width", 150);
            image.classList.add("image");
            gallery.appendChild(image);

            const deleteButton = document.createElement("input");
            deleteButton.classList.add("deleteButton");
            deleteButton.setAttribute("type", "button")
            deleteButton.setAttribute("value","Delete")
            gallery.appendChild(deleteButton);  
        }
    }

    function deleteImage(event)
    {
        const img = event.target;
        links.delete(img.src);
        renderGallery();

    }
    renderGallery();

    
    

    const addButton = document.getElementById("addImageButton");
    addButton.onclick = function() { 
        const url = document.getElementsByName("url")[0].value;
        links.add(url) 
        renderGallery()
    };
    
    gallery.addEventListener("click", deleteImage ,true);

    // FORM //
    const testForm = document.forms.test;
    const addAnswerButton = testForm.addAnswerButton;
    addAnswerButton.onclick = function(){
        const inputAnswer = document.createElement("input");
        inputAnswer.setAttribute("name","answer");
        inputAnswer.setAttribute("type","text");
        const isValid = document.createElement("input");
        inputAnswer.setAttribute("name","valid");
        inputAnswer.setAttribute("type","checkbox");
        addAnswerButton.before(isValid);
        addAnswerButton.before(inputAnswer);
        
    }
    const isValidForm = () => {
        // zwróć true, jeśli jest co najmniej 3 elemetu typu answer
        // i choć jeden element vaild jest checked 
        console.log("answer",testForm.answer)
        return false;
    }
    testForm.addEventListener("submit", function(e){
        if(!isValid()){
            e.preventDefault(); // nie zostanie wysłane
        }
    })

}   