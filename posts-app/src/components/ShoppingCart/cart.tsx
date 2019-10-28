import React, { useState } from "react";
import Field from "./field/field";

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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Field
          id="name"
          name="name"
          label="Name"
          value={state.name}
          control="text"
          onChange={onChange}
        />
        <Field
          id="phone"
          name="phone"
          label="Phone"
          control="text"
          value={state.phone}
          onChange={onChange}
        />
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

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
