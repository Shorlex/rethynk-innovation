import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Button = ({ textOne, textTwo, redirect, bgColor, marginX, textColor }) => {
  const route = useRouter();

  return (
    <motion.button
      type="submit"
      className={`relative h-12 px-8 overflow-hidden border border-gray-400 rounded-full mt-10 cursor-pointer ${bgColor} ${textColor} ${marginX}`}
      whileHover="hover"
      initial="rest"
      onClick={redirect}
    >
      {/* Container for both text elements */}
      <motion.div
        className="flex flex-col items-center"
        variants={{
          rest: { y: 0 },
          hover: { y: -38, opacity: 1 }, // Moves up by one text height
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="block py-2">{textOne}</span>
        <span className="block py-2">{textTwo}</span>
      </motion.div>
    </motion.button>
  );
};

export default Button;
