import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [ , refetch] = useCart();


  const handelAddToCart = () => {
    if (user && user.email) {
      // Send cart item to the database
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart! `,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch the card to update the cart items count
            refetch();
          }
        })
    } 
    else {
      Swal.fire({
        title: "You are not logged in !!",
        text: "Please Login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login ?",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the use to the login page
          navigate('/login', {state:{form:location}});
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl rounded-none">
      <figure>
        <img className="w-full" src={image} alt="Shoes" />
        <p className="bg-gray-700 text-white absolute top-0 right-0 p-3 font-semibold mr-4 mt-4">
          ${price}
        </p>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={ handelAddToCart}
            className="btn btn-outline bg-slate-100 border-0 border-orange-600 border-b-2 mt-4"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
