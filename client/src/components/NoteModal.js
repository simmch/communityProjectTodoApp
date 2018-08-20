import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Message from './Message';
import {getNotes} from '../actions/noteAction';

class NoteModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: '',
            message: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event){
        event.preventDefault();
        let image = this.props.user.photoURL;
        const crt_timestamp = new Date().toISOString();
        const note = {
            title: this.state.title,
            body: this.state.body,
            uid: this.props.user.uid,
            photo: image,
            displayName: this.props.user.displayName,
            crt_timestamp: crt_timestamp
        }

       
        axios.post('/addNote', {note})
        .then(res=> {
            this.setState({
                message: 1
            })
            this.props.getNotes();
        })
        .catch((err)=> {
            this.state.message = 20;
            console.log(`Error when posting data to database: ${err}`);
        })
        
        setTimeout(()=>{
            this.setState({
                message: 0
            })
        }, 3000)


        this.setState({
            title: '',
            body: '',
        })

    }

    render(){
        return(
            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content text-dark  bg-light">

                    <div class="modal-header">
                        <h4 class="modal-title">New Task</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Task Title</label>
                            <input
                            required 
                            type="text"
                            onChange={this.handleChange} 
                            value={this.state.title}
                            name="title"
                            maxLength="45"
                            className="form-control" 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Details</label>
                            <textarea
                            required 
                            onChange={this.handleChange}
                            value={this.state.body}
                            name="body"
                            maxLength="140"
                            className="form-control" />
                            <small  className="form-text text-muted text-white">Max Length is 140 Characters.</small>
                        </div>

                        <button class="btn btn-info container-fluid" type="submit" >Add</button>
                    </form>
                    </div>

                    <Message message={this.state.message}/>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return{
        note: state.note,
        user: state.user
    }
}

export default connect(mapStateToProps, {getNotes})(NoteModal);