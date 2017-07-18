import React, {Component} from 'react';

import VarTiendaController from '../../controllers/tienda';
import { observer } from 'mobx';



class Pedidos extends Component {
    render(){
        return(
            <div>Pedidos</div>
        )
    }
}

export default observer(Pedidos);
