import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase/Firebase.int";
import { useDispatch } from "react-redux";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "../../redux/productRedux";
import { userRequest } from "../../requestMethods";
export default function NewProduct() {
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const file = e.target.img.files[0];
    const fileName = new Date().getTime() + file.name;
    // firebase img storage
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const categories = e.target.categories.value.split(",");
    const color = [e.target.color.value];
    const size = [e.target.size.value];
    const instock = e.target.instock.value;

    // upload img
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newProduct = {
            img: downloadURL,
            title: e.target.title.value,
            desc: e.target.desc.value,
            categories: categories,
            color: color,
            size: size,
            price: e.target.price.value,
            instock: instock ? true : false,
          };

          const addProduct = async () => {
            dispatch(addProductStart());
            try {
              const res = await userRequest.post("/products", newProduct);
              dispatch(addProductSuccess(res?.data));
            } catch (error) {
              dispatch(addProductFailure());
            }
          };
          addProduct();
        });
      }
    );
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleForm}>
        <div className="addProductItem">
          <label>Image</label>
          <input name="img" type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input name="title" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>price</label>
          <input name="price" type="text" placeholder="enter price" />
        </div>
        <div className="addProductItem">
          <label>categories</label>
          <input name="categories" type="text" placeholder="shirts,jeans" />
        </div>
        <div className="addProductItem">
          <label>color</label>
          <select name="color" id="active">
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="black">black</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>size</label>
          <select name="size" id="active">
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="l">l</option>
            <option value="xl">xl</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>stock</label>
          <select name="instock" id="active">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
