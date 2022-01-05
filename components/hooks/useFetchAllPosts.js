import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore"

export default function useFetchAllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");
    getDocs(postsCollectionRef).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }).catch((e) => {
      console.log(e)
    }) ;
  }, []);

  return { posts } ;
};