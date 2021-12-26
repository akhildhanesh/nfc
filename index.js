// let x = document.getElementById("display")

function clicked() {
    const ndef = new NDEFReader();
    ndef.scan()
        .then(() => {
            // x.innerHTML = "Scan started successfully."
            alert("Scan started successfully.")
            ndef.onreadingerror = () => {
                // x.innerHTML = "Cannot read data from the NFC tag. Try another one?"
                alert("Cannot read data from the NFC tag. Try another one?")
            };
            ndef.onreading = event => {
                // x.innerHTML = "NDEF message read."
                alert("NDEF message read.")
            };
        }).catch(error => {
            // x.innerHTML = `Error! Scan failed to start: ${error}.`
            alert(`Error! Scan failed to start: ${error}.`)
        });
}

// async function clicked() {
//     alert("User clicked scan button");

//     try {
//         const ndef = new NDEFReader();
//         await ndef.scan();
//         alert("> Scan started");

//         ndef.addEventListener("readingerror", () => {
//             alert("! Cannot read data from the NFC tag. Try another one?");
//         });

//         ndef.addEventListener("reading", ({ message, serialNumber }) => {
//             alert(`> Serial Number: ${serialNumber}`);
//             alert(`> Records: (${message.records.length})`);
//         });
//     } catch (error) {
//         alert("! " + error);
//     }
// }
