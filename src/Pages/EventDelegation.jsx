import React, { useEffect, useRef, useState } from "react";

const EventDelegation = () => {
  useEffect(() => {
    const target = document.getElementById("todos");
    target.addEventListener("click", (e) => {
      console.log("event-delegation: target (child)", e.target);
      console.log("event-delegation: current target (parent)", e.currentTarget);
    });
  }, []);

  const [todos, setTodos] = useState([]);

  const ref = useRef();

  return (
    <>
      <div>
        <div>
          EventDelegation ({" "}
          <a href="https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983">
            explaination
          </a>
          )
        </div>
        <div
          id="todos"
          // onClick={(e) => {
          //   console.log("event-delegation: target (child)", e.target.id);
          // }}
        >
          {todos?.map((todo, i) => (
            <div key={i}>
              <input type="checkbox" id={todo.name} />
              <label htmlFor={todo.name} id={"label  " + todo.name}>
                {todo.name}
              </label>
            </div>
          ))}
        </div>
        <form
          ref={ref}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(ref.current);
            setTodos([...todos, Object.fromEntries(formData)]);
            ref.current.reset();
          }}
        >
          <input name="name" />
          <button type="submit">Add</button>
        </form>
        <ul>
          <li>
            EVENT.TARGET identifies the HTML elements on which the event
            occurred The
          </li>
          <li>
            event.currentTarget identifies the current target for the event, as
            the event traverses the DOM. It always refers to the element to
            which the event listener has been attached.
          </li>
        </ul>
      </div>

      <div>
        <div>EVENT bubbling (click on children and check console)</div>

        <div
          style={{ margin: "1rem" }}
          onClick={() => {
            console.log("A");
          }}
        >
          a
          <div style={{ margin: "1rem" }} onClick={() => console.log("B")}>
            b
            <div style={{ margin: "1rem" }} onClick={() => console.log("C")}>
              c
              <div
                style={{ margin: "1rem" }}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("D");
                }}
              >
                d (stop propagation)
              </div>
            </div>
          </div>
        </div>

        <div>
          Because of event bubbling you can place an event listener on a single
          parent HTML element that lives above a HTML child, and that event
          listener will get executed whenever an event occurs on any of its
          child nodes — even if these node children are added to the page after
          the initial load!
        </div>
      </div>
    </>
  );
};

export default EventDelegation;
