import axios from 'axios';
import { GET_BLOGS, DELETE_BLOG } from './types';

export const getBlogs = ()=> dispatch => {
    axios.get('/api/blogs/')
        .then(res => {
            dispatch({
                type: GET_BLOGS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// Delete blogs
export const deleteBlog = id => dispatch => {
    axios.delete(`/api/blogs/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_BLOG,
                payload: id
            });
        }).catch(err => console.log(err));
};
