import React from 'react';
import { Link } from 'react-router-dom';

const Popup = ({title, description, showhide, buttonClose, children, onSubmit}: { children: any | undefined }) => {

  const handleClearMessages = function(e) {
    if (e.keyCode === 27) {
      console.log('You pressed the escape key!')
    }

      // props.clearMessages(); // create classroom, teacher or whatever
      // should be passed to the component
  }

  return (
    <div className={"modal inmodal " + ( showhide ? 'show' : 'hide') }
         tabIndex="-1" role="dialog" aria-hidden="true" onKeyDown={this.handleKeyDown}>
        <div className="modal-dialog">
          <form onSubmit={onSubmit}>
            <div className="modal-content animated flipInY">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" onClick={buttonClose}><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                    <h4 className="modal-title">{title}</h4>
                    <small className="font-bold">{description}</small>
                </div>
                <div className="modal-body">
                    { children }
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-white" onClick={buttonClose}>Close</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
            </div>
          </form>
        </div>
    </div>
  )
};


// const ClearButton = props => {
//
//
//
//    let button = <button onClick={handleClearMessages} >Clear</button>;
//    if ( props.isDisabled ) {
//        button = <button disabled="disabled">Clear</button>;
//    }
//    return <div>{button}</div>;
// }

export default Popup;
