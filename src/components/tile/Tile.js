import React from "react";

export const Tile = (props) => {
  const { contacts, appointments } = props;
  let showDate = new Date(appointments?.date).toLocaleString();

  return (
    <>
      {contacts ? (
        <>
          <p className="tile-title">{contacts.name}</p>
          <p className="tile">{contacts.phone}</p>
          <p className="tile">{contacts.email}</p>
        </>
      ) : undefined}
      {appointments ? (
        <>
          <p className="tile-title">{appointments.title}</p>
          <p className="tile">{appointments.contact}</p>
          <p className="tile">{showDate}</p>
          <p className="tile">{appointments.time}</p>
        </>
      ) : undefined}
    </>
  );
};
