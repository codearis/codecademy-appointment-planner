import React from "react";

export const ContactPicker = (props) => {
  const { contacts, onChange } = props;

  return (
    <select onChange={onChange}>
      <option>No contact</option>
      {contacts.map((e, idx) => (
        <option key={idx}>{e.name}</option>
      ))}
    </select>
  );
};
