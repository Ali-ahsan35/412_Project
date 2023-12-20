import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async(data) => {
    console.log(data);
    // image upload to imagebb then get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers:{
            'content-type': 'multipart/form-data'
        }
    });
    // console.log(res.data);
    if (res.data.success) {
        // now send the menu item data to the server with the image URL
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            image: res.data.data.display_url
        }
        // 
        const menuRes = await axiosSecure.post('/menu',menuItem);
        console.log(menuRes.data);
        if (menuRes.data.insertedId) {
            // show success popUp
            reset();
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.name} is added to the menu`,
                showConfirmButton: false,
                timer: 2000
              });
        }
    }
    console.log('with img url', res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="Add an item"
        subHeading="what's new? "
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name" , {required: true})}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue='default'
                {...register("category" , {required: true})}
                className="select select-bordered w-full "
              >
                <option disabled value='default'>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                {...register("price", {required: true})}
                className="input input-bordered w-full "
              />
            </div>
            
          </div>
          {/* recipe details */}
          <div className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                {...register('recipe')}
                className="textarea textarea-bordered h-24"
                placeholder="Details"
              ></textarea> 
            </div>
            <div className="my-8">
            <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs" />
            </div>
          <button className="btn btn-block btn-error"> 
          <FaUtensils className="mr-2"></FaUtensils>
          Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
