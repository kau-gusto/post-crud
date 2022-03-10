import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Post from "../components/Post/PostComponent";
import { useInEditingContext } from "../context/InEditingContext";
import { usePostsContext } from "../context/postsContext";
import { PostType } from "../types/post";

const HomeStyled = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  height: 70vh;
  margin-bottom: 1rem;
  overflow: auto;
`;

const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: transparent;
    color: var(--gray-7);
    border: none;
    font-size: var(--font-size-1);

    &:hover {
      color: #111;
      transform: scale(1.1);
    }
  }
`;

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setInEditing] = useInEditingContext();
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = usePostsContext();
  const [page, setPage] = useState(() => {
    const page = parseInt(searchParams.get("page") ?? "1");
    if (!isNaN(page)) {
      return page;
    }
    return 1;
  });

  const nPostsPage = 5;

  const calcTotalPages = useCallback(() => {
    const totalPages = posts.length / nPostsPage;

    return totalPages > Math.floor(totalPages)
      ? Math.floor(totalPages) + 1
      : Math.floor(totalPages);
  }, [posts, nPostsPage]);

  function handleAddPage() {
    setPage(page + 1);
  }

  function handleDownPage() {
    setPage(page - 1);
  }

  function onDelete(id: number) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPosts(posts.filter((object) => object.id !== id));
      })
      .catch(() => {
        alert("Não foi possivel remover o post");
      });
  }

  useEffect(() => {
    setInEditing(0);
    const numLocalPage = parseInt(searchParams.get("page") ?? "1");
    if (page !== numLocalPage) {
      setSearchParams({ page: page.toString() });
    }
  }, [page]);

  useEffect(() => {
    const localPage = parseInt(searchParams.get("page") ?? "1");
    if (!isNaN(localPage)) {
      if (page !== localPage) {
        setPage(localPage);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const localTotalPages = calcTotalPages();
    setTotalPages(localTotalPages);
    if (localTotalPages !== 0) {
      setPage(page > localTotalPages ? localTotalPages : page);
    } else {
      setPage(1);
    }
  }, [posts]);

  return (
    <>
      <HomeStyled>
        {posts
          .filter((_, index) => {
            return (
              index >= (page - 1) * nPostsPage && index < page * nPostsPage
            );
          })
          .map((post: PostType) => {
            return <Post key={post.id} post={post} onDelete={onDelete} />;
          })}
      </HomeStyled>
      <NavStyled>
        {page > 1 ? <button onClick={handleDownPage}>{"<"}</button> : null}
        {page}
        {page < totalPages ? (
          <button onClick={handleAddPage}>{">"}</button>
        ) : null}
      </NavStyled>
    </>
  );
}
