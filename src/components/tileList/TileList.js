import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const { contacts, appointments } = props;

  return (
    <>
      {appointments
        ? appointments.map((e, idx) => <Tile appointments={e} key={idx} />)
        : undefined}
      {contacts
        ? contacts.map((e, idx) => <Tile contacts={e} key={idx} />)
        : undefined}
    </>
  );
};
