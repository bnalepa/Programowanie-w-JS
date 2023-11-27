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
            gallery.appendChild(div);
            image.setAttribute("src", item);
            image.setAttribute("width", 150);
            image.classList.add("image");
            div.appendChild(image);

            const deleteButton = document.createElement("input");
            deleteButton.classList.add("deleteButton");
            deleteButton.setAttribute("type", "button")
            deleteButton.setAttribute("value","Delete")
            div.appendChild(deleteButton);  
            
        }
    }

    function deleteImage(event)
    {
        const img = event.target.parentElement.children[0];
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
        isValid.setAttribute("name","valid");
        isValid.setAttribute("type","checkbox");
        
        addAnswerButton.before(inputAnswer);
        addAnswerButton.before(isValid);
    }
    const isValidForm = () => {
        // zwróć true, jeśli jest co najmniej 3 elemetu typu answer
        // i choć jeden element vaild jest checked 

        const answerElements = testForm.answer.length;
        let isChecked = false;
        if(document.forms.test.valid.nextSibling == undefined)
        {
            for(let i of document.forms.test.valid)
            {
                if(i.checked) isChecked = true;
            }
        }
        

        if(answerElements >= 3 && isChecked)
        return true;

        return false;
    }
    testForm.addEventListener("submit", function(e){
        if(!isValidForm()){
            e.preventDefault(); // nie zostanie wysłane
        }
    })

}   