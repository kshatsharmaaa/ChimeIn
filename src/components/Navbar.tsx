import { useState } from "react"
import { Link } from "react-router"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className="bg-white text-black border-b-2 border-orange-500 p-4 shadow-md font-sans">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-extrabold text-black font-serif">
                Chime<span className="text-orange-500">In</span>
            </Link>
            
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 text-lg font-semibold font-sans">
                <Link to="/" className="hover:text-orange-500">Home</Link>
                <Link to="/create" className="hover:text-orange-500">Create Post</Link>
                <Link to="/communities" className="hover:text-orange-500">Communities</Link>
                <Link to="/community/create" className="hover:text-orange-500">Create Community</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen((prev) => !prev)}>
                    {menuOpen ? (
                        <span className="text-2xl text-orange-500">✖</span>
                    ) : (
                        <span className="text-2xl text-orange-500">☰</span>
                    )}
                </button>
            </div>
        </div>

        {/* Mobile Links */}
        {menuOpen && (
            <div className="md:hidden bg-white shadow-lg border-t-2 border-orange-500 p-4 font-sans">
                <div className="flex flex-col items-center space-y-4 text-lg font-semibold">
                    <Link to="/" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/create" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Create Post</Link>
                    <Link to="/communities" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Communities</Link>
                    <Link to="/community/create" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Create Community</Link>
                </div>
            </div>
        )}
    </nav>
    )
}