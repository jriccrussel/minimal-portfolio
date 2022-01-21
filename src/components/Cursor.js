import gsap from 'gsap'
import React, { useEffect } from 'react'
import './Cursor.scss'

const Cursor = () => {

    useEffect(() => {        
  
        let mouseCursor = document.querySelector(".cursor");
        let btn = document.querySelectorAll("a");

        console.log(btn)

        window.addEventListener("mousemove", cursor);

        function cursor(e){
        gsap.to(mouseCursor, 0.4, {
            x: e.clientX,
            y: e.clientY
        });
        }

        btn.forEach(link => {
            link.addEventListener("mouseover", ()=>{
                mouseCursor.classList.add("scale-cursor");
                gsap.to(mouseCursor, 0.4, {
                scale: 2,
                cursor: "not-allowed"
                });
            });

            link.addEventListener("mouseleave", ()=>{
                mouseCursor.classList.remove("scale-cursor");
                gsap.to(mouseCursor, 0.4, {
                scale: 1
                });
            });
        });
    }, [])

    return (
        <>
            <div className="cursor"></div>
        </>
    )
}

export default Cursor
