/** @format */

import React, { useState, useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import styled from "styled-components";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Label } from "@material-ui/icons";
import { useNavigate } from "react-router";
import { FormControl } from "@material-ui/core";
import axios from "axios";
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
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  border: 1px solid lightblue;
  margin-bottom: 20px;
  border-radius: 4px;
  cursor: pointer;

  span {
    padding: 0 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #17a2b8;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const AddCategories = () => {
  const [category, setCategory] = useState("");
  const [getPublic, setPublic] = useState("");
  const [getPrivate, setPrivate] = useState("");


  const navigate = useNavigate();

  const handlePublic = () => {
    setPublic(!getPublic);
  };

  const handlePrivate = () => {
    setPrivate(!getPrivate);
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

  return (
    <>
      <ContainerS>
        <Header>
          <span>
            All Users
            <span onClick={() => navigate("/dashbord")}>/ Home</span>
          </span>
        </Header>
        <FormControl>
          <MainCategories>
            <Inputs>
              <TextField
                fullWidth
                label="Categories Name"
                id="fullWidth"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Inputs>

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
            <button onClick={addCatg}>Save</button>
          </MainCategories>
        </FormControl>
      </ContainerS>
    </>
  );
};

export default HOC(AddCategories);
