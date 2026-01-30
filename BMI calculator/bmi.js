function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultBox = document.getElementById('result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiStatus = document.getElementById('bmi-status');

    // Validation
    if (weight === "" || height === "") {
        alert("Please enter both weight and height!");
        return;
    }

    // BMI Formula: weight (kg) / (height (m) * height (m))
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Update UI
    resultBox.style.display = "block";
    bmiValue.innerText = bmi;

    // Determine Status
    if (bmi < 18.5) {
        bmiStatus.innerText = "Underweight";
        bmiStatus.style.color = "#e67e22"; // Orange
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiStatus.innerText = "Normal Weight";
        bmiStatus.style.color = "#2ecc71"; // Green
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiStatus.innerText = "Overweight";
        bmiStatus.style.color = "#e67e22"; // Orange
    } else {
        bmiStatus.innerText = "Obese";
        bmiStatus.style.color = "#e74c3c"; // Red
    }
}