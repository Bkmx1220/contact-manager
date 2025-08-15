import { useState, useEffect } from "react";

export default function ContactForm({ onSave, currentContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    } else {
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      onSave({ name, email, phone });
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">
        {currentContact ? "Mettre à jour" : "Ajouter"}
      </button>
    </form>
  );
}
