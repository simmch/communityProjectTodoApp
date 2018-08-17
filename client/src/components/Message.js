import React from 'react';

const Message = props => {
    
    var value = props.message
    var success = 1;
    var fail = 20;

    if(value === success) {
        return (
            <div class="modal-footer">
                <div class="alert alert-success container-fluid" role="alert">
                    Success
                </div>
            </div>
        )
    } else if (value === fail) {
        return (
            <div class="modal-footer">
                <div class="alert alert-danger container-fluid" role="alert">
                    Failed
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default Message;