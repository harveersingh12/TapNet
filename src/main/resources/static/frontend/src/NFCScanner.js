import React, { useState } from "react";

const NFCScanner = () => {
    const [nfcData, setNfcData] = useState(null);
    const [error, setError] = useState(null);

    const startScan = async () => {
        console.log("[DEBUG] Start Scan button clicked");

        if (!("NDEFReader" in window)) {
            setError("Web NFC is not supported in this browser.");
            console.error("[DEBUG] Web NFC not supported.");
            return;
        }

        try {
            console.log("[DEBUG] Initializing NDEFReader...");
            const nfc = new window.NDEFReader();
            await nfc.scan();
            console.log("[DEBUG] NFC scan started. Waiting for a tag...");

            nfc.onreading = (event) => {
                console.log("[DEBUG] NFC tag detected:", event);

                if (!event.message || event.message.records.length === 0) {
                    setError("NFC tag detected but contains no data.");
                    console.warn("[DEBUG] NFC tag has no readable records.");
                    return;
                }

                const decoder = new TextDecoder();
                const records = event.message.records.map((record, index) => {
                    try {
                        console.log(`[DEBUG] Decoding record ${index + 1}:`, record);
                        return decoder.decode(record.data);
                    } catch (decodeError) {
                        console.error(`[DEBUG] Failed to decode record ${index + 1}:`, decodeError);
                        return "Unreadable Data";
                    }
                });

                setNfcData(records.join(", "));
                console.log("[DEBUG] NFC Data Read:", records);
            };

            nfc.onreadingerror = (readError) => {
                setError("Error reading NFC tag. Please try again.");
                console.error("[DEBUG] NFC read error:", readError);
            };

        } catch (scanError) {
            setError("NFC scanning failed. Ensure your device supports NFC and the page is served over HTTPS or localhost.");
            console.error("[DEBUG] NFC scan error:", scanError);
        }
    };

    return (
        <div className="App">
            <h1>NFC Scanner</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={startScan}>Start NFC Scan</button>
            {nfcData && (
                <div>
                    <h2>Scanned Data:</h2>
                    <p>{nfcData}</p>
                </div>
            )}
        </div>
    );
};

export default NFCScanner;
