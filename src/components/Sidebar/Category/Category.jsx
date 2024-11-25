import Input from "../../Input/Input";

const Category = ({ handleChange }) => {
    return (
        <div>
            <h2 className="sidebarTitle">Category</h2>

            <div>
                <label className="sidebarLabelContainer">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value=""
                        name="test"
                    />
                    <span className="checkmark"></span>All
                </label>

                <Input
                    handleChange={handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="flats"
                    title="Flats"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="sandals"
                    title="Sandals"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="heels"
                    title="Heels"
                    name="test"
                />
            </div>
        </div>
    );
};
export default Category;
