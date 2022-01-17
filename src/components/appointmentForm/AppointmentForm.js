import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const {
    contacts,
    title,
    setTitle,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
    getTodayString,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="date-time">
        <input
          type="date"
          min={`${getTodayString()}`}
          value={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          placeholder="Time"
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <ContactPicker
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
      />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
