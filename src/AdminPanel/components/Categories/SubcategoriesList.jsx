/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Rowing } from "@material-ui/icons";

const SubCategoriesList = ({
  data,
  editSubCategory,
  setEditName,
  handleDialog,
  editDialogOpen,
  setEditDialogOpen,
  editName,
  EditId,
  setEditId,
  updateSubCategory,
  deleteSubCategory,
}) => {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  // const handleCick = (evt, id) => {
  //   setData(data?.filter((elm) => elm.id !== id));
  // };

  // -----------------------------------------------------------------------------------

  // const handleRemoveItem = (e) => {
  //   const name = e.target.getAttribute("name");
  //   setData(data?.filter((item) => data.name !== name));
  // };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">Image</th> */}

            <th scope="col">Name</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, id) => (
            <tr>
              {/* <td>{item.image}</td> */}

              <td>{item.name}</td>

              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => editSubCategory(item)}
                >
                  Edit
                </button>
                {/* <button type="button" class="btn btn-danger" style={{margin: '0 10px'}} onClick={()=> deleteitem(index) }>Delete</button></td> */}
                {/* <button type="button" class="btn btn-danger" name={item.name} style={{margin: '0 10px'}} onClick={(evt) => handleCick(evt, id)}>Delete</button></td> */}
                <button
                  type="button"
                  className="btn btn-danger"
                  name={item?.name}
                  style={{ margin: "0 10px" }}
                  onClick={() => deleteSubCategory(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog
        open={editDialogOpen}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth="fullWidth"
      >
        <DialogTitle>
          Edit SubCategory
          <span
            className="float-right icon_color"
            onClick={() => setEditDialogOpen(!editDialogOpen)}
          >
            <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
          </span>
        </DialogTitle>
        <DialogContent>
          <div className="text_filed_heading">Name</div>
          <div className="mr-2 mt-1">
            <input
              type="text"
              className="form-control "
              placeholder="Enter Name"
              autoComplete="off"
              value={editName}
              onChange={(e) => {
                setEditName(e.target.value);
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className="button_formatting"
            onClick={() => setEditDialogOpen(!editDialogOpen)}
          >
            Cancel
          </Button>
          <Button
            className="button_formatting"
            onClick={() => {
              updateSubCategory(EditId);
              handleDialog();
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default SubCategoriesList;
