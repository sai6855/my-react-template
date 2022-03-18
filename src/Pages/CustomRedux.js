import React, { useRef } from "react";
import {
  useDispatch,
  useSelector,
} from "../Interview-questions/implement-redux/custom-react-redux";

const CustomRedux = () => {
  const state = useSelector();
  const formRef = useRef();
  const userformRef = useRef();

  const id = state.todos.todos.length;
  const userid = state.users.users.length;

  const dispatch = useDispatch();

  const firstNameRef = useRef();

  return (
    <>
      <div>
        <p>TODOS</p>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current);
            dispatch({
              type: "ADD_TODO",
              payload: Object.fromEntries(formData),
            });
            formRef.current.reset();
          }}
        >
          <input type="text" name="todo" placeholder="todo" />
          <input type="hidden" name="id" value={"todo" + id} />
          <button type="submit">Submit</button>
        </form>

        <div>
          {state.todos.todos.map((todo) => (
            <div key={todo.id} style={{ margin: "1rem" }}>
              {todo.todo}
              <button
                style={{ marginLeft: "1rem" }}
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>USERS</p>
        <form
          ref={userformRef}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(userformRef.current);
            dispatch({
              type: "ADD_USER",
              payload: Object.fromEntries(formData),
            });
            userformRef.current.reset();
            firstNameRef.current.focus();
          }}
        >
          <input
            type="text"
            ref={firstNameRef}
            name="firstName"
            placeholder="first name"
          />
          <input type="text" name="lastName" placeholder="last name" />
          <input type="hidden" name="id" value={"user" + userid} />
          <button type="submit">Submit</button>
        </form>

        <div>
          {state.users.users.map((user) => (
            <div key={user.id} style={{ margin: "1rem" }}>
              {user.firstName}
              {user.lastName}
              <button
                style={{ marginLeft: "1rem" }}
                onClick={() =>
                  dispatch({ type: "DELETE_USER", payload: user.id })
                }
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomRedux;
