import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  margin: 20px auto;
  max-width: 250px;
  text-align: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  align-items: center;
  padding: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 100%;
  padding: 5px;

  border: 1px solid lightgrey;
  background-color: rgba(142, 135, 149, 0.198);
`;
export const Label = styled.span`
  margin-bottom: 10px;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;
