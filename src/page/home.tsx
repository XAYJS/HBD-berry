import { useState, useEffect } from "react";
import { motion} from "framer-motion";
import { Second } from "./Second";

// --- Passcode Component (Mobile Size) ---
const PasscodeLock = ({ correctPin, onSuccess }: { correctPin: string; onSuccess: () => void }) => {
  const [pin, setPin] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleNumberClick = (num: string) => {
    if (pin.length < 6) setPin((prev) => prev + num);
  };

  const handleDelete = () => setPin((prev) => prev.slice(0, -1));

  useEffect(() => {
    if (pin.length === 6) {
      if (pin === correctPin) {
        onSuccess();
      } else {
        setError(true);
        setTimeout(() => {
          setPin("");
          setError(false);
        }, 500);
      }
    }
  }, [pin, correctPin, onSuccess]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4">
      <div className="text-center">
        <h2 className="text-white text-xl mb-4 font-medium">Enter your secret number</h2>
        <motion.div 
          animate={error ? { x: [-8, 8, -8, 8, 0] } : {}}
          className="flex gap-3 justify-center"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-white/80 transition-all ${
                pin.length > i ? "bg-white" : "bg-transparent"
              } ${error ? "border-red-500 bg-red-500" : ""}`}
            />
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-x-6 gap-y-4">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white text-2xl font-light active:bg-white/30 active:scale-90 flex items-center justify-center"
          >
            {num}
          </button>
        ))}
        <div />
        <button
          onClick={() => handleNumberClick("0")}
          className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white text-2xl font-light active:bg-white/30 active:scale-90 flex items-center justify-center"
        >
          0
        </button>
        <button onClick={handleDelete} className="w-16 h-16 text-white/80 text-sm flex items-center justify-center">
          Delete
        </button>
      </div>
    </div>
  );
};

export const Home = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="w-full min-h-dvh flex justify-center items-center bg-gradient-to-tr from-[#7028e4] to-[#e5b2ca] overflow-hidden">
      {!isUnlocked ? (
        <PasscodeLock correctPin="010206" onSuccess={() => setIsUnlocked(true)} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <Second />
        </motion.div>
      )}
    </div>
  );
};