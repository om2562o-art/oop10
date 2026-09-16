class Engine{
    constructor(private type: string){}
    start(): void{
        console.log(`เครื่องยนตร์ ${this.type} กำลังทำงาน`);
    }
    stop(): void{
        console.log(`เครื่องยนตร์ ${this.type} หยุดทำงาน`);
    }
    showinfo(): void{
        console.log(`เครื่องยนตร์ ชนิด${this.type}`);
    }
}

class Battery{
    constructor(private capacity: number) {}
    charge(): void{
        this.showinfo
        this.capacity = 100;
        console.log(`ชาร์จเรียบร้อยแล้ว`)
        console.log(`ขณะนี้แบตเตอรี่คงเหลือ ${this.capacity}%`)
    }
    showinfo(): void{
        console.log(`ขณะนี้แบตเตอรี่คงเหลือ ${this.capacity}%`)
    }
}

class Car{
    private engine: Engine;
    private battery: Battery;
    constructor(type: string,capacity: number){
        this.engine = new Engine(type);
        this.battery = new Battery(capacity);
    }
    startCar(): void{
        this.engine.start();
    }
    stopCar(): void{
        this.engine.stop();
    }
    chareBettery(): void{
        this.battery.charge
    }
    showCarinfo(): void{
        this.engine.showinfo();
        this.battery.showinfo();
    }
}

const car1 = new Car("v6",10);
car1.startCar();
car1.showCarinfo();
car1.chareBettery();
car1.stopCar();