import React, {Component} from 'react';

import VarTiendaController from '../../controllers/tienda';
import { observer } from 'mobx-react';



class Pedidos extends Component {

    getPedidos( _type ){
        let platillosPedidos = []
        VarTiendaController[_type].forEach( ( _val, _key )=>{
            if( _val.quantity > 0 ){
                platillosPedidos.push(
                    <div className="list-group-item" key={_key}>
                        <div className="panel-body">
                            <h4> {_val.name } </h4>
                            <br/>
                            <div className="">
                                <span> Cantidad: {  _val.quantity } </span>
                                <span className="precio-platillo"> Precio: { _val.price * _val.quantity } </span>
                            </div>
                        </div>
                    </div>
                )
            }
        })

        return platillosPedidos
    }

    render(){


        const llenarPlatillos = this.getPedidos( 'platillos' );
        const llenarBebidas = this.getPedidos( 'bebidas' );

        return(
            <div className="container col-xs-6">
                <div className="panel-primary">
                    <div className="list-group platillo-menu">
                        { llenarBebidas }
                        { llenarPlatillos }
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(Pedidos);
