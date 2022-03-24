/** @format */

import React, { useState, useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import HOC from "../../Common/HOC";
import SubCategoriesList from "./SubcategoriesList";
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
import { CheckBox, Label } from "@material-ui/icons";
import axios from "axios";

const MainContainer = styled.div`
  width: 100%;
`;
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
  cursor: pointer;

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

const Subcate = styled.div`
  margin: 20px 0;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 20px;
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

  select {
    width: 50%;
    padding: 10px;
    outline: none;
    margin: 10px 0;
    border: 1px solid lightgray;
    border-radius: 3px;
    color: gray;
  }

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

const ViewSubCategories = () => {
  const navigate = useNavigate();
  const [expandOpen, setExpandOpen] = useState(false);
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const [getPrivate, setPrivate] = useState(false);
  const [getPublic, setPublic] = useState(false);
  const [data, setData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  //edit
  const [editName, setEditName] = useState("");
  const [EditId, setEditId] = useState("");

  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const location = useLocation();
  // console.log("location", location.state);
  const destination = location.state?.Destination;
  // const name = location.state?.name;
  const branch = location.state?.prices;
  const image = location.state?.image;

  const handlePublic = () => {
    setPublic(!getPublic);
  };

  const handlePrivate = () => {
    setPrivate(!getPrivate);
  };

  const editSubCategory = (row) => {
    console.log("editsubcategory", row);
    setEditName(row.name);
    setEditId(row._id);

    // setEditId(row._id);
    handleDialog();
  };

  const handleDialog = () => {
    setEditDialogOpen(!editDialogOpen);
  };

  const updateSubCategory = (EditId) => {
    console.log("editid", EditId);
    let id = EditId;

    try {
      let url = `https://urban-home.herokuapp.com/api/updatesubcategory/${id}`;
      // setisloading(true);

      let temp = {
        name: editName,
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

  useEffect(() => {
    window.scrollTo(0, 0);

    let url = "https://urban-home.herokuapp.com/api/getsubcategory";

    axios
      .get(url)
      .then(
        (res) => {
          console.log("data getSubCategory:::", res.data);

          setData(res.data.getsubcategory);
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

  console.log("data is", data);

  const addSubCat = () => {
    try {
      let url = "https://urban-home.herokuapp.com/api/addsubcategory";
      console.log("url::", url);
      //   setisloading(true);

      let temp = {
        name,
        parent,
        getPrivate,
        getPublic,
      };
      console.log("temp", temp);

      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("data subCat", res);
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

  const deleteSubCategory = (row) => {
    let id = row._id;

    try {
      // setisloading(true);
      let url = `https://urban-home.herokuapp.com/api/deletesubcategory/${id}`;
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
            Add-SubCategories
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
                      <div className="text_filed_heading">Name</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Name"
                          autoComplete="off"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={6}>
                      <div className="text_filed_heading">Course Name</div>
                      <div className="mr-2 mt-1">
                        <select
                          value={parent}
                          onChange={(e) => {
                            setParent(e.target.value);
                          }}
                        >
                          <option>select Parent Categorie</option>
                          <option>Categories 1</option>
                          <option>Categories 2</option>
                        </select>
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
                    onClick={addSubCat}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand>
        <MainContainer>
          <span>Name : {name}</span>

          <Subcate>
            <h5>Sub-Categories Name</h5>

            <SubCategoriesList
              data={data}
              editSubCategory={editSubCategory}
              setEditName={setEditName}
              handleDialog={handleDialog}
              editDialogOpen={editDialogOpen}
              setEditDialogOpen={setEditDialogOpen}
              editName={editName}
              EditId={EditId}
              updateSubCategory={updateSubCategory}
              deleteSubCategory={deleteSubCategory}
            />
          </Subcate>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(ViewSubCategories);
