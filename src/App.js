import styles from "./styles/globalStyles.module.scss";
import OndcRoutes from "./router";
import "./api/firebase-init";
import Orders from "./components/application/orders/orders";

function App() {
  return (
    <div className={styles.background}>
      <Orders />
    </div>
  );
}

export default App;
