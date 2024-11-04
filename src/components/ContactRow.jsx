//Create a file, ContactRow.jsx. 
//Create the ContactRow.jsx Component. 
//Render single row with 3 columnsfor name, email, and phone
//Render a seperate compnant for each contact, and pass the data as props.  

export default function ContactRow({ contact }) {
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  