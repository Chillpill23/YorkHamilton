import { FaChartLine, FaArrowRightLong, FaHandshakeAngle, FaGlobe } from "react-icons/fa6";
import { SolutionsType } from "../components/types/data";

export const SolutionsData: SolutionsType[] = [
  {
    icon: FaHandshakeAngle,
    title: "Strategic Partnerships ",
    content: "We establish strategic partnerships to enhance business operations and industry leadership.",
    btnIcon:FaArrowRightLong,
    btnTitle:"Learn More",
  },
  {
    icon: FaGlobe,
    title: "Global Talent Network",
    content: "We offer access to specialised talent across legal, finance, and real estate sectors.",
    btnIcon:FaArrowRightLong,
    btnTitle:"Learn More",
  },
  {
    icon: FaChartLine,
    title: "Tailored Solutions",
    content: "We provide tailored solutions that transcend geographical limits, driving growth and success.",
    btnIcon:FaArrowRightLong,
    btnTitle:"Learn More",
  },
];