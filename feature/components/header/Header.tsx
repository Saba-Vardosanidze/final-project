import {HeaderList} from "@/feature/data/data";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="lg:py-[24px] py-[13px] w-full lg:flex lg:justify-center">
        <div className="max-w-[1180px] justify-between w-full flex min-h-[50px] px-[20px] items-center">
          <div className="cursor-pointer flex lg:hidden">
            <Image src="/Burger.svg" alt="burgerMenu" width={24} height={24} />
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
    </div>
  );
};

export default Header;
