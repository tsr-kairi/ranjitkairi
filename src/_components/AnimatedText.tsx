import React, { useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  /** Words rendered with the gradient highlight class */
  highlightWords?: string[];
  highlightClassName?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlighted?: boolean;
  highlightClassName?: string;
}

function Char({ char, progress, range, highlighted, highlightClassName }: CharProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block">
      <span className={`invisible ${highlighted ? highlightClassName : ''}`}>{char}</span>
      <motion.span
        className={`absolute left-0 top-0 ${highlighted ? highlightClassName : ''}`}
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

/**
 * Character-by-character scroll reveal: each character fades from 0.15 to
 * full opacity as the paragraph moves through the viewport (motionsites.ai style).
 * Characters are grouped per word so line wrapping only happens at spaces.
 */
const AnimatedText = ({
  text,
  className,
  style,
  highlightWords = [],
  highlightClassName = 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent',
}: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  });
  const words = text.split(' ');
  const totalChars = text.length;
  let charCursor = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const wordStart = charCursor;
        charCursor += word.length + 1;
        const highlighted = highlightWords.includes(word);
        return (
          <span key={wordIndex}>
            <span className="inline-block">
              {word.split('').map((char, charIndex) => {
                const globalIndex = wordStart + charIndex;
                return (
                  <Char
                    key={charIndex}
                    char={char}
                    progress={scrollYProgress}
                    range={[
                      globalIndex / totalChars,
                      Math.min((globalIndex + 1) / totalChars, 1),
                    ]}
                    highlighted={highlighted}
                    highlightClassName={highlightClassName}
                  />
                );
              })}
            </span>
            {wordIndex < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
