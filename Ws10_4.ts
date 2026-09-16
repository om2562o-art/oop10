export{}
class Patient{
    constructor(private name: string,private age: number){}
    showTnfo(){
        return `ผู้ป่วยชื่อ ${this.name} อายุ ${this.age} `;
    }
}
class Docter{
    constructor(private name: string,private speciel: string){}
    showTnfo(){
        return `แพทย์ ${this.name} เชี่ยวชาญ ${this.speciel} `;
    }
    examine(p: Patient){
        console.log(this.showTnfo(),"ตรวจคนไข้", p.showTnfo());
    }
    diagnose(p: Patient,diagnosis: string){
        console.log(this.showTnfo(),"วินิจฉัย", p.showTnfo(), "เป็นโรค", diagnosis);
    }
    prescribeMedicine(pt: Patient, med: string): void{
        console.log(this.showTnfo(),"จ่ายยา", pt.showTnfo(), "เป็นโรค", med);
    }
    calculateTreatmentCost(pt: Patient, fee: number,medFee: number): void{
        const total = fee + medFee;
        console.log(this.showTnfo(), "คำนวณค่ารักษา", pt.showTnfo(), "ค่าบริการ:", fee, "ค่ายา:", medFee, "รวมเป็นเงิน:", total);
    }
    }


const docter = new Docter("สำราญ","หัวใจ");
const p1 = new Patient("วันดี", 25);
const p2 = new Patient("อภิรดี", 50);
docter.examine(p1);
docter.examine(p2);
docter.diagnose(p1,"หัวใจเต้นผิดจังหวะ");
docter.diagnose(p2,"หัวใจล้มเหลว");
docter.prescribeMedicine(p1,"หัวใจเต้นผิดจังหวะ");
docter.prescribeMedicine(p2,"หัวใจล้มเหลว");
docter.calculateTreatmentCost(p1, 1000, 500);
docter.calculateTreatmentCost(p1, 1100, 400);