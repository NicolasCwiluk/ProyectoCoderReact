import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>Mundo Cafe</h4>

      <ul className="containerCategories">
        <li>Tienda</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
