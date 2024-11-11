import { motion } from 'framer-motion';
import TokenLogo from './TokenLogo';
import icons from '../utils/icons';

const generateBalancedPosition = (index, totalTokens, distance) => {
    const segments = 15; // Circle divided into 15 equal parts
    const permutation = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7]; // Alternating sequence for balanced distribution

    const segmentIndex = permutation[index % segments];
    const angle = (2 * Math.PI * segmentIndex) / segments;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return { x, y };
};

const TokensAnimation = () => {
    const distance = 300; // Fixed distance from the center
    const delayBetweenIcons = 0.25; // Delay between tokens' animations
    const animationDuration = 6; // Total duration for each token's animation
    const repeatDelay = -0.5; // Overlap for seamless repetition

    return (
        <div className="flex justify-center items-center h-[500px] mt-[-50px] relative z-[9999] overflow-hidden">
            {icons.map((icon, index) => {
                const { x, y } = generateBalancedPosition(index, icons.length, distance);
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0], // Fade in, stay, fade out
                            scale: 0.9,
                            x,
                            y,
                        }}
                        transition={{
                            delay: index * delayBetweenIcons,
                            duration: animationDuration,
                            times: [0.1, 0.2, 0.65, 0.7], // Fast fade in, stay, fast fade out
                            ease: 'linear',
                            repeat: Infinity,
                            repeatDelay,
                        }}
                        className="absolute"
                    >
                        <TokenLogo logo={icon} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TokensAnimation;
