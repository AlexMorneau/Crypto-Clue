import CryptoCoin from '../crypto-coin/crypto-coin';
import CryptoCoinTitleRow from '../crypto-coin/crypto-coin-title-row';

export default function CryptoList({ filteredCoins }) {
    return (
        <div>
        <CryptoCoinTitleRow />
            {
                filteredCoins.map((coin) => {
                    return (
                        <CryptoCoin
                        id={coin.id}
                        key={coin.id}
                        name={coin.name}
                        current_price={coin.current_price}
                        symbol={coin.symbol}
                        market_cap={coin.market_cap}
                        total_volume={coin.total_volume}
                        image={coin.image}
                        price_change_percentage_24h={coin.price_change_percentage_24h} 
                        />
                    )
                })
            }
        </div>
    )
}
