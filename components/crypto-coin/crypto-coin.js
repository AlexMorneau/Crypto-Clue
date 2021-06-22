const CryptoCoin = ({ id, name, current_price, symbol, market_cap, 
    total_volume, image, price_change_percentage_24h }) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default CryptoCoin;
