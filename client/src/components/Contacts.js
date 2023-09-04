import React from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';
import { useState, useEffect } from 'react';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:8080/api/contacts')
        .then((response) => response.json())
        .then((data) => setContacts(data))
        .catch((error) => {
            console.error('Error fetching contacts:', error);
        })
    }, [])

    return (
        <div>
            <div className="row">
                <AddContacts /> 
            </div>
            <div className="row">
                {contacts.map((item) => {
                    return <SingleContact key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
}