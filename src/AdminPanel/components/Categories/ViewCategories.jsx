/** @format */

import React, { useState, useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import CategoriesList from "./CategoriesList";
import styled from "styled-components";
import { useNavigate } from "react-router";
import Expand from "react-expand-animated";
import { Card, Grid, Button } from "@material-ui/core";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  border: 1px solid lightblue;
  margin-bottom: 20px;
  border-radius: 4px;
  justify-content: space-between;
  padding: 0 20px;

  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: #17a2b8;
    display: flex;
    align-items: center;
  }
  button {
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    color: #fff;
    background-color: #17a2b8;
  }
`;
const MainCategories = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightblue;
  border-radius: 4px;
  padding: 20px;
  flex-direction: column;

  button {
    padding: 6px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    color: #fff;
    background-color: #17a2b8;
  }
`;
const Inputs = styled.div`
  width: 50%;
`;
const CheckBoxs = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
// const Header = styled.div`
//   display: flex;
//   width: 100%;
//   height: 70px;
//   align-items: center;
//   border: 1px solid lightblue;
//   margin-bottom: 20px;
//   border-radius: 4px;
//   cursor: pointer;

//   span {
//     padding: 0 20px;
//     font-size: 1.1rem;
//     font-weight: 600;
//     color: #17a2b8;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//   }
// `;

const ViewCategories = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [getPublic, setPublic] = useState("");
  const [getPrivate, setPrivate] = useState("");
  const [expandOpen, setExpandOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  //edit
  const [editCategory, setEditCategory] = useState("");
  const [EditId, setEditId] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const handlePublic = () => {
    setPublic(!getPublic);
  };

  const handlePrivate = () => {
    setPrivate(!getPrivate);
  };

  const handleDialog = () => {
    setEditDialogOpen(!editDialogOpen);
  };

  const editCatg = (row) => {
    console.log("editcategory", row);
    setEditCategory(row.name);
    setEditId(row._id);
    handleDialog();
  };

  const addCatg = () => {
    try {
      let url = "https://urban-home.herokuapp.com/api/addcategory";
      console.log("url::", url);
      //   setisloading(true);

      let temp = {
        category,
        getPrivate,
        getPublic,
      };
      console.log("temp", temp);

      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("data Catg", res);
            // setisloading(false);
            // props.history.push("/home");
            // showNotificationMsz(res.data.message, "success");
          },

          (error) => {
            // setisloading(false);
            console.log("data response error:::", error);
            // showNotificationMsz(error, "danger");
          }
        )
        .catch((e) => {
          //   setisloading(false);
          console.log("data response error:::", e);
          //   showNotificationMsz(e, "danger");
        });
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    let url = "https://urban-home.herokuapp.com/api/getcategory";

    axios
      .get(url)
      .then(
        (res) => {
          console.log("data getCategory:::", res.data);

          setData(res.data.getcategory);
        },

        (error) => {
          // setisloading(false);
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        // setisloading(false);
        console.log("data response error:::", e);
      });
  }, [isUpdated]);

  const updateCategory = (EditId) => {
    console.log("editid", EditId);
    let id = EditId;

    try {
      let url = `https://urban-home.herokuapp.com/api/updatecategory/${id}`;
      // setisloading(true);

      let temp = {
        name: editCategory,
      };

      axios
        .put(url, temp)
        .then(
          (res) => {
            console.log("response :::", res);
            handleDialog();
            // setisloading(false);
            setIsUpdated(!isUpdated);

            //  showNotificationMsz(res.data.msg, "success");
            // props.history.push("/customer-purchace-order")
          },

          (error) => {
            // setisloading(false);
            console.log("data response error:::", error);
            //   showNotificationMsz(error, "success");
          }
        )
        .catch((e) => {
          // setisloading(false);
          console.log("data response error:::", e);
          // showNotificationMsz(e, "success");
        });
    } catch (error) {}
  };

  const deleteCategory = (row) => {
    let id = row._id;

    try {
      // setisloading(true);
      let url = `https://urban-home.herokuapp.com/api/deletecategory/${id}`;
      axios.delete(url).then(
        (res) => {
          // setisloading(false);
          setIsUpdated(!isUpdated);
          // showNotificationMsz(res.data.msg, "success");
          console.log("resdeletedata", res);
        },
        (error) => {
          // showNotificationMsz(error, "danger");
          // setisloading(false);
        }
      );
    } catch (error) {
      // showNotificationMsz(error, "danger");
      // setisloading(false);
    }
  };

  return (
    <>
      <ContainerS>
        <Header>
          <span>
            Categories
            <span onClick={() => navigate("/dashbord")}>/ Home</span>
          </span>
          <button onClick={() => setExpandOpen(!expandOpen)}>
            {" "}
            Add Categories
          </button>
        </Header>
        <Expand open={expandOpen}>
          <Card className=" mb-2 Card_shadow p-3">
            <div className="card_admissiondetails_height">
              <div className="textfiled_margin">
                <div className="card_content_instition">
                  <div className="text-right">
                    <span
                      className="icon_color"
                      onClick={() => setExpandOpen(!expandOpen)}
                    >
                      <i class="fa fa-times hover_cursor"></i>
                    </span>
                  </div>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Category</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Name"
                          autoComplete="off"
                          value={category}
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      {/* <div className=" mr-2  mt-1"> */}
                      <CheckBoxs>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Public"
                          value={getPublic}
                          onChange={handlePublic}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Private"
                          value={getPrivate}
                          onChange={handlePrivate}
                        />
                      </CheckBoxs>
                      {/* </div> */}
                    </Grid>

                    {/* <Grid item md={6}>
                      <div className="text_filed_heading">Email</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          autoComplete="off"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </div>
                    </Grid> */}
                  </Grid>
                </div>
                <div className="mt-2 pb-2 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    onClick={addCatg}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand>
        <CategoriesList
          data={data}
          editCategory={editCategory}
          setEditCategory={setEditCategory}
          handleDialog={handleDialog}
          editDialogOpen={editDialogOpen}
          setEditDialogOpen={setEditDialogOpen}
          EditId={EditId}
          editCatg={editCatg}
          updateCategory={updateCategory}
          deleteCategory={deleteCategory}
        />
      </ContainerS>
    </>
  );
};

export default HOC(ViewCategories);
