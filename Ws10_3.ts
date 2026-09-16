class Product{
    constructor(public name:string, public price:number, public quantity:number){}
    getSubtotal():number{
        return this.price * this.quantity;
    }
}
class Order{
    private products: Product[] = [];
    addProduct(p: Product):void{
        this.products.push(p);
        console.log(`${p.name} ${p.price} x ${p.quantity} = ${p.getSubtotal()} บาท`)
    }
    calculateTotal(): number{
        let total = 0;
        for(const p of this.products){
            total += p.getSubtotal();
        
        }
        return total; 
    }

    calculateDiscount(rate:number){
        return this.calculateTotal() * rate / 100 ;
    }
    calculateNetTotal(rate:number){
        return this.calculateTotal()- this.calculateDiscount(rate) ;
    }
}

const oder1 = new Order();
const p1 = new Product("laptop",200,1);
const p2 = new Product("cpu",200,1);

oder1.addProduct(p1);
oder1.addProduct(p2);

console.log(oder1.calculateTotal());
console.log(`ลด 10 % รวมเป็นเงิน ${oder1.calculateNetTotal(10)}`);