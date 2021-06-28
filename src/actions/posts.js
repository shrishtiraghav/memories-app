import  * as api from '../api/index';

export const getPosts = (page) => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts(page);
        dispatch({ type: 'FETCH_ALL' , payload: data});
        console.log(data)
    }catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE' , payload: data});
        console.log("success")
    }catch (error){
        dispatch({type: 'CREATE_ERROR' , payload: error.message});
        console.log(error.message);
    }
}

export const updatePost = (id , post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id , post);

        dispatch({type: 'UPDATE' , payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type: 'DELETE' , payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({type: 'UPDATE' , payload: data});
    } catch (error) {
       console.log(error) 
    }
}
