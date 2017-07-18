import { extendObservable } from 'mobx';


class TiendaController {
    constructor(){
        extendObservable(this,{
            platillos: [{
                description: 'platillo muy rico',
                name: 'platillo 1',
                price: 100,
                quantity: 0,
            },{
                description: 'platillo muy rico',
                name: 'platillo 2',
                price: 150,
                quantity: 0,
            },{
                description: 'platillo muy rico',
                name: 'platillo 3',
                price: 200,
                quantity: 0,
            }],

        })
    }


    putInOrder( _indexPlatillo,  _quantity ){
        this.platillos.forEach( ( _val, _index ) =>{
            if( _indexPlatillo === _index ){
                _val.quantity = _quantity;
            }
        })
    }
}


var VarTiendaController = new TiendaController();


export default VarTiendaController;
