import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { formatNumber } from '../utils/format';

const CountryList = ({ countries }) => (
  <Container>
    <List>
      {countries.map((country) => (
        <li key={country.cca3}>
          <Card to={`/${country.cca3.toLowerCase()}`}>
            <Flag src={country.flags.svg} alt={country.name.common} />
            <Info>
              <Title>{country.name.common}</Title>
              <Text>
                <strong>Population:</strong> {formatNumber(country.population)}
              </Text>
              <Text>
                <strong>Region:</strong> {country.region}
              </Text>
              <Text>
                <strong>Capital:</strong>{' '}
                {country.capital?.length ? country.capital[0] : null}
              </Text>
            </Info>
          </Card>
        </li>
      ))}
    </List>
  </Container>
);

CountryList.propTypes = {
  countries: PropTypes.array,
};

const Container = styled.section`
  margin-bottom: 2.5rem;
  @media screen and (min-width: 769px) {
    margin-bottom: 5rem;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2.5rem;
  @media screen and (min-width: 769px) {
    gap: 7.5rem;
  }
`;

const Card = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  background-color: var(--element-color);
  border-radius: 0.8rem;
  box-shadow: var(--shadow);
  overflow: hidden;
  @media (hover: hover) {
    transition: transform 0.2s ease-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Flag = styled.img`
  aspect-ratio: 53 / 32; /* To match the design */
  object-fit: cover;
`;

const Info = styled.div`
  padding: 3rem 2.5rem 5rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default CountryList;
