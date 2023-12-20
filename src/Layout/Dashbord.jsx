import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashbord = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Dashbord Side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <h1 className="text-center text-4xl font-bold mt-6">Bistro Boss</h1>
        <p className="text-center text-xl font-medium">Restaurant</p>
        <ul className="menu p-4 ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashbord/adminHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/addItems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/bookings">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashbord/userHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/reservation">
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/cart">
                  <FaShoppingCart />
                  My Cart ( {cart.length} )
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/paymentHistory">
                  <FaList />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/review">
                  <FaAd />
                  Add Review
                </NavLink>
              </li>
            </>
          )}

          {/* Shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
