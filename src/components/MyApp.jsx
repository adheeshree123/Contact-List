import React, { useState, useEffect } from 'react';

const App = () => {
  // Initialize state with contacts from localStorage or an empty array
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [form, setForm] = useState({ name: '', email: '', phone: '', note: '' });

  // Update localStorage whenever contacts state changes
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { ...form, id: Date.now() };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setForm({ name: '', email: '', phone: '', note: '' });
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleEdit = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    const updatedName = prompt('Enter new name:', contactToEdit.name);
    const updatedEmail = prompt('Enter new email:', contactToEdit.email);
    const updatedPhone = prompt('Enter new phone number:', contactToEdit.phone);
    const updatedNote = prompt('Enter new note:', contactToEdit.note);

    if (updatedName && updatedEmail && updatedPhone) {
      const updatedContact = {
        ...contactToEdit,
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
        note: updatedNote,
      };
      setContacts((prevContacts) =>
        prevContacts.map((contact) => (contact.id === id ? updatedContact : contact))
      );
    }
  };

  return (
    <div>
      <h1>Contact Management App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <textarea
          name="note"
          value={form.note}
          onChange={handleChange}
          placeholder="Note"
        />
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Note:</strong> {contact.note}</p>
            <button onClick={() => handleEdit(contact.id)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

