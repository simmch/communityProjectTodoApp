import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../actions/userActions';

class Login extends Component {

constructor(props){
    super(props)

    this.state = {
        email: '',
        password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount(){
    this.props.getUser();
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit(e){
    e.preventDefault();

    const user = {
        email: this.state.email,
        password: this.state.password
    }

    this.props.emailAndPasswordSignUp(user);
}

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-offset-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">    
                            <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control no-border"
                                    placeholder="Enter Email"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                            <label>Password</label>
                                <input 
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    required
                                    onChange={this.handleChange}
                                />
                                <small className="text-muted">
                                    Must be 8-15 characters long 
                                </small>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mb2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) 
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser })(Login);