import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

let styles = {
  
  width: '900',
 
};


  
const App = () => {

   
   
    return (
     <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 align="center">Online Grocery Store</h1>
                </div>
                 
            </div>
            <br/><br/>
            <div className="row">
            
            
             
                <form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search"/>
        </fieldset>
        </form>

                
           
</div>
            
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            
        </div>
    );
}



export default App;




