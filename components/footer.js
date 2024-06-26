import logoImg from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const links = [
  {
    href: "/",
    text: "FAQs",
  },
  {
    href: "/",
    text: "Privacy Policy",
  },
  {
    href: "/",
    text: "Other",
  },
  {
    href: "/",
    text: "Contact us",
  },
];
const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto">
        <hr />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between my-4">
          <div className="sm:block flex justify-center">
            <Image src={logoImg} alt="logo" />
          </div>
          <ul className="flex flex-row flex-wrap sm:justify-end justify-center sm:flex-nowrap gap-2 items-center">
            {links.map((item, index) => (
              <li key={`${item.text}${index}`}>
                {item.text === "Contact us" ? (
                  <Button className="ml-2 rounded-full bg-custom-blue text-white px-6 shadow-lg shadow-custom-blue hover:bg-custom-blue">
                    {item.text}
                  </Button>
                ) : (
                  <Link href={item.href}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="sm:text-left text-center">Copyright © 2023 i2c</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
