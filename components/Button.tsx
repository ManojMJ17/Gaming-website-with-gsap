import React from "react";

import clsx from "clsx";

interface ButtonProps {
  title: string;
  id?: string;
  rightIcon?: React.ReactNode; // Optional prop
  leftIcon?: React.ReactNode; // Optional prop
  containerClass?: string; // Optional prop
}

const Button: React.FC<ButtonProps> = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
