import { Button, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserDetails } from "../../redux/features/FeatureSlice";
import "../../styles/contact.css";
function Contact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    dispatch(addUserDetails({ [e.target.name]: e.target.value }));
  };
  const { userDetails } = useSelector((state) => ({
    ...state.feature.featureName,
  }));
  return (
    <div>
      <div className="contact-container">
        <div className="contact-container-header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-form">
          <form>
            <Input
              value={userDetails?.emailId}
              placeholder="Email"
              name="emailId"
              type="email"
              onChange={handleChange}
              size="large"
            />
            <Input
              value={userDetails?.fullName}
              placeholder="Full Name"
              name="fullName"
              type="text"
              onChange={handleChange}
              size="large"
            />
            <Input
              value={userDetails?.phoneNumber}
              placeholder="Phone"
              name="phoneNumber"
              type="tel"
              onChange={handleChange}
              size="large"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button type="primary" shape="round" danger>
                Submit
              </Button>
              <Button
                shape="round"
                onClick={() => navigate("/")}
                color="primary"
              >
                Home
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
