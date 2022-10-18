import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "../../redux/productRedux";
import { userRequest } from "../../requestMethods";
export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  // load all products
  useEffect(() => {
    const getProducts = async () => {
      dispatch(getProductStart());
      try {
        const res = await userRequest.get("/products");

        dispatch(getProductSuccess(res?.data));
      } catch (err) {
        dispatch(getProductFailure());
      }
    };
    getProducts();
  }, []);
  // delete product

  const handleDelete = async (id) => {
    dispatch(deleteProductStart());
    try {
      dispatch(deleteProductSuccess(id));
    } catch (e) {
      dispatch(deleteProductFailure());
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params?.row?.img} alt="" />
            {params?.row?.title}{" "}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params?.row?.instock ? "yes" : "no"},
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => {
                handleDelete(params?.row?._id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
