import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedOnViewProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const AnimatedOnView: React.FC<AnimatedOnViewProps> = ({
  children,
  animation = "fade",
  delay = 0,
  style,
}) => {
  const ref = useRef(null);

  // 定义配置
  const inViewOptions = {
    once: false, // 允许反复触发
    threshold: 0.3, // 当元素有 30% 可见时触发
  };

  const isInView = useInView(ref, inViewOptions);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // 当进入视口时，启动动画
      mainControls.start("visible");
    } else {
      // 👇 当离开视口时，重置动画状态
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      style={style}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnView;
