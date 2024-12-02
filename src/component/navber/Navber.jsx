import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

import Btn from "../button/Btn";
 function Navbers() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
   
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-primary pt-3">
      <NavbarContent className=" ">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-secondary "
        />
        <NavbarBrand>
          
          <p className="font-bold text-inherit">
            <img className=" " src="img/Logo.png" alt="" />
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent  className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link className="navberitme" color="foreground" href="#">
          About Us
          </Link>
        </NavbarItem>
      <NavbarItem>
          <Link className="navberitme" color="foreground" href="#">
          Pricing
          </Link>
        </NavbarItem>
      <NavbarItem>
          <Link className="navberitme" color="foreground" href="#">
          Customers
          </Link>
        </NavbarItem>
      <NavbarItem>
          <Link className="navberitme" color="foreground" href="#">
          Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        
        <NavbarItem className="md:flex gap-6">
          <Btn title='Book a Demo' className=' hidden  md:block w-[122px] h-[36px] py-1 px-2'/>
          <Btn title='Contact Us' className=' hidden  md:block w-[122px] h-[36px] py-1 px-4 bg-black text-white border-white border-solid border-[1.4893px]'/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" bg-primary">
     
      {menuItems.map((item, index) => (
          <NavbarMenuItem   key={`${item}-${index}`}>
            <Link 
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className=" mt-2 text-white text-center"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
export default Navbers;