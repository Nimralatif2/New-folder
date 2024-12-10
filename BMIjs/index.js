function BMIcal() {
    
    let weight1 = document.getElementById("w1").value;
    let height1 = document.getElementById("h1").value;
    
    let bmi = weight1 / (height1 * height1);

    document.getElementById("bmi1").innerHTML = ("Your BMI: " + bmi);
    
    alert("Your BMI is: " + bmi);    
    console.log("Your BMI is: " + bmi);
}


