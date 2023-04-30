import { Link, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import { API_URL } from '../utils/constants';
import CountryDetail from '../components/CountryDetail';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const country = await fetch(`${API_URL}alpha/${params.countryId}`);
  if (!country.ok) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return country;
};

const Country = () => {
  const [country] = useLoaderData();

  return (
    <Container>
      <Button to="/">&larr; Back</Button>
      <CountryDetail country={country} />
    </Container>
  );
};

const Container = styled.section`
  padding: 3rem 0;
  font-size: 1.6rem;
`;

const Button = styled(Link)`
  display: inline-block;
  margin-bottom: 8rem;
  padding: 0 4rem;
  color: var(--input-color);
  font-size: 1.6rem;
  line-height: 2.5;
  text-decoration: none;
  background: var(--element-color);
  box-shadow: var(--shadow);
  border-radius: 0.6rem;
`;

export default Country;
