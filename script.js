const handleGetFormData = () => ({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
});

let form = document.getElementById("form-validate");

function isNumber(num) {
    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }

}

function checkboxIsChecked() {
    if (document.getElementById("status").checked) {
        return true;
    } else {
        return false;
    }
}

function validateFormData(objek) {
    if (objek != null && isNumber(objek.zipCode) && checkboxIsChecked()) {
        return true;
    }
    return false;
}

function submit() {
    const formData = handleGetFormData();

    const validasi = validateFormData(formData);

    if (!validasi) {
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
    } else {
        document.getElementById("warning").textContent = "";
        console.log(formData);
        alert("Data berhasil diisi!");
    }
}

document.getElementById("form-id").addEventListener("submit", submit);
submit(event.preventDefault());
function submit() {
    const formData = handleGetFormData();

    const validasi = validateFormData(formData);

    if (!validasi) {
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
    } else {
        document.getElementById("warning").textContent = "";
        console.log(formData);
        alert("Data berhasil diisi!");
    }
}
document.getElementById("form-id").addEventListener("submit", submit);
submit(event.preventDefault());



