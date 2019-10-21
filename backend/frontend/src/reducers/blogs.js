import { GET_BLOGS, DELETE_BLOG } from '../actions/types.js';

const initialState = {
    blogs: []
};

export default function(state = initialState, action){
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            };
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog.id !== action.payload)
            };
        default:
            return  state;
    }
}
