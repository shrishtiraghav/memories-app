import React,  {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getPosts } from './actions/posts';

import FormContainer from './containers/form.container';

import "./index.css";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch])

    return(
       <FormContainer/>
    )
}

export default App;