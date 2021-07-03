import styles from './crypto-coin.module.css';

const CryptoCoinTitleRow = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title_row}>
                <div className={styles.info_section}>
                    <h3>Coin</h3>
                </div>
                <div className={styles.data_section}>
                    <h4 className={styles.price_title}>Price</h4>
                    <h4 className={styles.total_volume_title}>Volume</h4>
                    <h4 className={styles.percent_change_title}>24h</h4>
                    <h4 className={styles.market_cap_title}>Market-Cap</h4>
                </div>
            </div>    
        </div>
    )
}

export default CryptoCoinTitleRow;