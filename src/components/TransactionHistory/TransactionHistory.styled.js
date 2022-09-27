import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Thead = styled.thead``;
export const Tr = styled.tr`
  :nth-child(odd) {
    background: #f0f0f0;
  }

  :nth-child(even) {
    background: lightgrey;
  }
`;
export const Th = styled.th`
  padding: 10px 20px;
  background: #30d5c8;
  color: #ffff;

  text-shadow: 0 1px 1px #2d2020;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
`;
export const Td = styled.td`
  vertical-align: middle;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
`;
