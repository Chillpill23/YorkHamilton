import { FaChartLine, FaArrowRightLong, FaGavel,FaHouse } from "react-icons/fa6";
import { ServicesType } from "../components/types/data";

export const ServicesData: ServicesType[] = [
  {
    icon: FaChartLine,
    title: "Finance",
    content: "Streamline financial processes with specialized remote talent and expert staffing solutions.",
    btnIcon:FaArrowRightLong,
    btnTitle:"Learn More",
  },
  {
    icon: FaGavel,
    title: "Legal",
    content: "Boost law firm productivity by delegating essential legal tasks to specialised remote legal professionals.",
    btnIcon:FaArrowRightLong,
    btnTitle:"Learn More",
  },
  {
    icon: FaHouse,
    title: "Real Estate",
    content: "Optimise real estate operations with specialised remote professionals for seamless staffing solutions",
    btnIcon:FaArrowRightLong,
    btnTitle:"Learn More",
  },
];