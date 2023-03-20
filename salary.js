const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter your benefits: "));

const taxRate1 = 0.1
const taxRate2 = 0.25
const taxRate3 = 0.3

const  nssfStandardRate = 0.06

const grossSalary = basicSalary + benefits ;

let tax;
if (grossSalary <= 24000) {
    tax = grossSalary *taxRate1;
  } else if (grossSalary <= 32333) {
    tax = (grossSalary - 24000) * taxRate2;
  } else if (grossSalary > 32333) {
    tax =  (grossSalary - 32333) *taxRate3;
  }
   else {
    tax = 0
  }

  function NHIF(basic){
    if(basic<=5999){
        deductionfornhif=150
    }
    else if(basic>=6000 && basic<=7999){
        deductionfornhif=300
    }
    else if(basic>=8000 && basic<=11999){
        deductionfornhif=400
    }
    else if(basic>=12000 && basic<=14999){
        deductionfornhif=500
    }
    else if(basic>=15000 && basic<=19999){
        deductionfornhif=600
    }
    else if(basic>=20000 && basic<=24999){
        deductionfornhif=750
    }
    else if(basic>=25000 && basic<=29999){
        deductionfornhif=850
    }
    else if(basic>=30000 && basic<=34999){
        deductionfornhif= 900
        
    }
    else if(basic>=35000 && basic<=39999){
        deductionfornhif=950
    }
    else if(basic>=40000 && basic<=44999){
        deductionfornhif=1000
    }
    else if(basic>=45000 && basic<=49999){
        deductionfornhif=1100
    }
    else if(basic>=50000 && basic<=59999){
        deductionfornhif=1200
    }
    else if(basic>=60000 && basic<=69999){
        deductionfornhif=1300
    }
    else if(basic>=70000 && basic<=79999){
        deductionfornhif=1400
    }
    else if(basic>=80000 && basic<=89999){
        deductionfornhif=1500
    }
    else if(basic>=90000 && basic<=99999){
        deductionfornhif=1600
    }
    else if(basic>=100000){
        deductionfornhif=1700
    }
    else{
        return "The value enetred is invalid"
    }
    return deductionfornhif;
    }
let nhifDeduction =NHIF(grossSalary)

const nssfDeduction = grossSalary * nssfStandardRate;
const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;


console.log(`Payee (Tax): ${tax}`);

console.log(`Net Salary: ${netSalary}`);