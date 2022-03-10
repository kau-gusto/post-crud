import { useMemo } from "react";
import { useParams } from "react-router-dom";
import PostComponent from "../components/Post/PostComponent";
import { usePostsContext } from "../context/postsContext";

export default function Post() {
  const params = useParams<"id">();
  const id = params.id ?? "0";
  const [posts, setPosts] = usePostsContext();
  const [post] = posts.filter((postLocal) => postLocal.id == parseInt(id));

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

  return useMemo(() => {
    if (post) {
      return <PostComponent post={post} onDelete={onDelete}></PostComponent>;
    } else {
      return <></>;
    }
  }, [post]);
}
