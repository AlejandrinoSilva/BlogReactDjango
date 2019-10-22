import axios from 'axios';
import { createMessage } from "./messages"
import { GET_BLOGS, DELETE_BLOG, ADD_BLOG, GET_ERRORS } from './types';

// Ver blogs
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
            dispatch(createMessage({ blogDelete: "Blog Eliminado"}));
            dispatch({
                type: DELETE_BLOG,
                payload: id
            });
        }).catch(err => console.log(err));
};

// Agregar blogs
export const addBlog = blog => dispatch => {
    axios.post('/api/blogs/', blog)
        .then(res => {
            dispatch({
                type: ADD_BLOG,
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};
