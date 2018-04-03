import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { smoothlyMenu } from '../layouts/Helpers';
import { logout } from '../../redux/actions/UserActions';

class TopHeader extends Component {

    toggleNavigation(e) {
        e.preventDefault();
        // $("body").toggleClass("mini-navbar");
        // smoothlyMenu();
    }

    state = {
      isClicked: true,
    };

    render() {
      // const { isClicked } = this.state;
      // let someElementClass = isClicked ? 'mini-navbar' : '';

      return (
        <div className="row border-bottom">
            <nav className="navbar navbar-static-top white-bg" style={{marginBottom: 0}}>
                {/*<div className="navbar-header">
                    <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                </div>*/}
                <ul className="nav navbar-top-links navbar-right">
                    <li>
                        <a onClick={() => {this.props.logout()}}>
                            <i className="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
      )
    }
}

export default connect(null, { logout })(TopHeader)

//     export function smoothlyMenu() {
//     if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
//         // Hide menu in order to smoothly turn on when maximize menu
//         $('#side-menu').hide();
//         // For smoothly turn on menu
//         setTimeout(
//             function () {
//                 $('#side-menu').fadeIn(400);
//             }, 200);
//     } else if ($('body').hasClass('fixed-sidebar')) {
//         $('#side-menu').hide();
//         setTimeout(
//             function () {
//                 $('#side-menu').fadeIn(400);
//             }, 100);
//     } else {
//         // Remove all inline style from jquery fadeIn function to reset menu state
//         $('#side-menu').removeAttr('style');
//     }
// }
