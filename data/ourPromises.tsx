// react icons
import { BiMessageError } from "react-icons/bi";
import { BsTransparency } from "react-icons/bs";
import { IoCloudDone } from "react-icons/io5";
import { BsChatSquareHeartFill } from "react-icons/bs";

export const ourPromises = [
  {
    id: 1,
    title: "Communication",
    text: "Clear communication between both parties enables us to work together optimally, grow and move forward. We promise to always communicate in a timely and clear manner.",
    icon: <BiMessageError size={60} />,
  },
  {
    id: 2,
    title: "Transparency",
    text: "Good or bad news, we promise to communicate honestly at all times and to give reasons for the choices and results made.",
    icon: <BsTransparency size={60} />,
  },
  {
    id: 3,
    title: "Professionalism",
    text: "We promise that all our advice and choices are always weighed with pure intentions, by experienced professionals with a view to external influences.",
    icon: <IoCloudDone size={60} />,
  },
  {
    id: 4,
    title: "Passion",
    text: "When you do what you love, the best in you comes to the fore. Tell us about your passion, then we promise to strengthen it with ours.",
    icon: <BsChatSquareHeartFill size={60} />,
  },
];
