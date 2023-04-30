import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../App';

import { REGIONS } from '../utils/constants';

// Icons
import search from '../assets/search.svg';
import searchLight from '../assets/search-white.svg';
import chevronDown from '../assets/chevron-down.svg';
import chevronDownLight from '../assets/chevron-down-white.svg';

const Controls = ({ onSearch, onFilter }) => {
  const { theme } = useContext(AppContext);

  return (
    <Container>
      <Search
        name="search"
        type="search"
        placeholder="Search for a country..."
        autoComplete="off"
        onChange={onSearch}
        icon={theme === 'light' ? search : searchLight}
      />
      <Select
        as="select"
        name="region"
        aria-label="region"
        defaultValue=""
        onChange={onFilter}
        icon={theme === 'light' ? chevronDown : chevronDownLight}
      >
        <option value="">Filter by Region</option>
        {REGIONS.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </Select>
    </Container>
  );
};

Controls.propTypes = {
  onSearch: PropTypes.func,
  onFilter: PropTypes.func,
};

const Container = styled.section`
  display: grid;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 769px) {
    grid-template-columns: 48rem 20rem;
    justify-content: space-between;
    margin-bottom: 4.5rem;
  }
`;

// Shared input styles
const Input = styled.input`
  width: 100%;
  height: 5.5rem;
  color: var(--input-color);
  font-weight: 300;
  font-size: 1.4rem;
  box-shadow: var(--shadow);
  border-radius: 6px;
  &::placeholder {
    color: var(--input-color);
  }
`;

const Search = styled(Input)`
  padding: 0 1rem 0 7.5rem;
  background: ${({ icon }) =>
    ` var(--element-color) url(${icon}) no-repeat 3rem center / 18px`};
`;

const Select = styled(Input)`
  padding: 0 2.5rem;
  background: ${({ icon }) =>
    `var(--element-color) url(${icon}) no-repeat right 1.5rem center / 15px;`};
  option {
    color: inherit;
  }
`;

export default Controls;
