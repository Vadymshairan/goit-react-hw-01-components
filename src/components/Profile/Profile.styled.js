import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin: 40px auto;
  max-width: 250px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
`;

export const Description = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 70%;
  margin: 0 auto;
  border-radius: 100%;
  margin-bottom: 10px;
  background-color: rgba(142, 135, 149, 0.198);
`;

export const Name = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const Location = styled.p``;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;

  border: 1px solid lightgrey;
  background-color: rgba(142, 135, 149, 0.198);
`;

export const Quantity = styled.span`
  font-weight: 700;
`;

export const Label = styled.span``;
