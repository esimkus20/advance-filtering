import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

import styles from "./Sidebar.module.css";

const Sidebar = ({ handleChange }) => {
    return (
        <>
            <section className={styles.sidebar}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.sidebarTitle}>🛒</h1>
                </div>

                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        </>
    );
};
export default Sidebar;
