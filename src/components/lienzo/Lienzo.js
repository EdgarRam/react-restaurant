import React, {Component} from 'react';

import Platillos from '../platillos/platillos';


class Lienzo extends Component {
    render(){
        return (
            <div className="container">
                <div className="jumbotron"> Nombre de tienda</div>

                <Platillos />
                <h4>Pedidos</h4>

            </div>
        )
    }
}


export default Lienzo;
