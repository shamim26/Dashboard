const TitleBar = () => {
  return (
    <div className="bg-white w-11/12 mx-auto rounded-lg my-8 p-5 flex flex-wrap md:flex-nowrap gap-6 items-center justify-between">
      <div>
        <p className="text-sm text-[#556571]">Job Title</p>
        <select className="text-sm font-medium" name="" id="">
          <option value="Frontend Developer">Frontend Developer</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="inline-block ml-2"
        >
          <path
            d="M16.7501 7.68336C15.2417 7.68336 14.6251 6.6167 15.3751 5.30836C15.8084 4.55003 15.5501 3.58336 14.7917 3.15003L13.3501 2.32503C12.6917 1.93336 11.8417 2.1667 11.4501 2.82503L11.3584 2.98336C10.6084 4.2917 9.37508 4.2917 8.61675 2.98336L8.52508 2.82503C8.15008 2.1667 7.30008 1.93336 6.64175 2.32503L5.20008 3.15003C4.44175 3.58336 4.18341 4.55836 4.61675 5.3167C5.37508 6.6167 4.75841 7.68336 3.25008 7.68336C2.38341 7.68336 1.66675 8.3917 1.66675 9.2667V10.7334C1.66675 11.6 2.37508 12.3167 3.25008 12.3167C4.75841 12.3167 5.37508 13.3834 4.61675 14.6917C4.18341 15.45 4.44175 16.4167 5.20008 16.85L6.64175 17.675C7.30008 18.0667 8.15008 17.8334 8.54175 17.175L8.63341 17.0167C9.38341 15.7084 10.6167 15.7084 11.3751 17.0167L11.4667 17.175C11.8584 17.8334 12.7084 18.0667 13.3667 17.675L14.8084 16.85C15.5667 16.4167 15.8251 15.4417 15.3917 14.6917C14.6334 13.3834 15.2501 12.3167 16.7584 12.3167C17.6251 12.3167 18.3417 11.6084 18.3417 10.7334V9.2667C18.3334 8.40003 17.6251 7.68336 16.7501 7.68336ZM10.0001 12.7084C8.50842 12.7084 7.29175 11.4917 7.29175 10C7.29175 8.50836 8.50842 7.2917 10.0001 7.2917C11.4917 7.2917 12.7084 8.50836 12.7084 10C12.7084 11.4917 11.4917 12.7084 10.0001 12.7084Z"
            fill="#556571"
          />
        </svg>
      </div>
      <div>
        <p className="text-sm text-gray-700">Hiring Manager</p>
        <p className="text-sm font-medium">Nail Patel</p>
      </div>
      <div>
        <p className="text-sm text-gray-700">Department</p>
        <p className="text-sm font-medium">Techn</p>
      </div>
      <div>
        <p className="text-sm text-gray-700">Team</p>
        <p className="text-sm font-medium">Team-A</p>
      </div>
      <div>
        <p className="text-sm text-gray-700">Clientr</p>
        <p className="text-sm font-medium">John Doe</p>
      </div>
      <div>
        <p className="text-sm text-gray-700">Status</p>
        <p className="text-sm font-medium text-green-500">Open</p>
      </div>
      <div>
        <p className="text-sm text-gray-700">Priority</p>
        <p className="text-sm font-medium text-[#EB5757]">High</p>
      </div>
    </div>
  );
};

export default TitleBar;
