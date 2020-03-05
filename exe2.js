function getFormvalue() {
    name1 = document.getElementById('ffname').value;
    name2 = document.getElementById('llname').value;

    document.write(name1 + "<br>");
    document.write(name2);
}

document.getElementById('mostrar').addEventListener('click', () => {
    getFormvalue();
})