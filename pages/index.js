import Head from 'next/head';
import Search from '../components/search/search';
import CryptoList from '../components/crypto-list/crypto-list';

export default function Home({ filteredCoins }) {
  console.log(filteredCoins);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search
        type='text'
        placeholder='Search'
      />

      <CryptoList filteredCoins={filteredCoins} />

    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=10&page=1&sparkline=false');
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  }
}