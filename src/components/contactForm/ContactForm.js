import React from "react";

export default function ContactForm({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        value={phone}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        placeholder="Phone number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
}
