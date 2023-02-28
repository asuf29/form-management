// import "./App.css";
// import { Formik, Field, Form } from "formik";

// function App() {
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//         }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         <Form>
//           <label htmlFor="firstName">First Name</label>
//           <Field id="firstName" name="firstName" placeholder="Jane" />

//           <br />
//           <br />

//           <label htmlFor="lastName">Last Name</label>
//           <Field id="lastName" name="lastName" placeholder="Doe" />

//           <br />
//           <br />

//           <label htmlFor="email">Email</label>
//           <Field
//             id="email"
//             name="email"
//             placeholder="jane@acme.com"
//             type="email"
//           />

//           <br />
//           <br />

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default App;

//handleSubmit & handleChange
// import "./App.css";
// import { Formik } from "formik";

// function App() {
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           gender: "",
//           hobies: [],
//           country: "",
//         }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {({ handleSubmit, handleChange }) => (
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="firstName">First Name</label>
//             <input name="firstName" onChange={handleChange} />

//             <br />
//             <br />

//             <label htmlFor="lastName">Last Name</label>
//             <input name="lastName" onChange={handleChange} />

//             <br />
//             <br />

//             <label htmlFor="email">Email</label>
//             <input name="email" onChange={handleChange} />

//             <br />
//             <br />

//             <span>Male</span>
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               onChange={handleChange}
//             />

//             <span>Female</span>
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               onChange={handleChange}
//             />

//             <br />
//             <br />

//             <div>
//               <input
//                 type="checkbox"
//                 name="hobies"
//                 value="football"
//                 onChange={handleChange}
//               />
//               Football
//             </div>
//             <div>
//               <input
//                 type="checkbox"
//                 name="hobies"
//                 value="cinema"
//                 onChange={handleChange}
//               />
//               Cinema
//             </div>
//             <div>
//               <input
//                 type="checkbox"
//                 name="hobies"
//                 value="photography"
//                 onChange={handleChange}
//               />
//               Photography
//             </div>

//             <br />
//             <br />

//             <select name="country" onChange={handleChange}>
//               <option value="TR">Turkey</option>
//               <option value="EN">England</option>
//               <option value="USA">USA</option>
//             </select>

//             <br />
//             <br />

//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>{" "}
//     </div>
//   );
// }

// export default App;

//useFormik
// import "./App.css";
// import { useFormik } from "formik";

// function App() {
//   const { handleSubmit, handleChange } = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       gender: "",
//       hobies: [],
//       country: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         <input name="firstName" onChange={handleChange} />

//         <br />
//         <br />

//         <label htmlFor="lastName">Last Name</label>
//         <input name="lastName" onChange={handleChange} />

//         <br />
//         <br />

//         <label htmlFor="email">Email</label>
//         <input name="email" onChange={handleChange} />

//         <br />
//         <br />

//         <span>Male</span>
//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           onChange={handleChange}
//         />

//         <span>Female</span>
//         <input
//           type="radio"
//           name="gender"
//           value="female"
//           onChange={handleChange}
//         />

//         <br />
//         <br />

//         <div>
//           <input
//             type="checkbox"
//             name="hobies"
//             value="football"
//             onChange={handleChange}
//           />
//           Football
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             name="hobies"
//             value="cinema"
//             onChange={handleChange}
//           />
//           Cinema
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             name="hobies"
//             value="photography"
//             onChange={handleChange}
//           />
//           Photography
//         </div>

//         <br />
//         <br />

//         <select name="country" onChange={handleChange}>
//           <option value="TR">Turkey</option>
//           <option value="EN">England</option>
//           <option value="USA">USA</option>
//         </select>

//         <br />
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//Form Validasyonları
import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
