import Footer from "./Footer";

/**
 * Layout
 * Wraps every page with a consistent header, footer, and global styles.
 */
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#0a0a0a] px-12 py-7 text-white md:px-24 md:py-14">
        <main className="grow">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
