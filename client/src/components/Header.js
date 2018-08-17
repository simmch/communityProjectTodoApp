import React, { Component } from 'react';
import { connect } from 'react-redux'
import {googleLogin, logout} from '../actions/userActions';
import NoteModal from './NoteModal';
import '../styles/Header.css';


class Header extends Component {

    render(){
        const { user, note } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">

                <div className="container-fluid">
                {
                    this.props.user === 'default' ? (
                            <a class="nav-link navbar-brand login" onClick={this.props.googleLogin}>Google Login</a>
                    ) : (
                        <div className="container-fluid">
                        <img src={user.photoURL} width="75" height="75" className="d-inline-block shadow"  />
                        <span className="logout" onClick={this.props.logout}><b>Logout</b></span>
                        <button className="float-right fa fa-sticky-note-o note fa-2x btn-lg btn-warning shadow" data-toggle="modal" data-dismiss="modal" data-target="#myModal"></button>
                        </div>
                    )
                }

                <NoteModal/>

                </div>
            </nav>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        note: state.note
    }
}

export default connect(mapStateToProps, {googleLogin, logout})(Header);