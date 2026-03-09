"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const car = document.getElementById("car");
        const trail = document.getElementById("trail");
        const letters = gsap.utils.toArray(".value-letter") as HTMLElement[];
        const valueAdd = document.querySelector(".value-add") as HTMLElement;

        if (!car || !trail || !valueAdd) return;

        const valueRect = valueAdd.getBoundingClientRect();
        const letterOffsets = letters.map((letter) => letter.offsetLeft);

        const roadWidth = window.innerWidth;
        const carWidth = 150;
        const endX = roadWidth - carWidth;

        gsap.to(car, {
            scrollTrigger: {
                trigger: ".section",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: ".track",
            },
            x: endX,
            ease: "none",
            onUpdate: () => {
                const carX = (gsap.getProperty(car, "x") as number) + carWidth / 2;
                letters.forEach((letter, i) => {
                    const letterX = valueRect.left + letterOffsets[i];
                    if (carX >= letterX) {
                        letter.style.opacity = "1";
                    } else {
                        letter.style.opacity = "0";
                    }
                });
                gsap.set(trail, { width: carX });
            },
        });

        gsap.to("#box1", {
            scrollTrigger: {
                trigger: ".section",
                start: "top+=400 top",
                end: "top+=600 top",
                scrub: true,
            },
            opacity: 1,
        });

        gsap.to("#box2", {
            scrollTrigger: {
                trigger: ".section",
                start: "top+=600 top",
                end: "top+=800 top",
                scrub: true,
            },
            opacity: 1,
        });

        gsap.to("#box3", {
            scrollTrigger: {
                trigger: ".section",
                start: "top+=800 top",
                end: "top+=1000 top",
                scrub: true,
            },
            opacity: 1,
        });

        gsap.to("#box4", {
            scrollTrigger: {
                trigger: ".section",
                start: "top+=1000 top",
                end: "top+=1200 top",
                scrub: true,
            },
            opacity: 1,
        });

    }, { scope: container });

    const headlineChars = ["W", "E", "L", "C", "O", "M", "E", "\u00A0", "I", "T", "Z", "F", "I", "Z", "Z"];

    return (
        <main ref={container}>
            <div className="section">
                <div className="track">

                    <div className="road" id="road">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/McLaren 720S 2022 top view.png"
                            alt="car"
                            className="car"
                            id="car"
                        />

                        <div className="trail" id="trail"></div>

                        <div className="value-add" id="valueText">
                            {headlineChars.map((char, index) => (
                                <span key={index} className="value-letter">
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="text-box" id="box1" style={{ top: "3%", right: "30%" }}>
                        <span className="num-box">58%</span> Increase in pick up point use
                    </div>
                    <div className="text-box" id="box2" style={{ bottom: "3%", right: "35%" }}>
                        <span className="num-box">23%</span> Decreased in customer phone calls
                    </div>
                    <div className="text-box" id="box3" style={{ top: "3%", right: "5%" }}>
                        <span className="num-box">27%</span> Increase in pick up point use
                    </div>
                    <div className="text-box" id="box4" style={{ bottom: "3%", right: "10.5%" }}>
                        <span className="num-box">40%</span> Decreased in customer phone calls
                    </div>

                </div>
            </div>
        </main>
    );
}
