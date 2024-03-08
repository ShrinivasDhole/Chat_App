import Input from "../../components/Input";
import GenderCheck from "./GenderCheck";
const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <Input value="Full Name" placeholder="Shri Dhole" type="text" />
            <Input value="Username" placeholder="shridhole" type="text" />
            <Input
              value="Password"
              placeholder="Enter password"
              type="password"
            />
            <Input
              value="Confirm Password"
              placeholder="Enter confirm password"
              type="password"
            />
          </div>

          {/* GENDER CHECKBOX GOES HERE */}
          <GenderCheck />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//STARTER CODE FOR THE SIGNUP COMPONENT
// import Input from "../../components/Input";
// import GenderCheck from "./GenderCheck";
// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <Input value="Full Name" placeholder="Shri Dhole" type="text" />
//             <Input value="Username" placeholder="shridhole" type="text"/>
//             <Input value="Password" placeholder="Enter password" type="password"/>
//             <Input value="Confirm Password" placeholder="Enter confirm password" type="password"/>
//           </div>

//           {/* GENDER CHECKBOX GOES HERE */}
//           <GenderCheck/>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
