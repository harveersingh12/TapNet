import React, { useState } from "react";
import "./ContactManager.css"; // Import CSS for styling

// Mock contact data
const mockContacts = [
    {
        id: 1,
        name: "John Doe",
        company: "TechCorp",
        jobTitle: "Software Engineer",
        email: "john.doe@techcorp.com",
        phone: "+1 234 567 8901",
    },
    {
        id: 2,
        name: "Jane Smith",
        company: "InnovateX",
        jobTitle: "Product Manager",
        email: "jane.smith@innovatex.com",
        phone: "+1 987 654 3210",
    },
    {
        id: 3,
        name: "Michael Brown",
        company: "FinTech Inc.",
        jobTitle: "Data Analyst",
        email: "michael.brown@fintech.com",
        phone: "+1 555 234 5678",
    },
];

const ContactManager = () => {
    const [contacts, setContacts] = useState(mockContacts);
    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <div className="contact-manager">
            <h1>My Contacts</h1>

            <div className="contact-list">
                {contacts.map((contact) => (
                    <div key={contact.id} className="contact-card">
                        <h2>{contact.name}</h2>
                        <p><strong>{contact.jobTitle}</strong> at {contact.company}</p>
                        <button onClick={() => setSelectedContact(contact)}>View Details</button>
                    </div>
                ))}
            </div>

            {selectedContact && (
                <div className="contact-details">
                    <h2>{selectedContact.name}</h2>
                    <p><strong>Company:</strong> {selectedContact.company}</p>
                    <p><strong>Job Title:</strong> {selectedContact.jobTitle}</p>
                    <p><strong>Email:</strong> {selectedContact.email}</p>
                    <p><strong>Phone:</strong> {selectedContact.phone}</p>
                    <button onClick={() => setSelectedContact(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default ContactManager;
