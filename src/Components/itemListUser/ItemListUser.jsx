import React from "react";
import "./ItemListUser.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../config/user";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/detail" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="itemList">
      <div className="itemListTitle">
        User
        <Link to="/users/new" className="link">
          <span className="add-new-icon">+</span>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default ItemList;
