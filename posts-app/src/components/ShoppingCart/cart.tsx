import React, { useState } from "react";
import Field from "./field/field";
import "./cart.css";

export default function Cart() {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitted form is ", state);
  };

  const onChange = ({ target }: any) => {
    setState({ ...state, [target.id]: target.value });
  };

  const isValidName = state.name.length < 1 || state.name.length > 3;
  const isValidPhone = state.phone.length < 1 || state.phone.length > 8;
  const isValidAddress = state.address.length < 1 || state.address.length > 30;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Field
          id="name"
          name="name"
          label="Name"
          value={state.name}
          onChange={onChange}
        />
        {isValidName ? null : (
          <div className="invalid-feedback">
            Name must be longer than 3 characters
          </div>
        )}
        <Field
          id="phone"
          name="phone"
          label="Phone"
          control="text"
          value={state.phone}
          onChange={onChange}
        />
        {isValidPhone ? null : (
          <div className="invalid-feedback">
            Phone must be longer than 8 characters
          </div>
        )}
        <Field
          id="email"
          name="email"
          label="Email"
          control="email"
          value={state.email}
          onChange={onChange}
        />
        <Field
          id="address"
          name="address"
          label="Address"
          control="textarea"
          value={state.address}
          onChange={onChange}
        />
        {isValidAddress ? null : (
          <div className="invalid-feedback">
            Address must be longer than 30 characters
          </div>
        )}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
