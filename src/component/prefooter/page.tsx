import Link from "next/link";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const PreFooter = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-7xl font-bold mb-6">Let{'\''}s Work-Together</h2>
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col items-end">
            <button className="bg-black text-white border border-white py-2 px-4 rounded-lg mb-4 hover:bg-gray-800 hover:border-gray-800 transition duration-300 w-60">Contact Me</button>
            <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 w-60">Visit My LinkedIn</button>
        </div>
    </div>

    </>
  );
};

export default PreFooter;