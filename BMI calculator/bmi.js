function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultBox = document.getElementById('result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiStatus = document.getElementById('bmi-status');

    
    if (weight === "" || height === "") {
        alert("Please enter both weight and height!");
        return;
    }

    
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    
    resultBox.style.display = "block";
    bmiValue.innerText = bmi;

    
    if (bmi < 18.5) {
        bmiStatus.innerText = "Underweight";
        bmiStatus.style.color = "#e67e22"; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiStatus.innerText = "Normal Weight";
        bmiStatus.style.color = "#2ecc71"; 
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiStatus.innerText = "Overweight";
        bmiStatus.style.color = "#e67e22"; 
    } else {
        bmiStatus.innerText = "Obese";
        bmiStatus.style.color = "#e74c3c"; // Red
    }

}
