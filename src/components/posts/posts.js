import React from 'react';
import { useSelector } from 'react-redux';

import Post from './post/post';
import "./posts.styles.scss";

const Posts = ( {currentId ,setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
   <div>{
       posts.length ? <div className="app-post-card">
           {posts.map((post) => (
               <div key={post._id} className="app-post-container">
                   <Post post={post} setCurrentId={setCurrentId}/>
               </div>
           ))}
       </div> : <i class="fa fa-spinner app-spinner"></i>}
    </div>
    );
}

export default Posts;