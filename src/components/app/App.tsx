import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Categories from '../../pages/categories'
import Products from '../../pages/products'
import ShoppingCart from  '../../pages/shoppingCart'
import Menu from '../../components/menu'
import Navbar from '../navbar'

import styles from './styles.module.css';

function App() {
  return (
      <Router>
        <div className={styles.root}>
          
          <Navbar />
        
          <Switch>
             <Route exact path="/">
              <Categories />
            </Route>

            <Route exact path="/categories">
              <Categories />
            </Route>

            <Route path="/categories/:id">
              <Products />
            </Route>

            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
