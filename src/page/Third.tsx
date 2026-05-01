import { motion } from "framer-motion";
export const Third = () => {
  // สร้างละอองฟุ้งๆ (Particles)
  const particles = [...Array(20)];

  return (
    <div className="w-full min-h-dvh flex flex-col justify-center items-center bg-gradient-to-b from-[#4c1d95] via-[#831843] to-[#0f172a] relative overflow-hidden p-6 text-center">
      
      {/* 🧚 Animated Particles (ละอองนางฟ้าฟุ้งๆ) */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0, x: Math.random() * 100 + "%" }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.7, 0],
              x: (Math.random() * 100 - 50) + "%" 
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-pink-300 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* 📸 Memory Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="relative z-20 mb-10"
      >
        <div className="w-64 h-64 rounded-3xl overflow-hidden border-[6px] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndXN3bm53am9idnlid3R6amZ6bmJ6amZ6bmJ6amZ6bmJ6amZ6biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L95W4wv8nnb9K/giphy.gif"
            alt="Missing you"
            className="w-full h-full object-cover object-bottom "
          />
          {/* Overlay สี Berry จางๆ */}
          <div className="absolute inset-0 bg-pink-900/20 mix-blend-overlay" />
        </div>
        
        {/* Floating Hearts */}
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-4 -left-4 text-4xl"
        >
          🍓
        </motion.div>
      </motion.div>

      {/* ✍️ Deep Message Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 2 }}
        className="z-20 max-w-[320px]"
      >
        <motion.h2 
          animate={{ color: ["#fff", "#fbcfe8", "#fff"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-3xl font-black text-white mb-6 tracking-tighter uppercase"
        >
          I Love You, Berry
        </motion.h2>

        <div className="space-y-5 text-pink-100 font-light leading-relaxed">
          <motion.p 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xl font-medium text-white"
          >
            "Be strong and patient for us..."
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="text-[15px] opacity-90 italic"
          >
            I know the distance is heavy, but please wait a little longer. 
            Soon, the day will come when you'll be back home, 
            and we'll see each other again. 
            I'm counting every second until that moment.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="pt-4 border-t border-white/10"
          >
            <p className="text-[15px] font-semibold text-teal-300">
              Stay healthy, do your best in everything, <br/>
              and remember that my heart is always with you.
            </p>
          </motion.div>
        </div>

        {/* 🕯️ The "Crying" Sign-off (ความรู้สึกที่รอคอย) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 2 }}
          className="mt-12 opacity-60 flex flex-col items-center"
        >
          <div className="flex gap-2 mb-2">
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                className="w-1 h-1 bg-white rounded-full"
              />
            ))}
          </div>
          <p className="text-xs font-serif italic tracking-[0.2em]">
            Waiting for your return...
          </p>
        </motion.div>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-pink-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-teal-600/20 rounded-full blur-[100px]" />
    </div>
  );
};