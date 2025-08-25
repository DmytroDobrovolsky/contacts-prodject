import './App.css';
import { useState } from 'react';
import levenshtein from "fast-levenshtein";

import { ContactCard } from "./index.js";

const contacts = [
  {
    firstName: "Барней",
    lastName:
      "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  },
  {
    firstName: "Робін",
    lastName:
      "Щербатська", phone:
      "+380931460123",
    gender: "female"
  }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }];


function App(params) {

  const [allContacts, setAllContacts] = useState(contacts);

  const [name, setname] = useState("");

  const handlerChange = (event) => {

    setname(event.target.value);

  }

  const [ismale, setmale] = useState(true);

  const [isfemale, setfemale] = useState(true);

  const [isnogender, setnogender] = useState(true);



  const handlerMaleClick = () => {

    const newValue = !ismale;

    setmale(newValue);

    if (newValue == false && isnogender == true && isfemale == true) {

      const filteredContc = contacts.filter(contact =>

        contact.gender == "female" || contact.gender == null

      );

      setAllContacts(filteredContc);

    }

    else if (newValue == false && isnogender == false && isfemale == true) {

      const filteredContc = contacts.filter(contact =>

        contact.gender == "female"

      );

      setAllContacts(filteredContc);

    }

    else if (newValue == false && isnogender == true && isfemale == false) {

      const filteredContc = contacts.filter(contact =>

        contact.gender == null

      );

      setAllContacts(filteredContc);

    }

    else {



      const filteredContc = contacts.filter(contact =>

        contact.gender == "female" || contact.gender == null

      );

      setAllContacts(filteredContc);
      setfemale(true)
      setnogender(true)

    }

  }

  const handlerFemaleClick = () => {

    const newValue = !isfemale;

    setfemale(newValue);

    if (newValue == false && isnogender == true && ismale == true) {

      const filteredContc = contacts.filter(contact =>

        contact.gender == "male" || contact.gender == null

      );

      setAllContacts(filteredContc);

    }

    else if (newValue == false && isnogender == false && ismale == true) {

      const filteredContc = contacts.filter(contact =>

        contact.gender == "male"

      );

      setAllContacts(filteredContc);

    }

    else if (newValue == false && isnogender == true && ismale == false) {

      const filteredContc = contacts.filter(contact =>

        contact.gender == null

      );

      setAllContacts(filteredContc);

    }

    else {


      const filteredContc = contacts.filter(contact =>

        contact.gender === "male" || contact.gender === null


      );
      setAllContacts(filteredContc);
      setmale(true)
      setnogender(true)


    }

  }

  const handlerNoGenderClick = () => {

    const newValue = !isnogender;

    setnogender(newValue);

    if (newValue == false && isfemale == true && ismale == true) {


      const filteredContc = contacts.filter(contact =>

        contact.gender === "male" || contact.gender === "female"

      );

      setAllContacts(filteredContc);

    }

    else if (newValue == false && isfemale == false && ismale == true) {

      const filteredContc = contacts.filter(contact =>

        contact.gender === "male"

      );

      setAllContacts(filteredContc);

    }

    else if (newValue == false && isfemale == true && ismale == false) {


      const filteredContc = contacts.filter(contact =>

        contact.gender === "female"

      );

      setAllContacts(filteredContc);

    }


    else {


      const filteredContc = contacts.filter(contact =>

        contact.gender === "female" || contact.gender === "male"


      );
      setAllContacts(filteredContc);
      setmale(true)
      setfemale(true)


    }


  }

  const handlerSearchClick = () => {

    const filteredInfo = allContacts.filter(contact => {


      const firstName = contact.firstName.toLowerCase();
      const lastName = contact.lastName.toLowerCase();
      const input = name.toLowerCase().trim();

      if (contact.phone.includes(input)) {

        return contact;

      }

      else if (firstName.includes(input) || lastName.includes(input)) {

        return firstName.includes(input) || lastName.includes(input);

      }

      else {
        const firstNameDistance = levenshtein.get(contact.firstName.toLowerCase(), name.toLowerCase());

        const lastNameDistance = levenshtein.get(contact.lastName.toLowerCase(), name.toLowerCase());




        return firstNameDistance <= 2 || lastNameDistance <= 2;
      }



    });

    setAllContacts(filteredInfo);

  }

  const handlerAllContactsClick = () => {

    setAllContacts(contacts);

    setfemale(true)

    setmale(true)

    setnogender(true)


    setname("");

  }



  return (<div className='App'>

    <h1 className='h1'>Your contacts</h1>

    <input className='input' placeholder="Contact name" value={name} onChange={handlerChange} />

    <button className='searchBtn' onClick={handlerSearchClick}>Search</button>

    <button className='allCntBtn' onClick={handlerAllContactsClick}>All contacts</button>

    <button onClick={handlerMaleClick} className={`button ${ismale ? "active" : "inactive"}`}>Male</button>

    <button onClick={handlerFemaleClick} className={`button ${isfemale ? "active" : "inactive"}`}>Female</button>

    <button onClick={handlerNoGenderClick} className={`button ${isnogender ? "active" : "inactive"}`}>Unknow</button>


    {allContacts.map((contact, index) =>

      <ContactCard data={contact} key={contact.firstName + contact.gender + index} />

    )}
  </div>
  );

}

export default App;