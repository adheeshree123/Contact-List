import React from 'react';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Note:</strong> {contact.note}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
            <button
              onClick={() => {
                const updatedName = prompt("Enter new name:", contact.name);
                const updatedEmail = prompt("Enter new email:", contact.email);
                const updatedPhone = prompt("Enter new phone number:", contact.phone);
                const updatedNote = prompt("Enter new note:", contact.note);
                const updatedContact = {
                  ...contact,
                  name: updatedName,
                  email: updatedEmail,
                  phone: updatedPhone,
                  note: updatedNote,
                };
                updateContact(contact.id, updatedContact);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
