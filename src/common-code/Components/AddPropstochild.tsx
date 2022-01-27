import React, { ReactElement } from "react";

interface Params {
  // This needs to match the other declared keys and values
  [key: string]: object;

  children: JSX.Element | JSX.Element[];
}

function AddPropstochild({ children, ...rest }: Params) {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (!child || ["string", "number", "boolean"].includes(typeof child))
          return child;

        return React.cloneElement(child as ReactElement, rest);
      })}
    </>
  );
}

// const AddPropstochild = (: {
//   children: JSX.Element | JSX.Element[];
// }) => {
// };

export default AddPropstochild;
