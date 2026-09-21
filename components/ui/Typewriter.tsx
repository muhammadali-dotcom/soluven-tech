"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export function Typewriter({
    words,
    typingSpeed = 100,
    deletingSpeed = 60,
    pauseDuration = 1500,
}: TypewriterProps) {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!words.length) return;

        const currentWord = words[wordIndex];

        if (!isDeleting && text === currentWord) {
            const timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseDuration);

            return () => clearTimeout(timeout);
        }

        if (isDeleting && text === "") {
            const timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, 0);

            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(
            () => {
                setText((prev) =>
                    isDeleting
                        ? prev.slice(0, -1)
                        : currentWord.slice(0, prev.length + 1)
                );
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [
        text,
        isDeleting,
        wordIndex,
        words,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
    ]);

    return (
        <span className="inline-block">
            {text}
            <span
                aria-hidden="true"
                className="ml-1 inline-block animate-pulse"
            >
                |
            </span>
        </span>
    );
}