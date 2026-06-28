// import React, { useState } from "react";

// const Register = () => {
//   const [registerData, setRegisterData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [validateError, setValidateError] = useState("");

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setRegisterData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (registerData.password !== registerData.confirmPassword) {
//       setValidateError("Passwords do not match");
//       return;
//     }

//     setValidateError("");

//     const payload = {
//       name: registerData.name,
//       email: registerData.email.toLowerCase(),
//       password: registerData.password,
//     };

//     console.log("Register Data:", payload);
//   };

//   return (
//     <>
//       <div className="h-[90vh] bg-linear-to-r from-(--secondary) to-(--primary) grid place-items-center p-10">
//         <div className="w-md bg-(--background) rounded shadow p-10">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Create Account
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="name">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={registerData.name}
//                 onChange={handleChange}
//                 className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2 mt-4">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={registerData.email}
//                 onChange={handleChange}
//                 className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2 mt-4">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={registerData.password}
//                 onChange={handleChange}
//                 className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2 mt-4">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={registerData.confirmPassword}
//                 onChange={handleChange}
//                 className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
//                 required
//               />
//             </div>

//             {validateError && (
//               <p className="text-red-500 mt-2">{validateError}</p>
//             )}

//             <button
//               type="submit"
//               className="w-full mt-6 bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--accent)"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
