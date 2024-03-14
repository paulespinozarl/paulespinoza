import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center text-xs lg:text-sm p-8 bg-slate-100 w-full h-10 text-gray-900">
        <span>Desarrollado por Paul Espinoza - 2024 ◦</span>
        <i className="ml-1">
          <FaRegCopyright size={12} />
        </i>
      </div>
    </>
  );
};
