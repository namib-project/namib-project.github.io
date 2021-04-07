import { useEffect, useRef, useState } from "react";

export const classes = (...classes) => classes.filter(Boolean).join(" ");

export const useDidUpdateEffect = (fn, inputs) => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            fn();
        } else {
            didMountRef.current = true;
        }
    }, inputs);
};

export const useDropdownHandler = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const containerRef = useRef();
    useEffect(() => {
        function handleOutsideClick(event) {
            // @ts-ignore
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                if (!dropdownOpen) return;
                setDropdownOpen(false);
            }
        }

        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [dropdownOpen, containerRef]);

    return [dropdownOpen, setDropdownOpen, containerRef];
};
