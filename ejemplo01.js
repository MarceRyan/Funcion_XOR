const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3],
    activation: 'sigmoid'
};

const net = new brain.NeuralNetwork(config);

net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]);

document.getElementById('generateBtn').addEventListener('click', function() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;

    if (input1 !== '' && input2 !== '' && /^[01]$/.test(input1) && /^[01]$/.test(input2)) {
        const output = net.run([parseInt(input1), parseInt(input2)]);
        
        // Crea una nueva fila en la tabla y agrega el resultado de la operación XOR
        var table = document.getElementById('randomTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        var cell = newRow.insertCell(0);

        // Agrega el resultado y el mensaje correspondiente
        if ((parseInt(input1) === 1 && parseInt(input2) === 1) || (parseInt(input1) === 0 && parseInt(input2) === 0)) {
            cell.innerHTML = `${input1} Y ${input2} muestra el valor de ==> ${output[0].toFixed(4)} este valor es próximo a 0 y es Falso`;
        } else {
            cell.innerHTML = `${input1} Y ${input2} muestra el valor de ==> ${output[0].toFixed(4)} este valor es próximo a 1 y es Verdadero`;
        }

        // Limpia los valores de los inputs
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
    } else {
        alert('Por favor, llena ambos inputs con valores válidos (0 o 1).');
    }
});

