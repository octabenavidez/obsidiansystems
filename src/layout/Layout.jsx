/**
 * Layout
 * Wraps every page with a consistent header, footer, and global styles.
 */
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col px-12 py-7 md:px-24 md:py-14 min-h-screen bg-[#0a0a0a] text-white">
      <main className="grow">{children}</main>
    </div>
  );
};

export default Layout;
