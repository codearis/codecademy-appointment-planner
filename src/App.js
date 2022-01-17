import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { contactsInitialState, appointmentsInitialState } from "./state/state";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [appointments, setAppointments] = useState(appointmentsInitialState);
  const [contacts, setContacts] = useState(contactsInitialState);

  const addContact = (name, phone, email) => {
    let newContact = {
      name: name,
      phone: phone,
      email: email,
    };
    setContacts([...contacts, newContact]);
  };

  const addAppointment = (title, contact, date, time) => {
    let newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments([...appointments, newAppointment]);
  };

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
