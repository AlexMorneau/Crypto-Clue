import styles from './search.module.css';

const Search = ({ ...otherProps }) => {
    return (
        <div className={styles.coin_search_container}>
            <input 
            className={styles.coin_search_bar}
            { ...otherProps } />
        </div>
    )
}

export default Search
