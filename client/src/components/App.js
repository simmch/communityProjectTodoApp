import React, { Component } from 'react';
import _ from 'lodash';
import '../styles/App.css';
import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';
import { getNotes, deleteNote } from '../actions/noteAction';
import '../styles/Task.css';

class App extends Component {
  constructor(props){
    super(props)

  }

componentDidMount() {
  this.props.getUser();
  this.props.getNotes();
}

  render(){
      return(
          <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-sm-3">
            <div className="col-md-8">
                {this.renderArticle()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderArticle(){
    return _.map(this.props.note, (note, key) => {
      if(this.props.user.uid === note.uid){
        return (
          <div key={key} >
            <div class="card text-white bg-dark mb-3">
              <div class="card-header">
               {this.props.user.uid == note.uid ? <button className="float-right btn btn-danger fa fa-2x fa-window-close delete" data-toggle="tooltip" onClick={()=> this.props.deleteNote(key)}></button> : <button hidden className="float-right btn btn-danger">Delete</button> } 
                <img src={note.image} width="50" height="50" className="d-inline-block"  /><span className="displayName">{note.displayName}</span>
                </div>
              <div class="card-body">
                <h5 class="card-title">{note.title}</h5>
                <p class="card-text">{note.body}</p>
              </div>
            </div>
          </div> 
        )
      } else if(this.props.user.uid != note.uid){
        return (
          <div key={key}>
            <div class="card text-white bg-dark mb-3">
                <div class="card-header text-right">
                <span className="displayName">{note.displayName}</span>
                <img src={note.image} width="50" height="50" className="d-inline-block"  />
                {/* {this.props.user.uid == note.uid ? <button className="float-right btn btn-danger delete" onClick={()=> this.props.deleteNote(key)}>Delete</button> : <button hidden className="float-right btn btn-danger">Delete</button> }  */}
                </div>
              <div class="card-body">
                <h5 class="card-title">{note.title}</h5>
                <p class="card-text">{note.body}</p>
              </div>
            </div>
          </div>
        )
      } else {
        return <div>Hey</div>
      }
      
    })
   }

}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    note: state.note,
    delete: state.delete
  }
}

export default connect(mapStateToProps, {getUser, getNotes, deleteNote})(App);
