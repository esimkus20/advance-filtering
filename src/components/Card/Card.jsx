import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import styles from "./Card.module.css";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
    return (
        <section className={styles.card}>
            <img src={img} alt={title} className={styles.cardImg} />
            <div className="card-details">
                <h3 className={styles.cardTitle}>{title}</h3>
                <section className={styles.cardReviews}>
                    {Array(star)
                        .fill(null)
                        .map((_, index) => (
                            <AiFillStar
                                key={index}
                                className={styles.ratingStars}
                            />
                        ))}
                    <span className={styles.totalReviews}>{reviews}</span>
                </section>
                <section className={styles.cardPrice}>
                    <div className="price">
                        <del>{prevPrice}</del> {newPrice}
                    </div>

                    <div className="bag">
                        <BsFillBagHeartFill className={styles.bagIcon} />
                    </div>
                </section>
            </div>
        </section>
    );
};
export default Card;
