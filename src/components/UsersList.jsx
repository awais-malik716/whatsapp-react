import React from 'react';
import PropTypes from "prop-types"; 

const UsersList = (props) => {
    return (
        <div className="user-div">
            <img src={props.image}></img>
            <div className="user-data">
                <h3>{props.name}</h3>
                <p>{props.message}</p>
            </div>
            <span>{props.time}</span>
        </div>
    );
};

// eslint-disable-next-line react/no-typos
UsersList.PropTypes = {
    name : PropTypes.string,
    image : PropTypes.string,
    message : PropTypes.string,
    time : PropTypes.string,
}

export default UsersList;