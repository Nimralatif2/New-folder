function ushercal() {
    let wealth = document.getElementById("w1").value;


 
    let zakat = (wealth * 40) / 100;

    
    document.getElementById("usher1").innerHTML = ("Your Usher (Zakat) for rice yield is: " + zakat);

    alert("Your Usher (Zakat) for rice yield is: " + zakat);
    console.log("Your Usher/Zakat for rice yield is: " + zakat);
}
