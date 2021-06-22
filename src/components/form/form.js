import React , {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost , updatePost} from '../../actions/posts';

import "./form.styles.scss";

const Form = ( {currentId,setCurrentId} ) => {
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null);

    const [postData , setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    useEffect(() => {
        if(post) setPostData(post);
    },[post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            console.log(currentId)
            dispatch(updatePost(currentId,postData))
        }
        else{
            dispatch(createPost(postData))
        }
       
    }
    return (
        
        <div className="app-form-container">
            <div className="app-form-title">Creating a memory</div>
            <form onSubmit = {handleSubmit} className="app-form">
                <input placeholder="Creator" className="app-input-field" value={postData.creator} onChange={(e) => setPostData({...postData , creator: e.target.value})}></input>
                <input placeholder="Title" className="app-input-field" value={postData.title} onChange={(e) => setPostData({...postData , title: e.target.value})}></input>
                <input placeholder="Message" className="app-input-field" value={postData.message} onChange={(e) => setPostData({...postData , message: e.target.value})}></input>
                <input placeholder="Tags" className="app-input-field" value={postData.tags} onChange={(e) => setPostData({...postData , tags: e.target.value})}></input>
                <div>
                    <FileBase type='file' multiple={false} onDone = {({base64}) => setPostData({...postData, selectedFile : base64}) }/>
                </div>
                <button className="app-button-submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;