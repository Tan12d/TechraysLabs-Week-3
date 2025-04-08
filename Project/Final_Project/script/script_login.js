
document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from submitting automatically
    
    let name = document.querySelector('input[name="name"]');
    let email = document.querySelector('input[name="email"]');
    let phone = document.querySelector('input[name="phone"]');

    if (name.value.trim() === "" || email.value.trim() === "" || phone.value.trim() === "") {
        alert("Please fill out all fields before proceeding.");
    } else {
        window.location.href = "../pages/quiz.html"; // Navigate to next page
    }
});