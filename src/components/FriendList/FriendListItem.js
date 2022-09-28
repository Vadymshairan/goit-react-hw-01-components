import PropTypes from 'prop-types';

import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ userAvatar, userName, userStatus }) => {
  return (
    <Item>
      <Status isOnline={userStatus}></Status>
      <Avatar src={userAvatar} alt="User avatar" width="48" />
      <Name>{userName}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userStatus: PropTypes.bool.isRequired,
};
