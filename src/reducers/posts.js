const reducers = (state = [] , action) => {
    switch (action.type) {
        case 'DELETE':
            return state.posts.filter((post) => post._id!== action.payload);
        case 'UPDATE':
            return state.posts.map((post) => post._id === action.payload._id ? action.payload : post);

        case 'FETCH_ALL':
            return {
                ...state, 
                posts: action.payload.data, 
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages

            };
        
        case 'CREATE':
            return [...state.posts , action.payload];

        default:
            return state;
    }
}

export default reducers;