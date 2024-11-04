//Setting up the Table. Create the components folder in the src directory. 
//Create the ContactList.jsx file
//Make it the default export from the file
//Design HTML table, including head, row, and column 
//Escape into javascript and map over array of contacts
//Copy the dummyContacts array into the ContactList file, before the component 
//Add data as state. IMport useState hook and create contacts and setContacts vairables.
//Import the Contact Row
//REnder a ContactRow for each array contact. Write the map statement to map over contacts. 
//Fetching Data and useEffect. Import useEffect hook from react in the top row. 
//Define an async function that fetches our data
//Fetch the API and pass to the URL


import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList() {             
  const [contacts, setContacts] = useState(dummyContacts);



  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        const result = await response.json();
        console.log(result); // Check the data from the API
        setContacts(result); // Update state with fetched data
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);


    console.log("Contacts: ", contacts);

  return (          
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
}
