import React, { useState, useEffect } from 'react';

const NFCScanner = () => {
    const [nfcData, setNfcData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if ('NDEFReader' in window) {
            const nfc = new window.NDEFReader();

            const startScan = async () => {
                try {
                    await nfc.scan();
                    console.log('NFC scan started');

                    nfc.onreading = (event) => {
                        const decoder = new TextDecoder();
                        const data = decoder.decode(event.message.records[0].data);
                        setNfcData(data);
                        console.log('NFC data:', data);
                    };

                    nfc.onreadingerror = (error) => {
                        setError('Error reading NFC tag. Please try again.');
                        console.error('NFC read error:', error);
                    };
                } catch (error) {
                    setError('NFC scanning failed. Ensure your device supports NFC and the page is served over HTTPS or localhost.');
                    console.error('NFC scan error:', error);
                }
            };

            startScan();
        } else {
            setError('Web NFC is not supported in this browser.');
        }
    }, []);

    return (
        <div>
            <h1>NFC Scanner</h1>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div>
                    <p>Scan an NFC tag to see its data.</p>
                    {nfcData && (
                        <div>
                            <h2>Scanned Data:</h2>
                            <p>{nfcData}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NFCScanner;