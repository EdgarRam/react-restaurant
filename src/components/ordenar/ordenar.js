import React, {Component} from 'react';


class Ordenar extends Component {

    updateQuantity( _evt ){
        this.props.order( this.props.indice, _evt.target.value)
    }

    render(){
        return(
            <div>
                <br/>
                <label> Cantidad </label>
                <input onChange = {this.updateQuantity.bind(this) } type="number" min="0"  max='20' />
                <label className="space-platillo"> Precio : { this.props.price} </label>
            </div>
        )
    }
}

export default Ordenar;
