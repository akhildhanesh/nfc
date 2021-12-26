function clicked() {
    let x = document.getElementById("display")
    let d = document.getElementById("tab")
    d.style.display = "none"
    const ndef = new NDEFReader()   
    ndef.scan()
        .then(() => {
            x.innerHTML = "Ready to Scan"
            ndef.onreadingerror = () => {
                x.innerHTML = "Cannot read data from the NFC tag. Try another one?"
            };
            // ndef.onreading = event => {

            //     alert(`Serial Number: ${event.serialNumber}`)
            //     alert(`Msg: ${event.message}`)
            //     alert(`NDEF message read.`)
            //     x.innerHTML = `Msg: ${event.message}`
            // };
            ndef.onreading = event => {
                d.style.display = "block"
                const message = event.message;
                // alert(`Serial Number: ${event.serialNumber}`)
                document.getElementById("sn").innerHTML = event.serialNumber
                for (const record of message.records) {
                    document.getElementById("rt").innerHTML = record.recordType
                    document.getElementById("mime").innerHTML = record.mediaType
                    document.getElementById("rid").innerHTML = record.id

                    // alert("Record type:  " + record.recordType);
                    // alert("MIME type:    " + record.mediaType);
                    // alert("Record id:    " + record.id);

                    switch (record.recordType) {
                        case "text":
                            let textDecoder = new TextDecoder(record.encoding);
                            // alert(`Text: ${textDecoder.decode(record.data)} (${record.lang})`)
                            document.getElementById("txt").innerHTML = textDecoder.decode(record.data)
                            document.getElementById("txtl").innerHTML = textDecoder.decode(record.lang)
                            break;
                        case "url":
                            textDecoder = new TextDecoder()
                            // alert(`URL: ${textDecoder.decode(record.data)}`)
                            document.getElementById("url").innerHTML = textDecoder.decode(record.data)
                            break;
                        default:
                            console.log('error')
                    }
                }
            };
        }).catch(error => {
            x.innerHTML = `Error! Scan failed to start: ${error}.`
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
