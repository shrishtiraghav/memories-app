import React, { useState} from 'react';

import  Posts from '../components/posts/posts';
import  Form  from '../components/form/form';

import './form.styles.scss';

const FormContainer = () => {
   const [currentId , setCurrentId] = useState(null);

    return(
        <div>
            <div className="app-container">
                <div className="app-navbar">Memories</div>
                <div className="app-intro"> 
                    <div className="app-intro-line">Come lets create memories</div>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </div>
            </div>
            <div className="app-posts">
                    <Posts currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
        </div>
    )
}

export default FormContainer;