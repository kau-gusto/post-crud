import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useInEditingContext } from "../../context/InEditingContext";
import { PostType } from "../../types/post";
import PostComponentEditing from "./PostComponentEditing";

interface paramsType {
  post: PostType;
  onDelete: (id: number) => void;
}

const PostStyled = styled.div`
  display: flex;
  align-items: center;
  border: var(--border-size-1) solid var(--gray-9);
  border-radius: var(--radius-2);
  margin: var(--size-2);
  background-color: var(--surface-2);

  div.flex {
    flex: 1;
    margin: var(--size-2);

    h1 {
      font-size: var(--font-size-3);
      max-inline-size: 100%;
    }

    p {
      font-size: var(--font-size-1);
      max-inline-size: 100%;
    }
  }

  div.buttons {
    display: flex;
    flex-direction: column;
    height: 100%;

    button,
    a {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      width: var(--size-10);
      color: var(--gray-1);
      margin: auto;
      transition: background-color 0.1s;
    }

    button.delete {
      border-top-right-radius: var(--radius-2);
      background-color: var(--red-5);
      &:hover {
        background-color: var(--red-6);
      }
    }

    a {
      background-color: var(--green-5);
      &:hover {
        background-color: var(--green-6);
      }
    }

    button.edit {
      border-bottom-right-radius: var(--radius-2);
      background-color: var(--blue-5);
      &:hover {
        background-color: var(--blue-6);
      }
    }
  }
`;

function PostComponent({ post, onDelete }: paramsType) {
  const [inEditing, setInEditing] = useInEditingContext();
  if (inEditing === post.id) {
    return <PostComponentEditing post={post} />;
  }
  return (
    <PostStyled>
      <div className="flex">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <div className="buttons">
        <button
          className="delete"
          onClick={() => {
            onDelete(post.id);
          }}
        >
          delete
        </button>
        <Link to={`/post/${post.id}`}>post</Link>

        <button
          className="edit"
          onClick={() => {
            if (inEditing !== post.id) {
              setInEditing(post.id);
            }
          }}
        >
          edit
        </button>
      </div>
    </PostStyled>
  );
}

export default memo(PostComponent);
