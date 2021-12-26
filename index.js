let x = document.getElementById("display")

const ndef = new NDEFReader();
ndef.scan()
    .then(() => {
        alert('nn')
        x.innerHTML = "Scan started successfully."
        ndef.onreadingerror = () => {
            x.innerHTML = "Cannot read data from the NFC tag. Try another one?"
        };
        ndef.onreading = event => {
            x.innerHTML = "NDEF message read."
        };
    }).catch(error => {
        x.innerHTML = `Error! Scan failed to start: ${error}.`
    });
