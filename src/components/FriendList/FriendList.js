import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return <List>{friends.map(FriendListItem)}</List>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
