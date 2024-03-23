import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "./Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
/*const PostList = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

*/
// Fetch
/*
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((date) => {
        addInitialPosts(date.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
*/
// use State without Effects
/*const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((date) => {
        addInitialPosts(date.posts);
      });
    setDataFetched(true);
  }
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
*/
// use Effects Hook
/*
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((date) => {
        addInitialPosts(date.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
*/
// Handling Loading State
/*
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    console.log("fetch start");

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((date) => {
        addInitialPosts(date.posts);
        // agr server se empty aye tu
        //  addInitialPosts([]);
        setfetching(false);
        console.log("fetch returned");
      });
    console.log("fetch end");
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

*/
// Use Effects hook clean-up
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    //console.log("fetch start");
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((date) => {
        addInitialPosts(date.posts);
        setfetching(false);
      });
    return () => {
      console.log("Cleaning up UseEffects");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
