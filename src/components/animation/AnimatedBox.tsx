import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
}

const AnimatedBox: React.FC<Props> = ({ children, ...rest }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;


