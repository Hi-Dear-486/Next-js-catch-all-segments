"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Make sure to install and import SweetAlert
import Loader from "../utils/Loader";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/users");
      setUserData(response.data); // Set userData to response.data
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {userData ? (
          userData.map((user) => <li key={user.id}>{user.username}</li>)
        ) : (
          <li>No users found.</li>
        )}
      </ul>
    </div>
  );
};

export default User;
