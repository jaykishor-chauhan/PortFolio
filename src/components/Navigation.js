import { useState, useEffect } from "react";
import { Link } from "react-scroll";
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId, offset = 100) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -offset;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: "About", href: "#about", onClick: () => scrollToSection('about') },
        { name: "Skills", href: "#skills", onClick: () => scrollToSection('skills') },
        { name: "Projects", href: "#projects", onClick: () => scrollToSection('projects') },
        { name: "Experience", href: "#experience", onClick: () => scrollToSection('experience') },
        { name: "Publication", href: "#publication", onClick: () => scrollToSection('publication') },
    ];

    return (
        <header
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full shadow-lg border ${isScrolled
                ? "h-[4.2rem] bg-white/80 backdrop-blur-xl border-gray-200 scale-95 w-[90%] max-w-3xl"
                : "h-[4.2rem] bg-white w-[95%] max-w-4xl border-gray-300"
                }`}
        >
            <div className="mx-auto h-full px-6">
                <nav className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={750}
                        to="home"
                        className="flex justify-center items-center"
                    >
                        <div className="pt-0.5 w-30 h-10 ml-3 cursor-pointer scale-125 lg:scale-150 lg:ml-10">
                            <p className="text-blue-900 font-bold text-2xl">
                                Portfo
                                <span className="text-dark-orange">lio</span>
                                <span className="text-dark-orange">.</span>
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    item.onClick?.();
                                }}
                                className="text-sm text-gray-600 hover:text-orange-500 transition-all duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-4 py-2 text-sm rounded-full bg-dark-orange text-white hover:bg-blue-900 transition"
                        >
                            Get In Touch
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            className="p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? (
                                // Cross Icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Sheet */}
            {isMobileMenuOpen && (
                <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 z-50
                        transition-all duration-300
                        ${isScrolled
                            ? "w-[100%] max-w-2xl bg-white/100 backdrop-blur-xl border-gray-200 scale-95"
                            : "w-[95%] max-w-3xl bg-white/100 border-gray-300 my-2"
                        }
                        border rounded shadow-lg
                    `}
                >
                    <div className="relative flex flex-col items-center py-6 px-4">
                        <div className="flex flex-col gap-4 mt-2 w-full">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg text-gray-700 hover:text-orange-500 transition text-center"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsMobileMenuOpen(false);
                                        item.onClick?.();
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    scrollToSection('contact');
                                }}
                                className="mt-4 px-4 py-3 w-full text-base rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold hover:opacity-90 transition"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>

    );
};

export default Navigation;
