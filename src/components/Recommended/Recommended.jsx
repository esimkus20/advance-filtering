import Buttons from "../Buttons";
import styles from "./Recommended.module.css";

const Recommended = ({ handleClick }) => {
    return (
        <>
            <div>
                <h2 className={styles.recommendedTitle}>Recommended</h2>
                <div className={styles.recommendedFlex}>
                    <Buttons
                        onClickHandler={handleClick}
                        value=""
                        title="All Products"
                    />
                    <Buttons
                        onClickHandler={handleClick}
                        value="Nike"
                        title="Nike"
                    />
                    <Buttons
                        onClickHandler={handleClick}
                        value="Adidas"
                        title="Adidas"
                    />
                    <Buttons
                        onClickHandler={handleClick}
                        value="Puma"
                        title="Puma"
                    />
                    <Buttons
                        onClickHandler={handleClick}
                        value="Vans"
                        title="Vans"
                    />
                </div>
            </div>
        </>
    );
};
export default Recommended;
