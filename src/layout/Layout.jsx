import Footer from "./Footer";

/**
 * Layout
 * Wraps every page with a consistent header, footer, and global styles.
 */
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col overflow-x-hidden text-white">
        <main className="grow py-7 md:py-14">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
