import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8  my-10">
            <div className=" bg-black bg-opacity-70">
            <SectionTitle
            heading={'Check It Out'}
            subHeading={'Featured Item'}
            ></SectionTitle>
            <div className="md:flex pb-20 pt-12 px-36 justify-center items-center">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium eum, labore saepe cum debitis odio odit voluptates! Similique ad est ex repellat fuga atque magnam, qui inventore nostrum nisi!</p>
                    <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;