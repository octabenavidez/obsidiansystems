import Footer from "./Footer";

/**
 * Layout
 * Wraps every page with a consistent header, footer, and global styles.
 */
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
        <main className="grow py-7 md:py-14">{children}</main>
        {/* <main className="grow px-12 py-7 md:px-24 md:py-14">{children}</main> */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
