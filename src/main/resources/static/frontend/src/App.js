import React from 'react';
import NFCScanner from './NFCScanner';
import './App.css'; // Import the CSS file

function App() {
    return (
        <div className="App">
            <h1>Hello, React with Spring Boot!</h1>
            <p>This is a simple frontend with NFC scanning functionality.</p>
            <NFCScanner />
        </div>
    );
}

export default App;


