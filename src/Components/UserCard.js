import React from 'react';
import Styles from '../Style/UserCard.module.css';

const UserCard = ({ props }) => {
    const { first_name, last_name, email, avatar } = props;
    return (
        <div className={Styles.card}>
            <div className={Styles.imagediv}>
            <img className={Styles.userImage} src={avatar} alt={first_name} />
            </div>
            <div className={Styles.detailsDiv}>
                <p className={Styles.userName}>{first_name} {last_name}</p>
                <p className={Styles.userEmail}>{email}</p>
            </div>
        </div>
    );
};

export default UserCard;