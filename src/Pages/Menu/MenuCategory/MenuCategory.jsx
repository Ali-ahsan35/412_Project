import { Link } from "react-router-dom";
import CoverPhoto from "../../Shared/Cover/CoverPhoto";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
     { title && <CoverPhoto img={img} title={title}></CoverPhoto>}
      <div className="grid md:grid-cols-2 gap-5 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
