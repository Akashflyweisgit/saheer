/** @format */

import React, { useState, useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import styled from "styled-components";
import HOC from "../../Common/HOC";
import ServicesList from "./ServicesList";
import { Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Inputs = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  button {
    padding: 6px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    color: #fff;
    background-color: #17a2b8;
    margin: 20px 0;
    width: 188px;
  }

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius: 10px;
  }
`;
const ServicesTable = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;

  span {
    padding: 20px 0;
    font-size: 1.1rem;
    color: #17a2b8;
    font-weight: 600;
  }
`;

const ServicesHome = () => {
  const [name, setName] = useState("");
  const [getPublic, setPublic] = useState(false);
  const [getPrivate, setPrivate] = useState(false);
  const [data, setData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  //edit
  const [editName, setEditName] = useState("");
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

  const editService = (row) => {
    console.log("editservice", row);
    setEditName(row.name);
    setEditId(row._id);
    handleDialog();
  };

  const addService = () => {
    try {
      let url = "https://urban-home.herokuapp.com/api/service";
      console.log("url::", url);
      //   setisloading(true);

      let temp = {
        name,
        getPrivate,
        getPublic,
      };
      console.log("temp", temp);

      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("data addService", res);
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

    let url = "https://urban-home.herokuapp.com/api/getservice";

    axios
      .get(url)
      .then(
        (res) => {
          // console.log("data getService:::", res.data);

          setData(res.data.getservice);
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

  const updateService = (EditId) => {
    console.log("editid", EditId);
    let id = EditId;

    try {
      let url = `https://urban-home.herokuapp.com/api/updateservice/${id}`;
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

  const deleteService = (row) => {
    let id = row._id;

    try {
      // setisloading(true);
      let url = `https://urban-home.herokuapp.com/api/deleteservice/${id}`;
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
        <MainContainer>
          <Inputs>
            <span>Ctreate Services</span>
            <input
              type="text"
              placeholder="Enter Services Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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

            <button onClick={addService}>Save</button>
          </Inputs>
          <ServicesTable>
            <span>Services List</span>
            <ServicesList
              data={data}
              editName={editName}
              setEditName={setEditName}
              handleDialog={handleDialog}
              editDialogOpen={editDialogOpen}
              setEditDialogOpen={setEditDialogOpen}
              EditId={EditId}
              editService={editService}
              updateService={updateService}
              deleteService={deleteService}
            />
          </ServicesTable>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(ServicesHome);
