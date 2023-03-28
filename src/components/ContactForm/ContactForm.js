import {useState} from 'react'


const ContactForm = ({addContact}) => {
 const [name, setName] = useState('');
 const [number, setNumber] = useState('')

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

const handleSubmit = e => {
  e.preventDefault();
  const newContact = { name, number };
  resetForm();
  return addContact(newContact);
};


const resetForm =() => {
  setName('');
  setNumber('');
}
 return (
   <>
     <form type="submit" onSubmit={handleSubmit}>
       <label>
         Name
         <input
           type="text"
           onChange={handleInput}
           value={name}
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
         />
       </label>
       <label>
         Number
         <input
           type="tel"
           onChange={handleInput}
           value={number}
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
         />
       </label>
       <button type="submit">Add contact</button>
     </form>
   </>
 );
}

export default ContactForm;