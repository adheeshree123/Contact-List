import React, { useState } from "react";

const AddContact = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const onAddContact = (obj) => {
    console.log("Data: ", obj)
    localStorage.setItem('contacts', '4232')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!name || !email || !phone) {
      alert("Please fill all required fields: Name, Email, Phone");
      return;
    }

    // Pass contact data to parent component
    onAddContact({ name, email, phone, note });

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setNote("");
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Contact Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Note</label>
        <textarea
         value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button type="submit">Save Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
