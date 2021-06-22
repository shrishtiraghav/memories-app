import React from "react";
import moment from "moment";
import {useDispatch} from 'react-redux';
import {deletePost , likePost} from '../../../actions/posts';
import "./post.styles.scss";

const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch();
  console.log(post);
  return (
    <div className="app-card">
      <div className="app-overlay-1">{post.creator}</div>
      <div className="app-overlay-2">
        {moment(post.createdAt).fromNow()}
      </div>
      <div className="app-overlay-3" onClick={() => setCurrentId(post._id)}><i class="fa fa-pencil"></i></div>
      <div className="app-media">
        <img src={post.selectedFile} className="app-media" alt=""></img>
      </div>
      <div className="app-details">
        <div>{post.tags.map((tag) => `#${tag}`)}</div>
      </div>
      <div className="app-message">{post.message}</div>
      <div className="app-actions">
        <button onClick={() => dispatch(likePost(post._id))} className="app-actions-button">Like {post.likeCount} <i class="fa fa-thumbs-up"></i></button>
        <button className="app-actions-button" onClick={() => dispatch(deletePost(post._id))}>Delete <i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
  );
};

export default Post;
