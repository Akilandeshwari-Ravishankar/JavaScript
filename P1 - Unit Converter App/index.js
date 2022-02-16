document.myform.inputnum.focus();

function focus() {
    document.myform.inputnum.focus(); 
}

function conversion() {
    let input = document.getElementById("input-num").value;
    
    let meterFeet = (input*3.28084).toFixed(3);
    let feetMeter = (input/3.28084).toFixed(3); 
    document.getElementById("len-conv").textContent = input + " meters = " + meterFeet + " feet | " + input + " feet = " + feetMeter + " meters";  

    let literGallon = (input*0.264172).toFixed(3); 
    let gallonLiter = (input/0.264172).toFixed(3); 
    document.getElementById("vol-conv").textContent = input + " liters = " + literGallon + " gallons | " + input + " gallons  " + gallonLiter + " liters";  

    let kiloPound = (input*2.20462).toFixed(3); 
    let poundKilo = (input/2.20462).toFixed(3); 
    document.getElementById("mass-conv").textContent = input + " kilos = " + literGallon + " pounds | " + input + " pounds  " + gallonLiter + " kilos"; 
    
    return false; 
}