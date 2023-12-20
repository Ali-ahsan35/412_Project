import { Helmet } from "react-helmet-async";
import menuimg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import CoverPhoto from "../Shared/Cover/CoverPhoto";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const salad = menu.filter(item=> item.category === 'salad');
    const offered = menu.filter(item=> item.category === 'offered');
    return (
        
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <CoverPhoto img={menuimg} title ="our menu"></CoverPhoto>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer" ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory img={dessertImg} items={desserts} title="dessert" ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory img={pizzaImg} items={pizza} title="pizza" ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory img={saladImg} items={salad} title="salad" ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory img={soupImg} items={soup} title="soup" ></MenuCategory>
        </div>
    );
};

export default Menu;