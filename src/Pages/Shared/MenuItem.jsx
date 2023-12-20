

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div  className="flex space-x-5">
            <img style={{borderRadius:'0 250px 250px 250px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;