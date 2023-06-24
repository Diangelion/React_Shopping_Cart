// Component
import Header from "../components/Header";
import Footer from "../components/Footer";

// Template
import CartProvider from "./StateCartProvider";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
    </CartProvider>
  );
}
