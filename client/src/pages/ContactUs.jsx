// import React, { useState } from "react";

// const ContactUs = () => {
//   const [contactData, setContactData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setContactData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Contact Data:", contactData);

//     setContactData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <>
//       <div className="min-h-[90vh] bg-linear-to-r from-(--secondary) to-(--primary) grid place-items-center p-10">
//         <div className="w-full max-w-lg bg-(--background) rounded shadow p-10">
//           <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="name">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={contactData.name}
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
//                 value={contactData.email}
//                 onChange={handleChange}
//                 className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2 mt-4">
//               <label htmlFor="subject">Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={contactData.subject}
//                 onChange={handleChange}
//                 className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2 mt-4">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 value={contactData.message}
//                 onChange={handleChange}
//                 className="border p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-(--accent)"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full mt-6 bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--accent)"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;
