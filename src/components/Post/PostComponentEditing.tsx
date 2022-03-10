import { useState } from "react";
import styled from "styled-components";
import { FormStyled } from "../../App";
import { useInEditingContext } from "../../context/InEditingContext";
import { usePostsContext } from "../../context/postsContext";
import { PostType } from "../../types/post";

const PostStyledForm = styled(FormStyled)`
  margin: var(--size-2);
  background-color: var(--surface-2);
  border: var(--border-size-1) var(--gray-9) solid;

  label {
    width: var(--size-8);
  }
`;

export default function PostComponentEditing({ post }: { post: PostType }) {
  const [posts, setPosts] = usePostsContext();
  const [, setInEditing] = useInEditingContext();
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  function updatePost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        ...post,
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json: PostType) => {
        setPosts(
          posts.map((localPost) => {
            if (localPost.id === post.id) {
              return {
                ...post,
                title: title,
                body: body,
              };
            }
            return localPost;
          })
        );
        setInEditing(0);
      });
  }

  return (
    <PostStyledForm
      onSubmit={(e) => {
        e.preventDefault();
        updatePost();
      }}
    >
      <div>
        <label htmlFor="titlePost">Title</label>
        <input
          type="text"
          name="title"
          id="titlePost"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value ?? "");
          }}
        />
      </div>
      <div>
        <label htmlFor="bodyPost">Body</label>
        <input
          type="text"
          name="body"
          id="bodyPost"
          value={body}
          onChange={(e) => {
            setBody(e.target.value ?? "");
          }}
        />
      </div>
      <button>submit</button>
    </PostStyledForm>
  );
}
