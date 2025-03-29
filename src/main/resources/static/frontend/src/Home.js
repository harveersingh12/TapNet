import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
            <h1>Welcome to TapNet</h1>

            <button
                onClick={() => navigate("/nfc-scanner")}
                style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
            >
                Edit My Info (NFC Scanner)
            </button>

            <button
                onClick={() => navigate("/contacts")}
                style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
            >
                View My Contacts
            </button>
        </div>
    );
};

export default HomePage;
