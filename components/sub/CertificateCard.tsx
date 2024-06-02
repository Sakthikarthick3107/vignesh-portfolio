import { motion } from 'framer-motion';

const slideInVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  hover: { textDecoration: "underline"  }    
};

const CertificationCard = ({ certificate }) => (
  <motion.div
    //whileHover={{ scale: 1.05 }} // Scale the card slightly when hovered
    className="w-full hover:border-[#2a0e61] p-4 rounded-md flex flex-col text-white cursor-pointer"
  >
    <img className="w-full h-60" src={certificate.image} alt={certificate.title} />
    <motion.a href=''
      className="text-xl z-[20] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      //whileHover="visible"
      variants={slideInVariants}
      transition={{ duration: 0.3 }}
    >
      {certificate.title}
    </motion.a>
    <motion.p
      className="mt-2"
      initial="hidden"
      animate="visible"
      //whileHover="visible"
      variants={slideInVariants}
      transition={{ duration: 0.3 }}
    >
      {certificate.description}
    </motion.p>
  </motion.div>
);

export default CertificationCard;
