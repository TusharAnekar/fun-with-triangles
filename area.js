const inputBase = document.querySelector ("#base");
const inputHeight = document.querySelector ("#height");
const checkArea = document.querySelector ("#check-area");
const output = document.querySelector ("#output");

checkArea.addEventListener ("click", ()=> {

    if (inputBase.value <0 || inputHeight.value < 0) {
        output.innerText = "Please enter positive values in the fields.";
    } else if ( inputBase.value === "" || inputHeight.value === "") {
        output.innerText = "Please enter values in the fields."
    } else {
        var area = 0.5 * (inputBase.value * inputHeight.value);
    output.innerText = "The area of the triangle is "+area+"cm²";
    }
    
});