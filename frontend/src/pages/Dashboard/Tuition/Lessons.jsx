import { AnimatePresence, motion } from "framer-motion";
import Button from "@components/Button";
import { IoMdClose } from "react-icons/io";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import useMatchMeasure from "@hooks/useMatchMeasure";

const ButtonAnimate = motion(Button);

const Lessons = () => {
  const navigate = useNavigate();
  const { setCourses } = useOutletContext();
  const isLaptop = useMatchMeasure(1024, "min");
  const handleCloseModal = () => {
    navigate("/dashboard/tuition");
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        scale: 0.8,
        x: !isLaptop ? "-50%" : 0,
        y: !isLaptop ? "-50%" : 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: !isLaptop ? "-50%" : 0,
        y: !isLaptop ? "-50%" : 0,
        background: !isLaptop
          ? "rgba(38, 102, 207, 1)"
          : "rgba(38, 102, 207, 0)",
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        x: !isLaptop ? "-50%" : 0,
        y: !isLaptop ? "-50%" : 0,
      }}
      className="tuition__lessons"
    >
      <AnimatePresence>
        {!isLaptop && (
          <ButtonAnimate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            isSound={false}
            modifiers="close"
          >
            <IoMdClose
              color="#F5F2E7"
              className="tuition__lessons__close"
              size={20}
            />
          </ButtonAnimate>
        )}
      </AnimatePresence>
      <div className="tuition__lessons-container">
        <Outlet context={{ setCourses }} />
      </div>
    </motion.article>
  );
};

export default Lessons;
