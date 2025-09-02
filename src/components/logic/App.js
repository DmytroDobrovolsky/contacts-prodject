import './App.css';
import { ContactCard } from "./cards/contactsCards.jsx";
import { useApp } from "./useApp.js";


export const contacts = [
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


export const App = (params) => {
  const { handlerChange, handlerAllContactsClick, handlerMaleClick, handlerFemaleClick, handlerNoGenderClick, allContacts, isNoGender, isFemale, isMale, name } = useApp();

  return (<div className='App'>
    <h1 className='h1'>Your contacts</h1>
    <input className='input' placeholder="Contact name" value={name} onChange={handlerChange} />
    <button className='allCntBtn' onClick={handlerAllContactsClick}>All contacts</button>
    <button onClick={handlerMaleClick} className={`button ${isMale ? "active" : "inactive"}`}>Male</button>
    <button onClick={handlerFemaleClick} className={`button ${isFemale ? "active" : "inactive"}`}>Female</button>
    <button onClick={handlerNoGenderClick} className={`button ${isNoGender ? "active" : "inactive"}`}>Unknow</button>

    {allContacts.map((contact, index) =>
      <ContactCard data={contact} key={contact.firstName + contact.gender + index} />
    )}
  </div>
  );
}


export default App;