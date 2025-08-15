export default function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length === 0 ? (
          <tr>
            <td colSpan="4" align="center">Aucun contact</td>
          </tr>
        ) : (
          contacts.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => onEdit(i)}>Éditer</button>
                <button onClick={() => onDelete(i)}>Supprimer</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
