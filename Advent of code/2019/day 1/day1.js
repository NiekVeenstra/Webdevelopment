/* 
function fuelReq(){
    let massPeople = Number(prompt("what is the mass of people onboard the ship?"));
    let massCargo = Number(prompt("what is the mass of the cargo onboard the ship?"));
    let massShip = Number(prompt("what is the mass of the ship itself?"));
    let massTotal = massPeople + massCargo + massShip;
    console.log(massTotal);
    let calc = (Math.floor(massTotal/3))-2;
        alert(`You will need a total of ${calc}L fuel.`)
}

fuelReq();
*/ 

function fuelCalc(){
    let massPeople = Number(document.getElementById("masspeople").value);
    let massCargo = Number(document.getElementById("masspeople").value);
    let massShip = Number(document.getElementById("masspeople").value);
    let massTotal = massPeople + massCargo + massShip;
    console.log(massTotal);
    let massCalc = (Math.floor(massTotal/3))-2;
    document.getElementById("demo").innerHTML = massCalc;
}