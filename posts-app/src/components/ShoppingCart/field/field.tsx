import React, { useState } from "react";

const CONTROLS: any = {
  undefined: (props: any) => <input type="text" {...props} />,
  text: (props: any) => <input type="text" {...props} />,
  email: (props: any) => <input type="email" {...props} />,
  textarea: (props: any) => <textarea {...props} />
};

export default function Field({ label, name, control, ...inputProps }: any) {
  let Control = CONTROLS[control || "text"];

  return (
    <div>
      <label htmlFor={inputProps.id}>{label}: </label>
      <Control id={name} name={name} {...inputProps} />
    </div>
  );
}
