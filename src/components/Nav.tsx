import { useRef } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Nav = () => {
    const navRef = useRef<HTMLUListElement | null>(null)
    const handleScroll = (direction: string)=>{
        if (navRef.current){
            const scrollAmount = 150
            navRef.current.scrollBy({
                left: direction==='left'? -scrollAmount:scrollAmount,
                behavior: 'smooth'
        })
        }
    }
    return (
        <div className="sticky top-0 bg-white shadow-sm  flex justify-between py-4 px-2 sm:grid sm:grid-cols-12  sm:py-2">
            <h1 className="text-xl sm:col-span-1 sm:text-3xl">SAT</h1>
            <div className="hidden sm:flex items-center sm:col-span-1 sm:gap-2 ">
                <button onClick={()=>handleScroll('left')}> <FaChevronCircleLeft /></button>

                <button onClick={()=>handleScroll('right')}><FaChevronCircleRight /></button>
            </div>
            <div className=" hidden sm:block sm:col-span-7 ">
                <ul ref={navRef} className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-none items-center pt-1 mx-auto">
                    <li>Home</li>
                    <li>Programming</li>
                    <li>Data analysis</li>
                    <li>Tutorials</li>
                    <li>Exam</li>
                    <li>Files</li>
                    <li>Exam Stat</li>
                    <li>Reult Sheet</li>

                </ul>
            </div>
            <div className=" flex justify-center gap-5  sm:col-span-3 sm:pt-1">
                <span>Log In</span>
                <span>Register</span>
            </div>
            <span className="flex items-center sm:hidden"><GiHamburgerMenu /></span>

        </div>
    );
};


export default Nav;

