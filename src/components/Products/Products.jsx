import styles from "./Products.module.css";

const Products = ({ result }) => {
    return (
        <>
            <section className={styles.cardContainer}>{result}</section>
        </>
    );
};
export default Products;
