function checkAdmissionStatus() {
    const marks = document.getElementById("marks").value;
    let status = "";
    if (marks >= 0 && marks < 50) {
        status = "Admission Application Rejected";
    } else if (marks >= 50 && marks < 70) {
        status = "Acceptable to admit";
    } else if (marks >= 70 && marks < 90) {
        status = "Good to admit";
    } else if (marks >= 90 && marks <= 100) {
        status = "Outstanding to admit";
    } else {
        status = "Invalid input";
    }
    document.getElementById("status").innerHTML = status;
}