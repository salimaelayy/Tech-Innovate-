import Link from "next/link";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="mr-4 pt-10 ml-4 pb-20 flex border-t items-center justify-between">
        <h2 className="text-base"><span className="font-bold text-slate-400">Tech Innovate </span>&copy;copyright 2024 reserved</h2>
        <ul className="flex space-x-4">
            <li className="border rounded-full p-1"><CiLinkedin /></li>
            <li className="border rounded-full p-1"><CiTwitter /></li>
            <li className="border rounded-full p-1"><CiInstagram /></li>
        </ul>
    </div>
    </>
  );
};

export default Footer;
