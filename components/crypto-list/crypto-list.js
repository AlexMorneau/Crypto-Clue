import CryptoCoin from '../crypto-coin/crypto-coin';

export default function CryptoList({ filteredCoins }) {
    return (
        <div>
            {
                filteredCoins.map((coin) => {
                    return (
                        <CryptoCoin
                        id={coin.id}
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h} 
                        />
                    )
                })
            }
        </div>
    )
}
