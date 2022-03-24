/** @format */

import React, { useState, useEffect } from "react";
import sikhlo from "../../Image/shopping.jpg";
import axios from "axios";


//css file
import "./Login.css";

//login,register,resetpassword uses material ui text-feild
import {
  Button,
  Card,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = () => {
    try {
      let url = "https://urban-home.herokuapp.com/api/adminlogin";
      console.log("url::", url);
      //   setisloading(true);

      let temp = {
        email,
        password,
      };
      console.log("temp", temp);

      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("data login", res);
            // setisloading(false);
            props.history.push("/home");
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

  //---------------------local state ----------------------
  const [showPassword, setshowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="Login_Main_div content_padding">
        <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
          <div>
            <img
              style={{ height: "120px", width: "120px" }}
              src={sikhlo}
              alt=""
              className="login_image"
            />
          </div>
          <div>
            <span>
              <h6>Welcome!</h6>
            </span>
          </div>
          <div className="main_padding_top_bottom">
            <div className="pb-2">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mt-2">
              <FormControl
                className="MuiFormControl-fullWidth"
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Password *"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        autoComplete="off"
                        aria-label="toggle password visibility"
                        onClick={() => setshowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div className="inputfiledformatting mt-2">
              <Button
                variant="contained"
                className="Login_page_button"
                onClick={() => navigate("/dashbord")}
              >
                Log in As Admin
              </Button>
              <div
                style={{
                  margin: "20px 0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  onClick={() => navigate("/admin-login")}
                  style={{
                    padding: "6px",
                    border: "1px solid lightblue",
                    borderRadius: "4px",
                    backgroundColor: "#3bcee6",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Log in As Vendor
                </span>
                <span
                  onClick={() => navigate("/vendorLogin")}
                  style={{
                    padding: "6px",
                    border: "1px solid lightblue",
                    borderRadius: "4px",
                    backgroundColor: "#3bcee6",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Log in As Employe{" "}
                </span>
              </div>
            </div>
            <div
              className="text-info hover_cursor  mb-3"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
            </div>
            {/* <div className="text-center text-info hover_cursor  mb-3" >
                           Don't have an account? <span className="" style={{color:"#7558bf"}} onClick={()=> navigate("/signup")}>Regisgter</span>
                        </div> */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Login;
