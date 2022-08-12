import React, { FunctionComponent } from "react";
import styles from '../styles/Home.module.css'

export default function Users(props) {
  return (
    <div>
      {props.users.map((user, index) => (

          <div className={styles.card}>
            {user.name} {user.surename}
            <br></br>
            {user.age} years old, {user.job}
            <br></br>
            {user.mail}
            <br></br>
            {user.town}
          </div>

      ))}
    </div>
  );
};

