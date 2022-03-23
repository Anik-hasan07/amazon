import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      
  
      <BrowserRouter>
      <Header/>
    <Routes>
     
          <Route path="/" element={<Shop/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/review" element={<OrderReview/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/placeorder" element={<PlaceOrder/>} />
          <Route path="*" element={<NotFound/>}/>
        
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
