import { motion } from 'framer-motion';
import TokenLogo from './TokenLogo';
import icons from '../utils/icons';

const generatePositionByAngle = (distance) => {
    const angle = Math.random() * 2 * Math.PI; // Ángulo aleatorio en radianes
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    return { x, y };
};

const TokensAnimation = () => {
    const distance = 300; // Distancia constante desde el centro
    const delayBetweenIcons = 0.25; // Retraso entre animaciones de tokens
    const animationDuration = 6; // Duración total de cada token
    const repeatDelay = -0.5; // Inicia la repetición un poco antes del final

    return (
        <div className="flex justify-center items-center h-screen relative overflow-hidden">
            {icons.map((icon, index) => {
                const { x, y } = generatePositionByAngle(distance); // Posición equidistante
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
                        animate={{
                            opacity: [0, 1, 0], // Fade in (0 -> 1) seguido de fade out (1 -> 0)
                            scale: 0.9,
                            x,
                            y,
                        }}
                        transition={{
                            delay: index * delayBetweenIcons, // Retraso entre tokens
                            duration: animationDuration, // Duración total (fade in + movimiento + fade out)
                            times: [0, 0.25, 1], // Controla los cambios de opacidad
                            ease: 'linear',
                            repeat: Infinity, // Repite la animación indefinidamente
                            repeatDelay, // Ajusta la demora antes de repetir
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
