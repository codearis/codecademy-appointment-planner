import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const { appointments, contacts, addAppointment } = props;
  /*
  Define state variables for 
  appointment info

  */

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const [appCurrentTitle, setAppCurrentTitle] = useState("");
  const [appContact, setAppContact] = useState("");
  const [appDate, setAppDate] = useState("");
  const [appTime, setAppTime] = useState("");

  const clearAppointments = () => {
    setAppCurrentTitle("");
    setAppContact("");
    setAppDate("");
    setAppTime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(appCurrentTitle, appContact, appDate, appTime);
    clearAppointments();
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={appCurrentTitle}
          setTitle={setAppCurrentTitle}
          setContact={setAppContact}
          date={appDate}
          setDate={setAppDate}
          time={appTime}
          setTime={setAppTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
          getTodayString={getTodayString}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {appointments ? <TileList appointments={appointments} /> : undefined}
      </section>
    </>
  );
};
