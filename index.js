// let x = document.getElementById("display")

// const ndef = new NDEFReader();
// ndef.scan()
//     .then(() => {
//         x.innerHTML = "Scan started successfully."
//         ndef.onreadingerror = () => {
//             x.innerHTML = "Cannot read data from the NFC tag. Try another one?"
//         };
//         ndef.onreading = event => {
//             x.innerHTML = "NDEF message read."
//         };
//     }).catch(error => {
//         x.innerHTML = `Error! Scan failed to start: ${error}.`
//     });

function clicked() {
    log("User clicked scan button");

    try {
        const ndef = new NDEFReader();
        await ndef.scan();
        log("> Scan started");

        ndef.addEventListener("readingerror", () => {
            log("Argh! Cannot read data from the NFC tag. Try another one?");
        });

        ndef.addEventListener("reading", ({ message, serialNumber }) => {
            log(`> Serial Number: ${serialNumber}`);
            log(`> Records: (${message.records.length})`);
        });
    } catch (error) {
        log("Argh! " + error);
    }
}
