const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector('.output');
const img = document.getElementById('img');
const mediaType = document.getElementById("type");

fileInput.addEventListener("change", () => {
    const [file] = fileInput.files;
    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            switch(mediaType.value){
                case "text":
                    output.innerText = reader.result;
                    break;
                case "image":
                    img.src = reader.result;
                    break;
            }
        });
        switch(mediaType.value){
            case "text":
                reader.readAsText(file);
                break;
            case "image":
                reader.readAsDataURL(file);
                break;
        }
    }
});