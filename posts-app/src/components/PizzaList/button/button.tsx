import React from "react";

export default function Button({ onClick, children }: any) {
  return (
    <button className="hide-btn" onClick={onClick}>
      {children}
    </button>
  );
}
