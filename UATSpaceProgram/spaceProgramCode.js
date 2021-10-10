// function for start button
function startCollection(){
    // disabling/enabling the buttons
    document.getElementById("srtBTN").disabled = true;
    document.getElementById("stpBTN").disabled = false;
    // adding the data to the table based on IDs 
    document.getElementById("timeData").innerHTML = "15 Seconds";
    document.getElementById("latData").innerHTML = 0;
    document.getElementById("longData").innerHTML = 0;
    document.getElementById("gpsData").innerHTML = 0;
    document.getElementById("bmpAltData").innerHTML = 30383.04;
    document.getElementById("bmpPresData").innerHTML = 2.34;
    document.getElementById("bmpTempData").innerHTML = 0;
    document.getElementById("digTempData").innerHTML = 24.12;
    document.getElementById("cssTempData").innerHTML = 25;
    document.getElementById("csseC02Data").innerHTML = 400;
    document.getElementById("cssTVOCData").innerHTML = 0
    document.getElementById("uvData").innerHTML = 0;
    document.getElementById("accXData").innerHTML = -.87;
    document.getElementById("accYData").innerHTML = -.02;
    document.getElementById("accZData").innerHTML = 9.61;
    document.getElementById("magXData").innerHTML = 0.13;
    document.getElementById("magYData").innerHTML = 0.57;
    document.getElementById("magZData").innerHTML = -0.24;
    document.getElementById("gyroXData").innerHTML = 4.66;
    document.getElementById("gyroYData").innerHTML = 0.01;
    document.getElementById("gyroZData").innerHTML = -0.4;
}
// function for stop button
function stopCollection(){
    // enabling/disabling the buttons
    document.getElementById("srtBTN").disabled = false;
    document.getElementById("stpBTN").disabled = true;
}

