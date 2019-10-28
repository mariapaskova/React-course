import React, { useState } from "react";

export default function Cart() {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const onSubmit = (event: any) => {
    console.log(event);
  };

  const onChangeName = ({ target }: any) => {
    console.log(target, target.value, " Changeee");
    setState({ ...state, name: target.value });
  };

  const onChangePhone = ({ target }: any) => {
    console.log(target, target.value, " Changeee");
    setState({ ...state, phone: target.value });
  };

  const onChangeEmail = ({ target }: any) => {
    console.log(target, target.value, " Changeee");
    setState({ ...state, email: target.value });
  };

  const onChangeAddress = ({ target }: any) => {
    console.log(target, target.value, " Changeee");
    setState({ ...state, address: target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Field
          id="name"
          name="name"
          label="Name"
          value={state.name}
          onChange={onChangeName}
        />
        {/* <Field
          id="phone"
          name="phone"
          label="Phone"
          value={state.phone}
          onChange={onChangePhone}
        />
        <Field
          id="email"
          name="email"
          label="Email"
          control="email"
          value={state.email}
          onChange={onChangeEmail}
        />
        <Field
          id="address"
          name="address"
          label="Address"
          control="textarea"
          value={state.address}
          onChange={onChangeAddress}
        /> */}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function Field({ label, name, control, ...inputProps }: any) {
  let Control = (props: any) => <input type={control || "text"} {...props} />;

  if (control === "textarea") {
    Control = props => <textarea {...props} />;
  }

  return (
    <div>
      <label htmlFor={inputProps.id}>{label}: </label>
      <Control id={name} name={name} {...inputProps} />
    </div>
  );
}
