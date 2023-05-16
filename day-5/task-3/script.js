// Bharat school is 150 year old school and year on year parents come in big numbers to get admission for their children. This year also the school has conducted an entrance exam for admission for various classes. The students have completed their exam and based on the marks they received they wanted to know the admission status for their application.

//     Below 50 - Admission Application Rejected
//     50 to 70 - Acceptable to admit
//     70 to 90 - Good to admit
//     Above 90 - Outstanding to admit

// Ask the parent to enter the entrance exam marks of their children and let the parents know the status of the application for the admission.

function checkAdmissionStatus() {
    const marks = parseFloat(document.getElementById("marks").value);
    let status = "";
    if (isNaN(marks) || marks == undefined || marks == null) {
        status = "Invalid input";
    } else if (marks >= 0 && marks < 50) {
        status = "Admission Application Rejected";
    } else if (marks >= 50 && marks < 70) {
        status = "Acceptable to admit";
    } else if (marks >= 70 && marks < 90) {
        status = "Good to admit";
    } else if (marks >= 90 && marks <= 100) {
        status = "Outstanding to admit";
    } else {
        status = "Out of range";
    }
    document.getElementById("status").innerHTML = status;
}