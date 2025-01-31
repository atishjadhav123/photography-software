import{B as f,r as d,y as p,j as e}from"./index-67a0fc0a.js";import{u as b,c as h,a as o}from"./index.esm-82b94e59.js";const j=()=>{const[c,{isSuccess:i,isLoading:n,isError:u,error:a}]=f(),[s,m]=d.useState(!1),r=b({initialValues:{name:"",email:"",mobile:"",password:"",profilePicture:"",role:""},validationSchema:h({name:o().required("Name is required"),email:o().email("Invalid email").required("Email is required"),mobile:o().required("Mobile number is required"),password:o().required("Password is required"),profilePicture:o().required("Profile picture is required"),role:o().required("role is required")}),onSubmit:(t,{resetForm:x})=>{const l=new FormData;l.append("name",t.name),l.append("email",t.email),l.append("mobile",t.mobile),l.append("role",t.role),l.append("password",t.password),l.append("profilePicture",t.profilePicture),c(l),x()}});return d.useEffect(()=>{i&&p.success("Registration successful")},[i]),n?e.jsx("h3",{className:"spinner-border"}):u?e.jsxs("h3",{children:["Failed to add profile: ",a==null?void 0:a.message]}):e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:r.handleSubmit,children:e.jsx("div",{className:"flex flex-col justify-center items-center w-full h-[600px] bg-[#282D2D] px-4 sm:px-5",children:e.jsxs("div",{className:`xl:max-w-3xl ${s?"bg-black":"bg-white"} w-full p-4 sm:p-6 rounded-md`,children:[e.jsx("h1",{className:`text-center text-xl sm:text-2xl font-semibold ${s?"text-white":"text-black"}`,children:"Register for a free account"}),e.jsx("div",{className:"flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full",children:e.jsxs("div",{className:"flex",children:[e.jsx("h3",{className:"text-white",children:"Dark Mode : &nbsp"}),e.jsxs("label",{className:"inline-flex relative items-center mr-5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"sr-only peer",checked:s,readOnly:!0}),e.jsx("div",{onClick:()=>{m(!s)},className:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"})]})]})}),e.jsx("div",{className:"w-full mt-6",children:e.jsxs("div",{className:"mx-auto max-w-xs sm:max-w-md flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[e.jsx("input",{...r.getFieldProps("name"),className:`w-full px-4 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${s?"bg-[#302E30] text-white focus:border-white":"bg-gray-100 text-black focus:border-black"}`,type:"text",placeholder:"Your name"}),r.touched.name&&r.errors.name&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.name})]}),e.jsx("input",{...r.getFieldProps("email"),className:`w-full px-4 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${s?"bg-[#302E30] text-white focus:border-white":"bg-gray-100 text-black focus:border-black"}`,type:"email",placeholder:"Enter your email"}),r.touched.email&&r.errors.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.email}),e.jsx("input",{...r.getFieldProps("mobile"),className:`w-full px-4 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${s?"bg-[#302E30] text-white focus:border-white":"bg-gray-100 text-black focus:border-black"}`,type:"tel",placeholder:"Enter your phone"}),r.touched.mobile&&r.errors.mobile&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.mobile}),e.jsxs("div",{className:"w-full max-w-xs sm:max-w-md mx-auto flex flex-col gap-4",children:[e.jsx("label",{htmlFor:"role",className:"text-sm font-semibold text-gray-700",children:"Select Role"}),e.jsxs("select",{...r.getFieldProps("role"),className:"w-full px-4 py-2 rounded-lg font-medium border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"",children:"Choose a role"}),e.jsx("option",{value:"user",children:"User"})]}),r.touched.role&&r.errors.role&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.role})]}),e.jsx("input",{...r.getFieldProps("password"),className:`w-full px-4 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${s?"bg-[#302E30] text-white focus:border-white":"bg-gray-100 text-black focus:border-black"}`,type:"password",placeholder:"Password"}),r.touched.password&&r.errors.password&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.password}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"profilePicture",className:"text-sm text-gray-500",children:"Upload Profile Picture"}),e.jsx("input",{type:"file",onChange:t=>r.setFieldValue("profilePicture",t.target.files[0]),className:"w-full px-4 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-gray-100 text-black"}),r.touched.profilePicture&&r.errors.profilePicture&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:r.errors.profilePicture})]}),e.jsx("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-3 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none",children:e.jsx("span",{className:"ml-3",children:"Register"})}),e.jsxs("p",{className:"mt-6 text-xs text-gray-600 text-center",children:["Already have an account?"," ",e.jsx("a",{href:"login",children:e.jsx("span",{className:"text-[#E9522C] font-semibold",children:"Login"})})]})]})})]})})})})};export{j as default};
