"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Contact = () => {
  const router = useRouter();

  const handleClick = async () => {
    // Show success message (e.g., using SweetAlert)
    // You can uncomment the below line and integrate SweetAlert if needed
    // Swal.fire('Success!', 'Your message has been sent.', 'success');

    // Redirect to home page
    router.push("/");
  };

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Contact;
