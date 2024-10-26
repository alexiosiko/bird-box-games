"use client";
import Link from "next/link";
import Image from "next/image"

export const Navbar = () => {
  

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/logo/company-logo-black.svg"
                  width="146"
                  alt="Poly Tech Development"
                  height="96"
                />
              </span>
          </span>

       
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={`#${menu.id}`
				} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}


const navigation = [
	{   name: "Home", id: "home"},
	{   name: "About Us", id: "about"},
	{   name: "Portfolio", id: "portfolio"},
	{   name: "FAQ", id: "faq"},
	{   name: "Contact", id: "Contact"},
];
