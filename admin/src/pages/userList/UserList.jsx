import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function UserList() {
   const [data, setData] = useState(userRows);
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const getUsers = async () => {
         const res = await userRequest.get("/users/?new=true");
         setUsers(res.data);
      };

      getUsers();
   }, []);

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
   };

   // const rows: GridRowsProp = [
   //    { id: 1, col1: "Hello", col2: "World" },
   //    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
   //    { id: 3, col1: "MUI", col2: "is Amazing" },
   // ];

   // const columns: GridColDef[] = [
   //    { field: "col1", headerName: "Column 1", width: 150 },
   //    { field: "col2", headerName: "Column 2", width: 150 },
   // ];

   const columns = [
      { field: "_id", headerName: "ID", width: 90 },
      {
         field: "user",
         headerName: "User",
         width: 200,
         renderCell: (params) => {
            return (
               <div className="userListUser">
                  <img className="userListImg" src={params.row.avatar} alt="" />
                  {params.row.username}
               </div>
            );
         },
      },
      { field: "email", headerName: "Email", width: 200 },
      {
         field: "status",
         headerName: "Status",
         width: 120,
      },
      {
         field: "transaction",
         headerName: "Transaction Volume",
         width: 160,
      },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={"/user/" + params.row.id}>
                     <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                     className="userListDelete"
                     onClick={() => handleDelete(params.row.id)}
                  />
               </>
            );
         },
      },
   ];

   return (
      <div className="userList">
         <DataGrid
            getRowId={(row) => row._id}
            rows={users}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
         />
      </div>
   );
}
