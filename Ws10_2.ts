export{};
class CPU{
    constructor(private brand:string,private cores: number){}
    process():void{
        console.log(`CPU ${this.brand} ${this.cores} cores กำลังทำงาน`);
    }
    showInfo():void{
        console.log(`CPU ${this.brand} ${this.cores} cores`);
    }
}

class Ram{
        constructor(private capacity: number){}
    load():void{
        console.log(`Ram กำลังทำงาน`);
    }
    showInfo():void{
        console.log(`ram capacity ${this.capacity}`);
    }

}

class Storage{
        constructor(private capacity: number,private type:string){}
    readData():void{
        console.log(`Storage กำลังทำงาน`);
    }
    showInfo():void{
        console.log(`Storage capacity ${this.capacity}`);
    }

}

class Computer{
    private cpu: CPU;
    private ram: Ram;
    private storage: Storage;
    constructor(band:string,core:number,capacity_ram:number,capacity_storage:number,type:string){
        this.cpu = new CPU(band,core);
        this.ram = new Ram(capacity_ram);
        this.storage = new Storage(capacity_storage,type);
    }
    boot(){
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
        console.log("comuter is ready!")
    }
    showComputerInfo(){
        console.log("--------------------");
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
        console.log("--------------------");

    }

}

const pc1 = new Computer("AMD",64,128,1024,"SSD NVMe");
pc1.boot();
pc1.showComputerInfo();