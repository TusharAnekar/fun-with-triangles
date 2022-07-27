const allAngles = document.querySelectorAll(".angle-input");

const isTriangle = document.querySelector("#is-triangle");

const output = document.querySelector("#output");

isTriangle.addEventListener ("click", () => {
    
    var validate = validateAngles();

    if (validate === 0) {
        var sumOfAngles = 0;
        for(let i=0; i<allAngles.length ; i++) {

            sumOfAngles = sumOfAngles + Number(allAngles[i].value);
        }
        
        if (sumOfAngles === 180) {
            output.innerText = "Angles form a triangle.";
        } else {
                output.innerText = "Angles don't form a triangle.";
        }
    }  
});

function validateAngles () {

    var flag =0;

    for (let j=0 ; j<allAngles.length ; j++) {
        if( allAngles[j].value === "") {
            output.innerText = "Please enter all the values in angles."
            flag = 1;
            break;
        } else {
            flag = 0;
        }
    }
    return flag;
}