// import custom components
import Footer from "./footer";
import Header from "./header";
import Navbar from './navbar'

export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
