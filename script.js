function showForm(shape) {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';
    document.getElementById('result').innerText = '';

    let formHtml = '';

    if (shape === 'segitiga') {
        formHtml = `
            <h2>Luas Segitiga</h2>
            <input type="number" id="base" placeholder="Alas (cm)">
            <input type="number" id="height" placeholder="Tinggi (cm)">
            <button onclick="calculateArea('segitiga')">Hitung</button>
            <div id="error"></div>
        `;
    } else if (shape === 'persegi') {
        formHtml = `
            <h2>Luas Persegi</h2>
            <input type="number" id="side" placeholder="Sisi (cm)">
            <button onclick="calculateArea('persegi')">Hitung</button>
            <div id="error"></div>
        `;
    } else if (shape === 'persegipanjang') {
        formHtml = `
            <h2>Luas Persegi Panjang</h2>
            <input type="number" id="length" placeholder="Panjang (cm)">
            <input type="number" id="width" placeholder="Lebar (cm)">
            <button onclick="calculateArea('persegiPanjang')">Hitung</button>
            <div id="error"></div>
        `;
    }

    formContainer.innerHTML = formHtml;
}

function calculateArea(shape) {
    let area = 0;
    let error = '';

    if (shape === 'segitiga') {
        const base = document.getElementById('base').value;
        const height = document.getElementById('height').value;
        if (base <= 0 || height <= 0) {
            error = 'Alas dan tinggi harus lebih dari 0!';
        } else {
            area = 0.5 * base * height;
        }
    } else if (shape === 'persegi') {
        const side = document.getElementById('side').value;
        if (side <= 0) {
            error = 'Sisi harus lebih dari 0!';
        } else {
            area = side * side;
        }
    } else if (shape === 'persegipanjang') {
        const length = document.getElementById('length').value;
        const width = document.getElementById('width').value;
        if (length <= 0 || width <= 0) {
            error = 'Panjang dan lebar harus lebih dari 0!';
        } else {
            area = length * width;
        }
    }

    if (error) {
        document.getElementById('error').innerText = error;
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('error').innerText = '';
        document.getElementById('result').innerText = `Luas: ${area} `+ 'cm²';
    }
}
