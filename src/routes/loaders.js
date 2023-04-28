import { getCountries, getCountryById } from '../services/countries';

export const appLoader = async () => {
  const countries = await getCountries();
  return countries;
};

export const countryLoader = async ({ params }) => {
  const country = await getCountryById(params.countryId);
  if (!country.ok) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return country;
};
