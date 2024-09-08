type props = {
  problemNumber: number,
  title: string,
};

export const PorblemPageHeader = ({ problemNumber, title }: props) => {
  return (
    <div className="Header w-full flex-1 h-12 px-5 border-b-2 flex items-center gap-2 bg-light200 dark:bg-dark200 border-light300 dark:border-dark300">
      <h1 className="text-2xl font-semibold space-x-2">
        <span>{`#${problemNumber}`}</span> <span>{title}</span>
      </h1>
      <div className="ml-auto">
        <ThemeChanger />
      </div>

      <div className="Header w-full flex-1 h-14 px-5 border-b-2 flex items-center bg-light200 dark:bg-dark200 border-light300 dark:border-dark300">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-blue-500">
            <a href="/">Logo</a>
          </div>

          {/* Search Component */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-l-md bg-white dark:bg-gray-800 dark:border-gray-600"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FaSearch className="text-gray-400 dark:text-gray-600" />
            </span>
          </div>

          {/* Daily Streak Component */}
          <div className="flex items-center gap-2">
            <FaRocket className="text-yellow-500" />
            <span>Streak: 5</span>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          {/* User Profile and Buttons */}
          {isUserSignedIn ? (
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-600 dark:text-gray-400" />
              <span>Username</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
                Sign In
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign Up
              </button>
            </div>
          )}

          {/* Theme Changer
        <ThemeChanger /> */}
        </div>
      </div>
    </div>
  );
};
