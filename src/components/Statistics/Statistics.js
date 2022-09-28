import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
  getRandomColor,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(el => (
          <Item key={el.id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
