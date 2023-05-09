const spinwheel = document.getElementById("spinwheel")
function display() {
    let students = JSON.parse(localStorage.getItem("students"));
    localStorage.setItem("students", JSON.stringify(students))
    if (confirm("do you want to update ?")) {
        let temps = JSON.parse(localStorage.getItem("students"));
        let st = temps.find(student => student.name === "Raju");
        console.log(st)
        st.roll = 5
        localStorage.setItem("students", JSON.stringify(temps))
        console.log(JSON.parse(localStorage.getItem("students")))
        const para = document.getElementById("para");
        para.innerHTML = "<b style='color:red'>hello</b>"
    }

}
const wheel = document.getElementById("wheel");
function rotatewheel() {
    wheel.classList.add("rotate")
    setTimeout(() => {
        wheel.classList.remove("rotate")
    }, 3000);
}
wheel.addEventListener("click", rotatewheel)