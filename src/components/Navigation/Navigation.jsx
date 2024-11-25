import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

import styles from "./Navigation.module.css";

const Navigation = ({ handleInputChange, query }) => {
    return (
        <nav>
            <div className="nav-container">
                <input
                    type="text"
                    className="search-input"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter your search shoes."
                />
            </div>

            <div className="profile-container">
                <a href="#">
                    <FiHeart className={styles.navIcons} />
                </a>
                <a href="#">
                    <AiOutlineShoppingCart className={styles.navIcons} />
                </a>
                <a href="#">
                    <AiOutlineUserAdd className={styles.navIcons} />
                </a>
            </div>
        </nav>
    );
};
export default Navigation;
