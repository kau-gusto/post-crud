import React, { useState } from "react";
import styled from "styled-components";
import { usePostsContext } from "./context/postsContext";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: var(--size-2);
  margin-bottom: 20px;

  div {
    display: flex;
    width: 100%;
  }

  input {
    flex: 1;
    border: var(--border-size-1) var(--gray-9) solid;
    border-radius: var(--radius-2);
  }

  label {
    width: var(--size-9);
  }

  input,
  label {
    margin: var(--size-1);
  }

  button {
    border: var(--border-size-1) var(--gray-9) solid;
    border-radius: var(--radius-2);
  }
`;

function App() {
  const [posts, setPosts] = usePostsContext();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const addPost: React.FormEventHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(({ title, id }: { title: string; id: number }) => {
        setPosts([{ id, userId: parseInt(userId), body, title }, ...posts]);
        setTitle("");
        setBody("");
        setUserId("");
      })
      .catch(console.error);
  };

  return (
    <FormStyled onSubmit={addPost}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value ?? "");
          }}
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          id="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="userId">UserId</label>
        <input
          type="text"
          name="userId"
          id="userId"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value ?? "");
          }}
        />
      </div>
      <br />
      <button>submit</button>
    </FormStyled>
  );
}

export default App;
