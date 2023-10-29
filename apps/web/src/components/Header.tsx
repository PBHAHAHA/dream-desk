'use client';
import { Menu } from 'lucide-react';
import MainContainer from './MainContainer';
import ThemeSwitcher from './ThemeSwitcher';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
const Header = () => {
  return (
    <div className="w-full bg-white h-16 shadow-sm dark:bg-[#151515] sticky top-0 z-50">
      <MainContainer>
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center">
            <Menu className="md:hidden"></Menu>
            <div className=" ml-20 md:ml-0 md:block text-lg py-2 px-4 bg-white text-black">
              NewBees
            </div>
            {/* <div className=" md:hidden">桌搭社</div> */}
            <ul className="ml-10 hidden md:block">
              <li>首页</li>
            </ul>
          </div>
          <div className="flex">
            <div className="mr-2">
              <ThemeSwitcher></ThemeSwitcher>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>头像</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Header;
