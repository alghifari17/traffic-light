    // Get variable
    const redlight = document.getElementById("red");
    const yellowlight = document.getElementById("yellow");
    const greenlight = document.getElementById("green");
    const switchBtn = document.getElementById("switchBtn");
    
    // initial value
    redlight.style.background = "red";
    let current = "red";
    
    //reset light
    function resetlight(){
        redlight.style.background = "#444";
        yellowlight.style.background = "#444";
        greenlight.style.background ="#444";
    }

    //switch lights
    function switchlight () {
        resetlight();
        yellowlight.style.background = "yellow";

        console.log(current);
        setTimeout(() => {
            resetlight();
             if (current == "red") {
                current = "green";
                greenlight.style.background = "green";
            } else {
                current == "red";
                redlight.style.background = "red";
            }
        }, 1000);
    }
    
    switchBtn.addEventListener("click", switchlight);