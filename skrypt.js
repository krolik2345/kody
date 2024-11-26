function generatePalette() {
    const hue = document.getElementById('hueValue').value;
    const table = document.querySelector('table');
    const cells = table.querySelectorAll('tr:nth-child(2) td');
 
    if (hue >= 0 && hue <= 360) {
     
        table.rows[0].cells[0].style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        table.rows[0].cells[0].innerText = `H: ${hue}, S: 100%, L: 50%`;
 
        const saturations = [80, 60, 40, 20];
        saturations.forEach((saturation, index) => {
            cells[index].style.backgroundColor = `hsl(${hue}, ${saturation}%, 50%)`;
            cells[index].innerText = `H: ${hue}, S: ${saturation}%, L: 50%`;
        });
    } else {
        alert('Proszę wpisać wartość z zakresu 0 – 360');
    }
}