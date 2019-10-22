import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBlog } from '../../actions/blogs';

export class Form extends Component {
    state = {
        title: "",
        contenido: ""
    };

    static propTypes = {
        addBlog: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]:e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { title, contenido } = this.state;
        const blog = { title, contenido };
        this.props.addBlog(blog);
        this.setState({
            title: "",
            contenido: ""
        }); 
    };

    render() {
        const { title, contenido } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Blogs Form</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input className="form-control" type="text" name="title" onChange={this.onChange} value={title} />
                    </div>
                    <div className="form-group">
                        <label>Contenido</label>
                        <textarea className="form-control" type="text" name="contenido" onChange={this.onChange} value={contenido} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {addBlog})(Form);
