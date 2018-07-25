import React, { Component } from "react";
//import propTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card card-body mb-3">
                <h4 className="">
                  {contact.name}{" "}
                  <i onClick={this.onShowClick} className="fas fa-sort-down" />
                  <i
                    className="fas fa-times"
                    style={{
                      color: "red",
                      float: "right",
                      cursor: "pointer"
                    }}
                    onClick={this.onDeleteClick.bind(
                      this,
                      contact.id,
                      dispatch
                    )}
                  />
                  <Link to={`contact/edit/${contact.id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        color: "red",
                        float: "right",
                        cursor: "pointer",
                        marginRight: "3rem"
                      }}
                      onClick={this.onDeleteClick.bind(
                        this,
                        contact.id,
                        dispatch
                      )}
                    />
                  </Link>
                </h4>
                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">Email: {contact.email}</li>
                    <li className="list-group-item">Phone: {contact.phone}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   contact: propTypes.object.isRequired
// };
