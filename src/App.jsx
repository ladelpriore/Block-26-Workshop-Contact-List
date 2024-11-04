//Navigate to App.jsx and remove boilerplace code and the unused import statements, leaving a blank application. 
//Import ContactList in App.jsx.  Open App.jsx and modfiy the import to render the ContactList component. 

import './App.css';
import ContactList from './components/ContactList';

function App() {
  return (
    <>
      <ContactList />
    </>
  );
}

export default App;

