import Link from "next/link";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="mr-4 pt-10 ml-4 pb-20 flex border-t items-center justify-between">
        <h2 className="text-base">&copy; copyright 2024 reserved</h2>
        <ul className="flex space-x-4">
            <li><CiLinkedin /></li>
            <li><CiTwitter /></li>
            <li><CiInstagram /></li>
        </ul>
    </div>
    </>
  );
};

export default Footer;
