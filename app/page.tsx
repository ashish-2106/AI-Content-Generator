import { Button } from "@/components/ui/button"; // Import any other components you need
import Dashboard from "./dashboard/page"; // Import your Dashboard component
import Header from "./dashboard/_components/Header"; // Import your Header component
import SideNav from "./dashboard/_components/SideNav"; // Import your SideNav component

export default function Home() {
  return (
    <div>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <Header />
      </div>
      <div  className='md:ml-64'>
        <Dashboard/>
      </div>

    </div>
  );
}
