/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./style.css";

import { useRef } from "react";

const Body = () => {
  const ref = useRef();

  // const [display, setdisplay] = useState();

  // const getLocalItems = () => {
  //   let pass = localStorage.getItem("password");
  //   console.log(pass);

  //   if (pass) {
  //     return JSON.parse(localStorage.getItem(pass));
  //   } else {
  //     return [];
  //   }
  // };

  // const [form, setform] = useState({ site: "", userid: "", password: "" });
  // const [passwordArray, setpasswordArray] = useState([]);

  // const savePassword = () => {
  //   setpasswordArray([...passwordArray, form]);

  //   const gal = localStorage.setItem(
  //     "password",
  //     JSON.stringify([...passwordArray, form])
  //   );

  //   console.log(form);
  //   alert();
  //   console.log([handleChange]);
  // };

  // const handleChange = (e) => {
  //   setform({ ...form, [e.target.name]: e.target.value });
  // };




  const [site, setsite] = useState("");
  const [userid, setuserid] = useState("");
  const [password, setpassword] = useState("");

  let [details, setdetails]=useState([])
  // const [detail, setdetail] = useState(detail);


  // let detail;
  // const [dataa, setdataa] = useState();

  const save = () => {

     details=JSON.parse(localStorage.getItem('details') || "[]")

  var detail =[{
      site: site,
      userid: userid,
      password: password,
    }];
    details.push(detail)
    localStorage.setItem("details", JSON.stringify(details));
  };
  
  return (
    // <div classNameName="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

    <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0">
      <div className="flex-auto p-6 justify-center text-center">
        <form role="form text-left">
          <div className="mb-4 ">
            <label htmlFor="" className="font-bold">
              Site
            </label>
            <div className="flex justify-center">
              <input
                value={site}
                onChange={(e) => {
                  setsite(e.target.value);
                }}
                name="site"
                placeholder="Enter the Site Name"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-8/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="text"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="font-bold">
              Email/UserId
            </label>
            <div className="flex justify-center">
              <input
                value={userid}
                onChange={(e) => {
                  setuserid(e.target.value);
                }}
                name="userid"
                placeholder="Enter the User ID"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-8/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="text"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="font-bold">
              Password
            </label>
            <div className="flex justify-center">
              <input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                name="password"
                placeholder="Enter the Password"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-8/12 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="password"
              />
            </div>
          </div>
          <div className="min-h-6 pl-7 mb-0.5 block"></div>

          <div className="flex gap-4 justify-center text-center">
            <button
              onClick={save}
              type="submit"
              className="cursor-pointer w-44 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all group active:w-11 active:h-11 active:rounded-full active:duration-300 ease-in-out"
            >
              <span className="group-active:hidden font-semibold">Add</span>
            </button>

            <button
              type="reset"
              className="cursor-pointer w-44 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all group active:w-11 active:h-11 active:rounded-full active:duration-300 ease-in-out"
            >
              <span className="group-active:hidden font-semibold">Reset</span>{" "}
            </button>
          </div>
        </form>
      </div>

      <hr />
      <br />
      <div className="password">
        <h2 className="font-semibold ml-48  py-4">Your Passwords</h2>
        {/* {details === 0 && <div>No Passwords to Show</div>} */}
        <div className="flex justify-center">
          {/* {details != 0 && ( */}
          <table className="table-auto w-2/3  justify-center text-center rounded-md overflow-hidden ">
            <thead className="bg-purple-700 text-white">
              <tr>
                <th>Site</th>
                <th>Email/UserID</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="bg-purple-100">
         {/* {details && details.map(
          (item,i)=>( */}
          
              {/* <tr key={item}> */}
              <tr>
              <td className="py-4 text-black ">{detail.site}</td>
              <td className="py-4 ">{detail.userid}</td>
              <td className="py-4 ">{detail.password}</td>
              <td className="py-4 ">fsdf</td>
            </tr>
{/*            
          )
         )


         } */}
 
            
             
            </tbody>
          </table>
        {/* )}  */}
        </div>
      </div>
    </div>
  );
};

export default Body;
