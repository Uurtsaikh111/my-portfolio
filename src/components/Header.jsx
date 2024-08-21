import { useTheme } from "@/context/ChangeTheme";
import { Burger, LightThemeButton, NightThemeButton } from "./icons/icon";
import { useState } from "react";
import Link from 'next/link';

export function Header() {
  const [modalShow, setModalShow] = useState(false);
  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divClassName =
    theme == "light"
      ? " text-black bg-white font-medium flex justify-between py-[16px] px-[30px] mx-[80px] max-w-[1440px]"
      : " text-Gray/Dark/600 font-medium bg-black flex justify-between py-[16px] px-[30px] mx-[80px] max-w-[1440px]";

  const containerClassName =
    theme == "light"
      ? "mx-auto bg-white "
      : "mx-auto bg-black ";

  return (
    <div className={containerClassName}>
      <div className={divClassName}>
        <img src="_.svg" alt="" />

        <div className="hidden sm:flex gap-[24px] items-center justify-center">
          <h6>About</h6>
          <h6>Resume</h6>
          <h6>Projects</h6>
          <Link href="/contact">
          <h6>Contact</h6>
          </Link>
          
          <div className="flex gap-[16px] ">
            <button onClick={changeThemeHandler}>
              {theme == "dark" ? <NightThemeButton /> : <LightThemeButton />}
            </button>
            </div>
          </div>
        <button className="sm:hidden" onClick={() => setModalShow(true)}><Burger/></button>
        {modalShow && <ModalMenu onClose={() => setModalShow(false)} />}
      </div>
    </div>
  );
}
const ModalMenu = ({ onClose }) => {
  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  const divClassName = `absolute top-0 right-0 w-full border min-h-[60vh] px-[112px]${
    theme == "light" ? " text-black bg-white " : " text-white bg-black "
  }`;
  return (
    <div className={divClassName}>
      <div>
        <div className="flex  justify-between m-auto p-1.5">
          <img src="_.svg" alt="" />
          <button onClick={onClose}>X</button>
        </div>
        <div className="flex flex-col gap-[16px] items-start p-1.5">
          <h6>About</h6>
          <h6>Resume</h6>
          <h6>Projects</h6>
          <Link href="/contact">
          <h6>Contact</h6>
          </Link>
        </div>
        <div>
          <div className="flex justify-between p-1.5 gap-[16px]">
            <h6>Switch Theme</h6>
            <button onClick={changeThemeHandler}>
              {theme == "dark" ? <NightThemeButton /> : <LightThemeButton />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};