
import { useState } from 'react';
import levenshtein from "fast-levenshtein";
import { contacts } from "./App.js";


export const useApp = (params) => {

    const [allContacts, setAllContacts] = useState(contacts);

    const [name, setName] = useState("");

    const [isMale, setMale] = useState(true);

    const [isFemale, setFemale] = useState(true);

    const [isNoGender, setNoGender] = useState(true);

    const filterContacts = (options) => {

        if (options.isMale === false && options.isNoGender === true && options.isFemale === true) {
            const filteredContc = contacts.filter(contact =>
                contact.gender === "female" || contact.gender == null
            );
            setAllContacts(filteredContc);
        }
        else if (options.isMale === false && options.isNoGender === false && options.isFemale === true) {
            const filteredContc = contacts.filter(contact =>
                contact.gender === "female"
            );
            setAllContacts(filteredContc);
        }
        else if (options.isMale === false && options.isNoGender === true && options.isFemale === false) {
            const filteredContc = contacts.filter(contact =>
                contact.gender == null
            );
            setAllContacts(filteredContc);
        }
        else if (options.isMale === true && options.isNoGender === true && options.isFemale === false) {
            const filteredContc = contacts.filter(contact =>
                contact.gender === "male" || contact.gender == null // запитати в Тараса за === null
            );
            setAllContacts(filteredContc);
        }
        else if (options.isMale === true && options.isNoGender === false && options.isFemale === true) {
            const filteredContc = contacts.filter(contact =>
                contact.gender === "male" || contact.gender === "female"
            );
            setAllContacts(filteredContc);
        }
        else if (options.isMale === true && options.isNoGender === false && options.isFemale === false) {
            const filteredContc = contacts.filter(contact =>
                contact.gender === "male"
            );
            setAllContacts(filteredContc);
        }
        else {
            setAllContacts(contacts)
        }

    }

    const handlerMaleClick = () => {
        const newValue = !isMale;

        setMale(newValue);
        filterContacts({
            isMale: newValue,
            isFemale,
            isNoGender,
        })


    }

    const handlerFemaleClick = () => {
        const newValue = !isFemale;

        setFemale(newValue);
        filterContacts({
            isFemale: newValue,
            isMale,
            isNoGender,

        })
    }
    const handlerNoGenderClick = () => {
        const newValue = !isNoGender;

        setNoGender(newValue);
        filterContacts({
            isNoGender: newValue,
            isFemale,
            isMale,
        })
    }


    const handlerChange = (event) => {
        setName(event.target.value);
        handlerSearch();
    }

    const handlerAllContactsClick = () => {
        setAllContacts(contacts);
        setFemale(true)
        setMale(true)
        setNoGender(true)
        setName("");
    }


    const handlerSearch = () => {
        const filteredInfo = allContacts.filter(contact => {

            const firstName = contact.firstName.toLowerCase();
            const lastName = contact.lastName.toLowerCase();
            const input = name.toLowerCase().trim();

            if (contact.phone.includes(input)) {
                return contact;
            } else if (firstName.includes(input) || lastName.includes(input)) {
                return firstName.includes(input) || lastName.includes(input);
            } else {
                const firstNameDistance = levenshtein.get(contact.firstName.toLowerCase(), name.toLowerCase());
                const lastNameDistance = levenshtein.get(contact.lastName.toLowerCase(), name.toLowerCase());
                return firstNameDistance <= 2 || lastNameDistance <= 2;
            }
        });
        setAllContacts(filteredInfo);
    }

    return {
        handlerChange,
        handlerAllContactsClick,
        handlerMaleClick,
        handlerFemaleClick,
        handlerNoGenderClick,
        allContacts,
        isNoGender,
        isFemale,
        isMale,
        name
    }


}