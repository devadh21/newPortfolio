"use client"
import { useEffect, useRef } from "react"

export default function ButtonUp() {
    const btnUp = useRef()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 600 ? btnUp.current?.classList.remove('opacity-0', 'invisible') : btnUp.current?.classList.add('opacity-0', 'invisible')
        })
    }, [])
    const handleUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }) }

    return (
        <button
            className="transition-all duration-500 rounded-md text-white p-3 bg-primary hover:bg-[#e06000] fixed opacity-0 invisible right-4 bottom-4 z-50 shadow-lg hover:shadow-xl"
            ref={btnUp}
            onClick={handleUp}
        >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5m8 6L5 7l-4 4" />
            </svg>
        </button>
    )
}
