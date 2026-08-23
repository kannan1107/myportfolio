// import { useState } from "react";

// function Navbar() {
//   const [activeMenu, setActiveMenu] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { label: "My Intro", href: "#intro", id: "intro" },
//     { label: "About", href: "#about", id: "about" },
//     { label: "Skills", href: "#skills", id: "skills" },
//     { label: "Projects", href: "#projects", id: "projects" },
//     { label: "Contact", href: "#contact", id: "contact" },
//   ];

//   return (
//     <nav className="bg-gray-800">
//       <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
//         <a className="text-xl font-bold text-white" href="#home">
//           MyApp
//         </a>

//         <button
//           aria-expanded={menuOpen}
//           aria-label={
//             menuOpen ? "Close navigation menu" : "Open navigation menu"
//           }
//           className="rounded-md p-2 text-gray-200 transition-transform duration-200 hover:bg-gray-700 active:scale-90 sm:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//           type="button"
//         >
//           <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
//         </button>

//         <div
//           className={`${menuOpen ? "flex" : "hidden"} w-full flex-col border-t border-gray-700 py-3 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-5 sm:border-0 sm:py-0`}
//         >
//           {menuItems.map((menu) => (
//             <a
//               className={`relative px-2 py-3 text-sm font-medium text-gray-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-700 hover:text-white active:scale-95 sm:py-2 sm:hover:bg-transparent sm:active:scale-90 ${
//                 activeMenu === menu.id
//                   ? "text-white after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-cyan-400"
//                   : ""
//               }`}
//               href={menu.href}
//               key={menu.id}
//               onClick={() => {
//                 setActiveMenu(menu.id);
//                 setMenuOpen(false);
//               }}
//             >
//               {menu.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
