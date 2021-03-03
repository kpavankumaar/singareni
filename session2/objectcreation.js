function PlasticFurniture(ChairQty){
    this.qty = ChairQty

}
PlasticFurniture.prototype.infoPlastic = function(){
    console.log(this.qty);
}

function Furniture(tableQty, ChairQty, plasticChairQty){
    // console.log(this);// window object
    this.tableQty = tableQty;
    this.ChairQty = ChairQty;
   
    PlasticFurniture.call(this, plasticChairQty);
}
Furniture.prototype = Object.create(PlasticFurniture.prototype)
Furniture.prototype.info = function(){
    console.log(this.tableQty, this.ChairQty);
}

Furniture.prop = 10;
var order1 = new Furniture(1, 4, 10);
var order2 = new Furniture(0, 0, 5);

console.log(order1);

var obj = {
    name: "srk",
    age: 20,
    info: function() {
        console.log(this.name +" age is " + this.age);
        function test(){
            console.log(this);
        }
        test();
    }
}


