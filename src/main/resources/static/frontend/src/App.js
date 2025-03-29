import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import NFCScanner from "./NFCScanner";
import ContactManager from "./ContactManager";
import "./App.css"; // Import the CSS file

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/nfc-scanner" element={<NFCScanner />} />
                    <Route path="/contacts" element={<ContactManager />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


