import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
  padding: 10px;
  gap: 10px;
`;

function onlineStatus({ isOnline }) {
  return isOnline ? '#00a000' : '#ff2400';
}
export const Status = styled.span`
  display: flex;
  align-items: center;

  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${onlineStatus};
`;
export const Avatar = styled.img`
  border-radius: 6px;
  border: 1px solid lightgrey;
  background-color: rgba(142, 135, 149, 0.198);
`;
export const Name = styled.p`
  font-weight: 700;
`;
