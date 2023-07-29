import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import angle from "../assets/icons/angle.png";
import person from "../assets/person.png";

const TopNav = ({ setOpen }) => {
  return (
    <div className="bg-white flex justify-between py-5 px-6 md:px-10">
      <div className=" flex items-center gap-3 md:gap-10">
        <img className="md:hidden" src={logo2} alt="" />
        <img className="md:block hidden" src={logo} alt="" />
        <img className="hidden md:block" src={angle} alt="" />
        <p className="text-gray-700 font-medium md:text-sm text-xs">
          My Jobs {">"} Frontend Developer {">"} Job Management
        </p>
      </div>
      <div className="flex items-center justify-between gap-2  md:gap-7">
        <div className="p-3 bg-[#E7EEF5] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 md:w-6 h-4 md:h-6"
          >
            <path
              d="M12 6L13.434 8.77725L16.5 9.22275L14.25 11.25L15 14.25L12 12.5625L9 14.25L9.75 11.25L7.5 9.22275L10.65 8.77725L12 6Z"
              fill="#0C579B"
            />
            <path
              d="M13.6761 21.8455C13.4697 22.2066 13.0092 22.3313 12.6488 22.1237C12.2901 21.9171 12.1661 21.4593 12.3715 21.0999L15 16.5H19.5C19.6971 16.5003 19.8923 16.4617 20.0744 16.3864C20.2565 16.3111 20.422 16.2007 20.5613 16.0613C20.7007 15.922 20.8111 15.7565 20.8864 15.5744C20.9617 15.3923 21.0003 15.1971 21 15V6C21.0003 5.80293 20.9617 5.60775 20.8864 5.42562C20.8111 5.2435 20.7007 5.07803 20.5613 4.93868C20.422 4.79933 20.2565 4.68885 20.0744 4.61358C19.8923 4.5383 19.6971 4.4997 19.5 4.5H4.5C4.30293 4.4997 4.10775 4.5383 3.92562 4.61358C3.7435 4.68885 3.57803 4.79933 3.43868 4.93868C3.29933 5.07803 3.18885 5.2435 3.11358 5.42562C3.0383 5.60775 2.9997 5.80293 3 6V15C2.9997 15.1971 3.0383 15.3923 3.11358 15.5744C3.18885 15.7565 3.29933 15.922 3.43868 16.0613C3.57803 16.2007 3.7435 16.3111 3.92562 16.3864C4.10775 16.4617 4.30293 16.5003 4.5 16.5H10.5C10.9142 16.5 11.25 16.8358 11.25 17.25C11.25 17.6642 10.9142 18 10.5 18H4.5C3.70435 18 2.94129 17.6839 2.37868 17.1213C1.81607 16.5587 1.5 15.7956 1.5 15V6C1.4999 5.60601 1.57743 5.21585 1.72816 4.85183C1.87889 4.48781 2.09986 4.15706 2.37846 3.87846C2.65706 3.59986 2.98781 3.37889 3.35183 3.22816C3.71585 3.07743 4.10601 2.9999 4.5 3H19.5C19.894 2.9999 20.2841 3.07743 20.6482 3.22816C21.0122 3.37889 21.3429 3.59986 21.6215 3.87846C21.9001 4.15706 22.1211 4.48781 22.2718 4.85183C22.4226 5.21585 22.5001 5.60601 22.5 6V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H15.8738L13.6761 21.8455Z"
              fill="#23B574"
            />
          </svg>
        </div>
        <div className="p-3 bg-[#E7EEF5] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 md:w-6 h-4 md:h-6"
          >
            <path
              d="M13.73 21C13.5544 21.3033 13.3021 21.5552 12.9985 21.7302C12.6949 21.9053 12.3505 21.9974 12 21.9974C11.6495 21.9974 11.3052 21.9053 11.0015 21.7302C10.6979 21.5552 10.4456 21.3033 10.27 21M19 8C19.7957 8 20.5587 7.68393 21.1213 7.12132C21.6839 6.55871 22 5.79565 22 5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7957 2 19 2C18.2044 2 17.4413 2.31607 16.8787 2.87868C16.3161 3.44129 16 4.20435 16 5C16 5.79565 16.3161 6.55871 16.8787 7.12132C17.4413 7.68393 18.2044 8 19 8Z"
              stroke="#0C579B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.134 11C18.715 16.375 21 18 21 18H3C3 18 6 15.867 6 8.4C6 6.703 6.632 5.075 7.757 3.875C8.883 2.675 10.41 2 12 2C12.337 2 12.672 2.03 13 2.09"
              stroke="#23B574"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* User info */}
        <div className="flex md:items-center gap-3 md:border-l-2 md:pl-7">
          <img className="w-12" src={person} alt="" />
          <div>
            <p className="text-[#0C579B] hidden md:block">Malida Lyne</p>
            <p className="text-sm hidden md:block">Recruiter</p>
          </div>
        </div>

        <button onClick={() => setOpen(true)} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
              fill="#2D3E4D"
            />
            <path
              d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
              fill="#2D3E4D"
            />
            <path
              d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
              fill="#2D3E4D"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopNav;
