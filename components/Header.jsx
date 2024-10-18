import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 bg-white shadow flex justify-evenly items-center">
      <h1 className="text-4xl font-bold text-center">My Blog</h1>
      <nav className="flex justify-end mr-5">
        <ul className="flex items-center">
          <li className="mr-6">
            <Link href="/login">
              <div className="text-blue-500 hover:text-blue-800 ">Login</div>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <div className="text-blue-500 hover:text-blue-800">Signup</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
