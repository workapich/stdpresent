import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
    </div>
  );
};
