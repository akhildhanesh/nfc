function clicked() {
    let x = document.getElementById("display")
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
                
                alert(`Serial Number: ${event.serialNumber}`)
                alert(`Msg: ${event.message}`)
                alert(`NDEF message read.`)
                x.innerHTML = `Msg: ${event.message}`
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
