function calculateAge() {
    let userInput = document.getElementById("date");
    let result = document.createElement("p");

    if (!userInput.value) {
        result.textContent = "Please enter your date of birth.";
        return;
    }

    let birthDate = new Date(userInput.value);
    let today = new Date();

    let ageInMilliseconds = today - birthDate;
    let ageInSeconds = ageInMilliseconds / 1000;
    let ageInMinutes = ageInSeconds / 60;
    let ageInHours = ageInMinutes / 60;
    let ageInDays = ageInHours / 24;
    let ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());

    // Check if birthday has occurred this month
    if (today.getDate() < birthDate.getDate()) {
        ageInMonths--;
    }

    // Check if birthday has occurred this year
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        ageInMonths += 12;
    }

    // Calculate years, months, and remaining days
    let ageInYears = Math.floor(ageInMonths / 12)-1;
    let remainingMonths = ageInMonths % 12;
    let remainingDays = today.getDate() - birthDate.getDate();

    result.textContent = `Your age is approximately ${ageInYears} years, ${remainingMonths} months, and ${remainingDays} days.`;

    // Remove previous result if exists
    let previousResult = document.querySelector(".result");
    if (previousResult) {
        previousResult.remove();
    }

    // Append the new result
    result.classList.add("result");
    document.querySelector(".calculator").appendChild(result);
}
