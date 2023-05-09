const form = document.getElementById("registrationForm")
const handleSubmit = () => {

    alert("success")
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let newstudent = {
        fname: form.elements.firstName.value,
        lname: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        gender: form.elements.gender.value,
        dob: form.elements.dateOfBirth.value,
        phone: form.elements.phone.value,
        name: form.elements.firstName.value,

    }
    localStorage.setItem("newStudent", JSON.stringify(newstudent))
    // window.location.href = "../templates/spinwheel.html"
    //handleSubmit()
    // form.submit()
    form.reset()
})