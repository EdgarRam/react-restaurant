import React, {Component} from 'react';

import Platillos from '../platillos/platillos';
import Bebidas from '../platillos/bebidas';
import Pedidos from '../pedidos/pedidos';


class Lienzo extends Component {
    render(){
        return (
            <div className="container">
                <div className="jumbotron"> Nombre de tienda</div>

                <Bebidas />
                <Platillos />

                <Pedidos />

            </div>
        )
    }
}


export default Lienzo;
