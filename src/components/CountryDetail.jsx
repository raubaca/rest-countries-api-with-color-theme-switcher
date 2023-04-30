import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppContext } from '../App';
import { formatNumber } from '../utils/format';

const CountryDetail = ({ country }) => {
  const { data } = useContext(AppContext);

  const nativeName = Object.values(country.name?.nativeName)[0].common;
  const population = formatNumber(country.population);
  const capital = country.capital?.length ? country.capital[0] : null;
  const tld = country.tld[0];
  const currencies = Object.values(country.currencies)[0].name;
  const languages = Object.values(country.languages).join(', ');
  const borders = country.borders?.map((id) => (
    <Tag key={id} to={`/${id.toLowerCase()}`}>
      {data.find((border) => border.cca3 === id).name.common}
    </Tag>
  ));

  return (
    <Detail>
      <Flag src={country.flags?.svg} alt={country.name?.common} />
      <Info>
        <Title>{country.name?.common}</Title>
        <List>
          <Item>
            <strong>Native Name:</strong> {nativeName}
          </Item>
          <Item>
            <strong>Population:</strong> {population}
          </Item>
          <Item>
            <strong>Region:</strong> {country.region}
          </Item>
          <Item>
            <strong>Sub Region:</strong> {country.subregion}
          </Item>
          <Item>
            <strong>Capital:</strong> {capital}
          </Item>
        </List>
        <List>
          <Item>
            <strong>Top Level Domain:</strong> {tld}
          </Item>
          <Item>
            <strong>Currencies:</strong> {currencies}
          </Item>
          <Item>
            <strong>Languages:</strong> {languages}
          </Item>
        </List>
        <Border as="p">
          <strong>Border Countries:</strong> {borders}
        </Border>
      </Info>
    </Detail>
  );
};

CountryDetail.propTypes = {
  country: PropTypes.object,
};

const Detail = styled.div`
  display: grid;
  gap: 5rem;
  @media screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-items: center;
  }
`;

const Flag = styled.img`
  box-shadow: var(--shadow);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'header header'
      'left right'
      'footer footer';
    gap: 4rem;
  }
`;

const Title = styled.h2`
  grid-area: header;
  font-size: 3.2rem;
`;

const List = styled.ul`
  grid-area: left;
  &:not(:first-of-type) {
    grid-area: right;
  }
`;

const Item = styled.li`
  margin-bottom: 1.6rem;
  line-height: 1.4;
`;

const Border = styled.div`
  grid-area: footer;
  margin-bottom: 1.8rem;
`;

const Tag = styled(Link)`
  display: inline-block;
  margin: 0.5rem;
  padding: 0 2rem;
  color: var(--input-color);
  background: var(--element-color);
  font-size: 1.4rem;
  line-height: 2;
  text-decoration: none;
  box-shadow: var(--shadow);
  border-radius: 0.2rem;
`;

export default CountryDetail;
