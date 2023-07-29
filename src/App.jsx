import { useState } from "react";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import TitleBar from "./components/TitleBar";
import TopNav from "./components/TopNav";

function App() {
  const [open, setOpen] = useState(false)
  // const handleOpen 
  return (
    <div className="bg-[#EFF4FA]">
      <header>
        <TopNav setOpen={setOpen} />
      </header>
      <main className="grid md:grid-cols-custom">
        <SideNav open={open} setOpen={setOpen} />
        <div className="">
          <TitleBar />
          <Main />
        </div>
      </main>
    </div>
  );
}

export default App;
