import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElement/Card';
import classes from './UsersList.module.css';
const UsersList = (props) => {
  if (props.items.length === 0) {
    return <Card className={classes.center}>No Users Found</Card>;
  }
  return (
    <ul className={classes['users-list']}>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
