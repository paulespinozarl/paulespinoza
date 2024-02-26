import { FaReact } from "react-icons/fa";
import { BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { InView } from "react-intersection-observer";

import IconRight from "../components/IconRight";
import IconLeft from "../components/IconLeft";

import { useMediaQuery } from "@react-hook/media-query";

export const Learnig = () => {
  const isShortScreen = useMediaQuery("(min-width: 700px)");

  return (
    <>
      <section className="text-gray-800 flex justify-center items-center flex-col my-6">
        <div>
          {" "}
          {InView && (
            <IconLeft
              icon={<FaReact size={isShortScreen ? 60 : 45} />}
              description={"React Native"}
            />
          )}{" "}
        </div>
        <div>
          {" "}
          {InView && (
            <IconRight
              icon={<BiLogoNodejs size={isShortScreen ? 60 : 45} />}
              description={"Node Js"}
            />
          )}{" "}
        </div>
        <div>
          {" "}
          {InView && (
            <IconLeft
              icon={<BiLogoMongodb size={isShortScreen ? 60 : 45} />}
              description={"Mongo DB"}
            />
          )}{" "}
        </div>
      </section>
    </>
  );
};
