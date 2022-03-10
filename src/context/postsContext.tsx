import React, {
  createContext,
  ReactElement,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { PostType } from "../types/post";
import { StateType } from "../types/state";

type PostContextType = StateType<PostType[]>;

interface paramsType {
  children: ReactElement;
}

const PostsContext = createContext<PostContextType>([[], () => {}]);

export default function PostsProvider({ children }: paramsType) {
  const [posts, setPosts] = useState<PostType[]>([]);

  function requestPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Array<PostType>) => {
        setPosts(data);
      });
  }

  useLayoutEffect(() => {
    requestPosts();
  }, []);

  return (
    <PostsContext.Provider value={[posts, setPosts]}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePostsContext() {
  return useContext(PostsContext);
}
