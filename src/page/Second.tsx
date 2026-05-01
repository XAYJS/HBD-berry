import { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { Third } from "./Third";

export const Second = () => {
  const [showNextPage, setShowNextPage] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);

  const cakeVariants: Variants = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const layerVariants: Variants = {
    initial: { y: 40, opacity: 0, scale: 0.8 },
    animate: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 10 
      } 
    },
  };

  const foilColors = ['#fbbf24', '#fbcfe8', '#ccfbf1', '#e2e8f0'];

  if (showNextPage) return <Third />;

  return (
    <div className="w-full min-h-dvh bg-linear-to-br from-[#0f766e] via-[#0ea5e9] to-[#10b981] overflow-hidden relative flex flex-col justify-center items-center font-sans">
      
      <div className="hidden">
        <iframe
          ref={playerRef}
          title="Birthday Music"
          width="0"
          height="0"
          src="https://www.youtube.com/embed/90w2RegGf9w?autoplay=1&enablejsapi=1"
          allow="autoplay"
        ></iframe>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={`foil-${i}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 1, 0],
              rotate: [0, 360],
              x: Math.random() * 40 - 20
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 4}px`, 
              height: `${Math.random() * 10 + 8}px`, 
              backgroundColor: foilColors[i % foilColors.length],
              borderRadius: i % 3 === 0 ? '50%' : '2px',
              boxShadow: '0 0 4px rgba(255,255,255,0.6)'
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-sm px-6 flex flex-col items-center z-20">
        
        <motion.div
          variants={cakeVariants}
          initial="initial"
          animate="animate"
          className="relative w-70 h-62.5 mb-8 flex flex-col items-center"
        >
          <motion.div variants={layerVariants} className="absolute bottom-0 w-60 h-10 bg-white/10 rounded-[50%] border-b border-white/20 shadow-2xl backdrop-blur-sm z-0" />

          <motion.div 
            variants={layerVariants} 
            className="absolute bottom-3.75 w-50 h-15 bg-[#f0fdfa] rounded-[50%] shadow-[0_25px_0_#99f6e4,0_35px_15px_rgba(0,0,0,0.15)] z-10 flex justify-center pt-8"
          >
            <span className="text-teal-500/40 text-[10px] font-black tracking-widest uppercase">HBD MY LOVE</span>
          </motion.div>

          <motion.div 
            variants={layerVariants} 
            className="absolute bottom-15 w-37.5 h-12.5 bg-white rounded-[50%] shadow-[0_20px_0_#ccfbf1] z-20"
          />

          <motion.div 
            variants={layerVariants} 
            className="absolute bottom-23.75 w-25 h-10 bg-[#e6fffa] rounded-[50%] shadow-[0_15px_0_#5eead4] z-30"
          />

          <motion.div variants={layerVariants} className="absolute bottom-33.75 z-40 flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="w-3 h-5 bg-linear-to-t from-orange-400 to-yellow-200 rounded-full shadow-[0_0_15px_#fbbf24] mb-1"
            />
            <div className="w-2 h-10 bg-[repeating-linear-gradient(45deg,#fecdd3,#fecdd3_4px,#fff_4px,#fff_8px)] rounded-sm" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="text-center w-full"
        >
          <h1 className="text-3xl font-extrabold text-white drop-shadow-lg mb-4">
            HBD my love ❤️
          </h1>
          
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl mb-8">
            <p className="text-teal-50 text-[15px] leading-relaxed italic">
              "To the person who holds my heart... <br/>
              I wish you the most beautiful birthday. <br/>
              Thank you for being my safe space and my greatest joy. <br/>
              I love you forever."
            </p>
            <p className="mt-3 text-white font-bold text-sm italic">
              — yours, always ✨
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNextPage(true)}
            className="w-full py-4 bg-white text-[#0f766e] rounded-full font-bold text-[16px] shadow-2xl active:shadow-none transition-all"
          >
            Open My Special Gift 🎁
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};