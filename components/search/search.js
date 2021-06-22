import styles from './search.module.css';

const Search = ({ ...otherProps }) => {
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} { ...otherProps } />
        </div>
    )
}

export default Search
