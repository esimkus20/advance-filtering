import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";

// Database
import Card from "./components/Card/Card";
import products from "./db/data";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // ------------- Input Filter -------------
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const filteredItems = products.filter(
        (product) =>
            product.title
                .toLocaleLowerCase()
                .indexOf(query.toLocaleLowerCase()) !== -1
    );

    // ------------- Radio Filter -------------
    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // ------------- Buttons Filter -------------
    const handleClick = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredData = (products, selected, query) => {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Selected Filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, newPrice, prevPrice }, index) => (
                <Card
                    key={index}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    newPrice={newPrice}
                    prevPrice={prevPrice}
                />
            )
        );
    };

    const result = filteredData(products, selectedCategory, query);

    return (
        <>
            <Sidebar handleChange={handleChange} />
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result} />
        </>
    );
};
export default App;
