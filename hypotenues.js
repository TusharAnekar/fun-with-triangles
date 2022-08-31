const sideA = document.querySelector("#side-a");
const sideB = document.querySelector("#side-b");
const checkHypotenues = document.querySelector("#check-hypotenues");
const output = document.querySelector("#output")

checkHypotenues.addEventListener ("click", () => {
    
    if (sideA.value <= 0 || sideB.value <= 0) {
        output.innerText = "Please enter values greater than 0 in both side A and B."
    } else if (sideA.value === "" || sideB.value === "") {
        output.innerText = "Please enter values in both sides A and B"
    } else {
        var hypotenues =
        Math.sqrt((sideA.value*sideA.value)+(sideB.value*sideB.value));
        
        output.innerText = "The length of the hypotenuse is "+hypotenues+"cm";
    }
    
});