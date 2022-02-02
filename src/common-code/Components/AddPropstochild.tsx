import React, { ReactElement } from "react";

interface Params {
  [key: string]: any;

  children: JSX.Element | JSX.Element[];
}

function AddPropstochild({ children, ...rest }: Params) {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (!child || ["string", "number", "boolean"].includes(typeof child)) {
          return child;
        }

        return React.cloneElement(child as ReactElement, {
          ...rest,
          style: { ...(child.props.style || {}), ...(rest.style || {}) },
        });
      })}
    </>
  );
}

export default AddPropstochild;
