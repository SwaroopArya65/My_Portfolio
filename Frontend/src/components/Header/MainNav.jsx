import { NavLink } from "react-router-dom";
// import logo from '../../assets/favicon.png'

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/company" },
  { name: "Work", path: "/work" },
  { name: "Blog", path: "/blog" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const MainNav = () => {
  return (
    <nav className="">
      <div className="max-w-7xl px-4 py-3 mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={logo} className="h-7 text-primary_Text" alt="portfolio Logo"/> */}
          <span className="self-center text-[2rem] text-heading font-bold font-unna whitespace-nowrap text-[#0028a4] tracking-wider">Arya Swaroop</span>
        </a>
        <ul className="flex space-x-8 text-[1.3rem] font-unna font-bold tracking-wider rtl:space-x-reverse">
          {links.map((link) => (
            <li key={link.name} className="text-primary_Text">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-fg-brand"
                    : "text-heading hover:underline"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
          <button type="button" className="text-white bg-[#163585] hover:bg-[#163585] tracking-wider font-bold leading-snug focus:ring-4 focus:outline-none focus:ring-[#5EE587]/50 rounded-md px-2 py-1 text-center inline-flex items-center font-unna  text-base sm:text-lg transition-all duration-300 hover:scale-105">Let's connect me</button>
          {/* <button type="button" class="text-primary_Text font-bold font-unna box-border focus:ring-2 font-lg tracking-wider rounded-md text-lg">SignIn</button> */}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;