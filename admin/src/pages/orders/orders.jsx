import "./orders.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../../redux/apiCalls";
import { userRequest } from "../../requestMethod";

export default function Orders() {
   const dispatch = useDispatch();
   const [orders, setOrders] = useState();

   useEffect(() => {
      const getOrders = async () => {
         try {
            const res = await userRequest.get("/orders");
            setOrders(res.data);
         } catch (err) {}
      };
      getOrders();
   }, []);

   const handleDelete = (id) => {
      deleteProduct(id, dispatch);
   };

   const columns = [
      { field: "_id", headerName: "ID", width: 220 },
      { field: "userId", headerName: "User ID", width: 220 },

      { field: "address", headerName: "Address", width: 200 },
      {
         field: "amount",
         headerName: "Amount",
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
                     onClick={() => handleDelete(params.row._id)}
                  />
               </>
            );
         },
      },
   ];

   return (
      <div className="productList">
         <DataGrid
            rows={orders}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
         />
      </div>
   );
}
