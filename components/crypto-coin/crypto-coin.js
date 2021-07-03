import styles from './crypto-coin.module.css';


const CryptoCoin = ({ id, name, current_price, symbol, market_cap, 
    total_volume, image, price_change_percentage_24h }) => {

    return (
        <div className={styles.container}>

            <div className={styles.row}>

                <div className={styles.info_section}>
                    <img src={image} className={styles.image} />
                    <div className={styles.name}>{name}</div>
                    <div className={styles.symbol}>{symbol.toUpperCase()}</div>
                </div>

                <div className={styles.data_section}>
                    <p className={styles.current_price}>${current_price}</p>
                    <p className={styles.total_volume}>{total_volume.toLocaleString()}</p>
                    {
                        (price_change_percentage_24h > 0) ?
                            <p className={styles.positive_change}>
                                {price_change_percentage_24h.toFixed(2)}%
                            </p>
                        :
                            <p className={styles.negative_change}>
                                {price_change_percentage_24h.toFixed(2)}%
                            </p> 
                    }
                    <p className={styles.market_cap}>${market_cap.toLocaleString()}</p>
                </div>

            </div>
        </div>
    )
}

export default CryptoCoin;
