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
          <span className="self-center text-2xl text-heading font-[700] font-inter whitespace-nowrap text-primary_Text tracking-wide">Arya Swaroop</span>
        </a>
        <ul className="flex space-x-8 text-lg font-inter font-bold tracking-wider">
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
        <div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" class="gap-2 text-primary_Text hover:bg-brand-strong box-border border border-transparent focus:ring-2 focus:ring-brand-medium shadow-xs font-medium leading-5 tracking-wider rounded-md text-lg px-3 py-2 focus:outline-none">SignUp</button>
          <button type="button" class="text-primary_Text font-inter box-border border border-transparent focus:ring-2 focus:ring-brand-medium shadow-xs font-medium leading-5 tracking-wider rounded-md text-lg px-3 py-2 focus:outline-none">SignIn</button>
          <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;