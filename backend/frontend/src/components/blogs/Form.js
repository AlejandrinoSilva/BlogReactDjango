import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Form extends Component {
    state = {
        title: "",
        contenido: ""
    };

    onChange = e => this.setState({ [e.target.title]:e.target.value });

    onSubmit = e => {
        e.preventDefault();
        console.log("submit");
    };

    render() {
        const { title, contenido } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Blogs Form</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input className="form-control" type="text" name="title" onChange={this.onChange} value={title}></input>
                    </div>
                    <div className="form-group">
                        <label>Contenido</label>
                        <textarea className="form-control" type="text" name="contenido" onChange={this.onChange} value={contenido}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    };
}

export default Form
