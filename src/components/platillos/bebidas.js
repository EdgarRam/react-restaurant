import React, {Component} from 'react';
import './platillos.css';


import logo from '../../assets/img/logo.svg';
import VarTiendaController from '../../controllers/tienda';
import Ordenar from '../ordenar/ordenar';


class Bebidas extends Component {


    render(){
        let bebidas_div = [];

        const add_bebidas = VarTiendaController.bebidas.forEach( ( _val, _index ) =>
            bebidas_div.push(
                <div className="list-group-item" key={_index}>
                    <div className="panel-body">
                        <img role="presentation" src={logo} className="img-platillo" alt={_val.name}/>
                        <h2 className="title-platillo"> { _val.name } </h2>
                        <div className="description-platillo"> { _val.description } </div>
                        <div className="">
                            <Ordenar price={_val.price}
                                indice={_index}
                                order={( index, evt )=>{ VarTiendaController.putInOrder(  index, evt, 'bebidas' )}}/>
                        </div>
                    </div>
                </div>
            )
        )


        return(
            <div className="container col-xs-6">
                <div className="panel panel-primary">
                    <div className="list-group platillo-menu">
                        {bebidas_div}
                    </div>
                </div>
            </div>
        )
    }
}


export default Bebidas;
