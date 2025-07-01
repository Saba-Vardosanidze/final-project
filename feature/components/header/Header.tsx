"use client";
import {HeaderList} from "@/feature/data/data";
import Image from "next/image";
import Link from "next/link";
import {motion} from "motion/react";
import {useEffect, useState} from "react";
const Header = () => {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1000) {
        setIsUp(false);
      }
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return;
  }, []);

  return (
    <div>
      <header className="lg:py-[24px] py-[13px] relative bg-[#f6f5f4] z-20 overflow-hidden w-full lg:flex lg:justify-center">
        <div className="max-w-[1180px] justify-between w-full flex min-h-[50px] px-[20px] items-center">
          <div>
            {isUp ? (
              <button
                className="cursor-pointer flex lg:hidden"
                onClick={() => setIsUp(!isUp)}
              >
                <Image
                  src="/close.svg"
                  alt="burgerMenu"
                  width={24}
                  height={24}
                />
              </button>
            ) : (
              <button
                className="cursor-pointer flex lg:hidden"
                onClick={() => setIsUp(!isUp)}
              >
                <Image
                  src="/Burger.svg"
                  alt="burgerMenu"
                  width={24}
                  height={24}
                />
              </button>
            )}
          </div>
          <div className="flex gap-[30px] items-center">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/GlobalTalk.svg"
                alt="logo"
                width={130}
                height={21}
              />
            </Link>
            <div className="h-[17px] hidden lg:flex w-[1px] bg-[#E0E0E0]"></div>
            <ul className="lg:flex hidden gap-[30px]">
              {HeaderList.map((eachElement) => (
                <li
                  key={eachElement.id}
                  className="text-[#757575] font-semibold cursor-pointer hover:text-[#000000] transition-all duration-300 ease-in-out"
                >
                  <a href={eachElement.link}>{eachElement.page}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-[4px] lg:gap-[30px] ">
            <div className="flex gap-[4px] lg:gap-[10px]">
              <div className="w-[32px] h-[32px] bg-[#C3DCE3] rounded-full flex items-center justify-center cursor-pointer">
                <Image src="/user.png" width={24} height={24} alt="Newuser" />
              </div>
              <div className="flex gap-[4px] items-center cursor-pointer">
                <p className="text-[12px] lg:text-[16px] font-semibold text-[#757575]">
                  User
                </p>
                <div className="flex lg:hidden">
                  <Image
                    src="/DropDown.svg"
                    alt="dropDown"
                    width={6}
                    height={4}
                  />
                </div>
              </div>
            </div>
            <button className="lg:flex hidden text-[#000000] font-bold cursor-pointer">
              Sign Out →
            </button>
          </div>
        </div>
      </header>
      <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
      <motion.div
        className="h-dvh w-full bg-[#f6f5f4] z-1 absolut flex items-center justify-center"
        initial={{y: "-150%"}}
        animate={{y: isUp ? "0" : "-150%"}}
        transition={{duration: 1}}
      >
        <ul className="flex flex-col gap-[32px] text-[#757575]">
          {HeaderList.map((eacheElement) => (
            <li
              key={eacheElement.id}
              className="text-center hover:text-[#2B788B] font-semibold transition-all duration-300 ease-in-out"
            >
              <a href={eacheElement.link}>{eacheElement.page}</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Header;
