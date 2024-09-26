"use client";
import { useRouter } from "next/navigation";
import React from "react";
// export const metadata = {
//   title: "Contact",
// };
const Contact = () => {
  const router = useRouter();
  console.log(router);
  const handleclick = () => {
    // sucessfull swal fire after that
    // redirect to home page
    router.push("/");
  };
  return (
    <div>
      Contact
      <button onClick={handleclick}>submit</button>
    </div>
  );
};

export default Contact;
