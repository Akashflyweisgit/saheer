/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../../Common/HOC";
import { ContainerS } from "../../Common/CommonStyling";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import axios from "axios";

const AdminNotification = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addNotification = () => {
    try {
      let url = "https://urban-home.herokuapp.com/api/addnotification";
      console.log("url::", url);
      //   setisloading(true);

      let temp = {
        title,
        desc,
      };
      console.log("temp", temp);

      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("data login", res);
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
        <MainContainer>
          <Headers>
            <span>Notifications</span>
          </Headers>
          <TitleWrapper>
            <Wrapper>
              <TextField
                id="standard-textarea"
                label="Title"
                placeholder="Enter Title"
                multiline
                variant="standard"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <lebel>Description :</lebel>
              <textarea
                style={{
                  minHeight: "150px",
                  border: "1px solid lightgray",
                  padding: "10px",
                }}
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></textarea>
              <button
                style={{ width: "118px", padding: "7px 0px", float: "right" }}
                onClick={addNotification}
              >
                Send
              </button>
            </Wrapper>
          </TitleWrapper>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(AdminNotification);
const MainContainer = styled.div`
  width: 100%;
`;
const Headers = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #6a7887;
  display: flex;
  align-items: center;
  -webkit-box-shadow: -5px -2px 5px 1px rgba(111, 145, 179, 1);
  -moz-box-shadow: -5px -2px 5px 1px rgba(111, 145, 179, 1);
  box-shadow: -5px -2px 5px 1px rgba(111, 145, 179, 1);

  span {
    font-size: 1.2rem;
    color: #134a89;
    font-weight: 600;
    margin-left: 30px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 30px;
  -webkit-box-shadow: 2px 4px 6px 1px rgba(78, 86, 94, 1);
  -moz-box-shadow: 2px 4px 6px 1px rgba(78, 86, 94, 1);
  box-shadow: 2px 4px 6px 1px rgba(78, 86, 94, 1);
  position: relative;

  input {
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 3px;
    padding: 3px 10px;
    outline: none;
    margin: 10px 0;
  }

  button {
    border: none;
    margin: 20px 0;
    background-color: #17a2b8;
    color: #fff;
    cursor: pointer;
    border-radius: 2px;
  }

  lebel {
    margin-top: 20px;
    color: #021133;
  }
  textarea {
    resize: none;
    outline: none;
  }
`;
