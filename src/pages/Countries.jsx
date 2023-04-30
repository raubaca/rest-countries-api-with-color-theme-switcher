import { useContext } from 'react';
import Controls from '../components/Controls';
import CountryList from '../components/CountryList';
import { useCountries } from '../hooks/useCountries';
import { AppContext } from '../App';

const Countries = () => {
  const { data } = useContext(AppContext);
  const { countries, filterByRegion, searchByName } = useCountries(data);

  return (
    <>
      <Controls onSearch={searchByName} onFilter={filterByRegion} />
      <CountryList countries={countries} />
    </>
  );
};

export default Countries;
