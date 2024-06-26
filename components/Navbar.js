import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logo.png";
import { Button } from "./ui/button";
import { CircleEllipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  {
    title: "About us",
    href: "/",
  },
  {
    title: "Registration",
    href: "/",
  },
  {
    title: "Careers",
    href: "/",
  },
  {
    title: "Contact us",
    href: "/",
  },
];
const Navbar = () => {
  return (
    <nav className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <Link href={"/"}>
            <Image src={logoImg} alt="logo" />
          </Link>
          <div className="md:hidden block">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CircleEllipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navLinks.map((item, index) => (
                  <DropdownMenuItem
                    className="flex flex-row justify-center"
                    key={`${item.title}${index}`}
                  >
                    {item.title === "Contact us" ? (
                      <Button className="ml-2 rounded-full bg-custom-blue text-white px-6 shadow-lg shadow-custom-blue hover:bg-custom-blue">
                        {item.title}
                      </Button>
                    ) : (
                      <Link className="capitalize" href={item.href}>
                        {item.title}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ul className="hidden md:flex gap-4 items-center flex-row">
            {navLinks.map((item, index) => (
              <li key={`${item.title}${index}`}>
                {item.title === "Contact us" ? (
                  <Button className="ml-2 rounded-full bg-custom-blue text-white px-6 shadow-lg shadow-custom-blue hover:bg-custom-blue">
                    {item.title}
                  </Button>
                ) : (
                  <Link className="capitalize" href={item.href}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
