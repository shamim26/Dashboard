import { useState } from "react";
import { useDropzone } from "react-dropzone";

const Main = () => {
  const [active, setActive] = useState("management");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => console.log(file));

  return (
    <div className="container w-11/12 mx-auto mt-8 rounded-lg">
      {/* Tab */}
      <div className="flex flex-col md:flex-row justify-between md:items-center ">
        <div
          onClick={() => setActive("management")}
          className={`${
            active === "management" ? "bg-white md:border-b-2" : "bg-[#EFF4FA]"
          } p-5 rounded-t-lg font-medium text-gray-700 cursor-pointer`}
        >
          <p>Job management</p>
        </div>
        <div
          onClick={() => setActive("rewrite")}
          className={`${
            active === "rewrite" ? "bg-white md:border-b-2" : "bg-[#EFF4FA]"
          } p-5 rounded-t-lg font-medium text-gray-700 cursor-pointer`}
        >
          <p>JD rewrite</p>
        </div>
        <div
          onClick={() => setActive("retouch")}
          className={`${
            active === "retouch" ? "bg-white md:border-b-2" : "bg-[#EFF4FA]"
          } p-5 rounded-t-lg font-medium text-gray-700 cursor-pointer`}
        >
          <p>R3achout</p>
        </div>
        <div
          onClick={() => setActive("search")}
          className={`${
            active === "search" ? "bg-white md:border-b-2" : "bg-[#EFF4FA]"
          } p-5 rounded-t-lg font-medium text-gray-700 cursor-pointer`}
        >
          <p>Search</p>
        </div>
        <div
          onClick={() => setActive("intake")}
          className={`${
            active === "intake" ? "bg-white md:border-b-2" : "bg-[#EFF4FA]"
          } p-5 rounded-t-lg font-medium text-gray-700 cursor-pointer`}
        >
          <p>Intake</p>
        </div>
        <div
          onClick={() => setActive("interview")}
          className={`${
            active === "interview" ? "bg-white md:border-b-2" : "bg-[#EFF4FA]"
          } p-5 rounded-t-lg font-medium text-gray-700 cursor-pointer`}
        >
          <p>Interview</p>
        </div>
      </div>
      {/* Form */}
      <div className="bg-white rounded-b-lg grid md:grid-cols-[_1fr,_2fr] gap-6 p-8">
        <div className="flex flex-col gap-4">
          <label>Job Title</label>
          <input
            className="text-sm outline-none border border-gray-900 rounded-full px-6 py-3"
            type="text"
            name="title"
            defaultValue="Frontend Developer"
          />

          <label>Hiring Manager</label>
          <input
            className="text-sm outline-none border border-gray-900 rounded-full px-6 py-3"
            type="text"
            name="hiring"
            defaultValue="Nail Patel"
          />
          <label>Department</label>
          <input
            className="text-sm outline-none border border-gray-900 rounded-full px-6 py-3"
            type="text"
            name="department"
            defaultValue="Tech"
          />
          <label>Team</label>
          <input
            className="text-sm outline-none border border-gray-900 rounded-full px-6 py-3"
            type="text"
            name="team"
            defaultValue="Team-A"
          />
          <label>Client</label>
          <input
            className="text-sm outline-none border border-gray-900 rounded-full px-6 py-3"
            type="text"
            name="client"
            defaultValue="John Doe"
          />
          <label>Priority</label>
          <select className="text-sm outline-none border border-gray-900 rounded-full pl-6 pr-7 py-3 selection:">
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
          <label>Status</label>
          <select className="text-sm outline-none border border-gray-900 rounded-full pl-6 pr-7 py-3 selection:">
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
          <label>Stage</label>
          <select className="text-sm outline-none border border-gray-900 rounded-full pl-6 pr-7 py-3 selection:">
            <option value="Initial">Initial</option>
          </select>
        </div>
        {/* file Upload */}
        <div className="flex flex-col gap-6">
          <p className="font-medium text-sm">Upload your job description</p>
          <div
            {...getRootProps({
              className:
                "dropzone flex items-center justify-center gap-2 border-dashed border-2 border-[#23B574] cursor-pointer rounded-lg py-14",
            })}
          >
            <input {...getInputProps()} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.26 22.2498H8.73998C3.82998 22.2498 1.72998 20.1498 1.72998 15.2398V15.1098C1.72998 10.6698 3.47998 8.52978 7.39998 8.15978C7.79998 8.12978 8.17998 8.42978 8.21998 8.83978C8.25998 9.24978 7.95998 9.61978 7.53998 9.65978C4.39998 9.94978 3.22998 11.4298 3.22998 15.1198V15.2498C3.22998 19.3198 4.66998 20.7598 8.73998 20.7598H15.26C19.33 20.7598 20.77 19.3198 20.77 15.2498V15.1198C20.77 11.4098 19.58 9.92978 16.38 9.65978C15.97 9.61978 15.66 9.25978 15.7 8.84978C15.74 8.43978 16.09 8.12978 16.51 8.16978C20.49 8.50978 22.27 10.6598 22.27 15.1298V15.2598C22.27 20.1498 20.17 22.2498 15.26 22.2498Z"
                fill="#23B574"
              />
              <path
                d="M12 15.7501C11.59 15.7501 11.25 15.4101 11.25 15.0001V3.62012C11.25 3.21012 11.59 2.87012 12 2.87012C12.41 2.87012 12.75 3.21012 12.75 3.62012V15.0001C12.75 15.4101 12.41 15.7501 12 15.7501Z"
                fill="#23B574"
              />
              <path
                d="M15.3501 6.59994C15.1601 6.59994 14.9701 6.52994 14.8201 6.37994L12.0001 3.55994L9.18009 6.37994C8.89009 6.66994 8.41009 6.66994 8.12009 6.37994C7.83009 6.08994 7.83009 5.60994 8.12009 5.31994L11.4701 1.96994C11.7601 1.67994 12.2401 1.67994 12.5301 1.96994L15.8801 5.31994C16.1701 5.60994 16.1701 6.08994 15.8801 6.37994C15.7401 6.52994 15.5401 6.59994 15.3501 6.59994Z"
                fill="#23B574"
              />
            </svg>
            <p className="text-[#23B574]">Drop or upload your file</p>
          </div>
          {/* text area */}
          <p className="font-medium text-sm">Job Description</p>
          <textarea
            className="text-sm w-full h-[25rem] md:h-[34.3rem] border-2 outline-none p-3 rounded-lg resize-none"
            name="description"
            placeholder="Copy/Paste your job description"
          ></textarea>
        </div>
      </div>
      <div className="bg-white flex md:gap-8 gap-3 justify-end px-6 pb-3 mb-5 rounded-b-lg">
        <button className="rounded-full px-5 py-3 md:px-8 md:py-5 border-2 border-[#23B574] text-[#23B574]">
          Cancel
        </button>
        <button className="rounded-full px-5 py-3 md:px-8 md:py-5 bg-[#23B574] border-2 border-[#23B574] text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default Main;
