import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Charger depuis localStorage au démarrage
  useEffect(() => {
    const saved = localStorage.getItem("contacts");
    if (saved) {
      setContacts(JSON.parse(saved));
    }
  }, []);

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addOrUpdateContact = (contact) => {
    if (editingIndex !== null) {
      const updated = [...contacts];
      updated[editingIndex] = contact;
      setContacts(updated);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const editContact = (index) => {
    setEditingIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestion des Contacts</h1>
      <ContactForm
        onSave={addOrUpdateContact}
        currentContact={editingIndex !== null ? contacts[editingIndex] : null}
      />
      <ContactList contacts={contacts} onEdit={editContact} onDelete={deleteContact} />
    </div>
  );
}
