import Head from 'next/head';
import Search from '../components/search/search';
import CryptoList from '../components/crypto-list/crypto-list';

import { useState } from 'react';

export default function Home({ filteredCoins }) {

  const [search, setSearch] = useState('');

  // filter the API data by whatever the user enters in the search bar
  const coinListBySearch = filteredCoins.filter(coin => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  });

  // set 'search' to whatever user enters in the search bar
  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <div>
      <Head>
        <title>Crypto Clue</title>
        <link rel="icon" href="goldcoin.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="search_container">
        <Search
          type='text'
          placeholder='Search'
          onChange={handleChange}
        />
      </div>
      
      <CryptoList filteredCoins={coinListBySearch} />
      
      

    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=25&page=1&sparkline=false');
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  }
}