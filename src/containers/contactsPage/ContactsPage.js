import React, { useEffect, useState } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import useCheckDuplicateContact from "../../hooks/useCheckDuplicateContact";

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  let checkArray = useCheckDuplicateContact(contacts, name);

  useEffect(() => {
    if (checkArray) {
      setDuplicateCheck(true);
    } else if (!checkArray) {
      setDuplicateCheck(false);
    }
  }, [checkArray]);

  const clearList = () => {
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name && !phone, !email)) {
      alert("Please fill all the fields.");
    } else if (duplicateCheck) {
      alert("Contact already exists");
      return;
    } else {
      addContact(name, phone, email);
    }
    clearList();
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts ? <TileList contacts={contacts} /> : undefined}
      </section>
    </div>
  );
};
