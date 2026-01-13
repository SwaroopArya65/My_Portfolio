import { NavLink } from "react-router-dom";

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
    <nav className="bg-neutral-secondary-soft border-y border-default">
      <div className="max-w-7xl px-4 py-3 mx-auto">
        <ul className="flex space-x-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
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
      </div>
    </nav>
  );
};

export default MainNav;