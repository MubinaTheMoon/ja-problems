// MANQITIY OPERATORLARGA OID MASALALAR
// UYGA VAZIFA
// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
let number = 458;
let a = Math.floor(number / 100);
let b = Math.floor(number % 100) / 10;
let c = number % 10;

if(a < b && b < c){
    console.log("True");
}else{
    console.log("False");
}


// ======================================================================
// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
if(a < b && b < c || a > b && b > c){
    console.log("True");
}else{
    console.log("False");
}

// =======================================================================
// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
if(a === c){
    console.log(`True: ${number}`);
}else{
    console.log(`False: ${number}`);
}




// ********************************************************************
// ARIFMETIK OPERATORLAR
// UYGA VAZIFA
// Begin6. To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.
let a2 = 6;
let b2 = 8;
const C = Math.sqrt(Math.pow(a2, 2) + Math.pow(b2, 2))
const P = a2 + b2 + C
console.log(`c = ${C}, P = ${P}`);


// =======================================================================
// Begin7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
let r1 = 7;
let r2 = 5;
const S1 = Math.floor(Math.PI * r1);
const S2 = Math.floor(Math.PI * r2);
const S = Math.floor(Math.PI * (Math.pow(r1, 2) - Math.pow(r2, 2)))
console.log(`S1 = ${S1}, S2 = ${S2}, S = ${S}`);


// =======================================================================
// Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
let L = 10;
const PI = Math.PI;
let R = Math.floor(L / (2 * PI));
let S3 = Math.floor(PI * Math.pow(R, 2));
console.log(`R = ${R}, S3 = ${S3}`);


// =======================================================================
// Begin9. Tekislikdagi berilgan ikki nuqta (x1, y1) va (x2, y2) orasidagi L masofa topilsin.
let x1 = 7;
let x2 = 9;
const L1 = Math.floor(Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((x1 - x2), 2)));
console.log(`L = ${L1}`);


// =======================================================================
// Begin10. A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.
let A = 9;
let B = 19;
let C1 = 919;

let changing = A;
A = B;
B = C1;
C1 = changing;
console.log(`A = ${A}, B = ${B}, C = ${C1}`);


// =======================================================================
// Begin11. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
//  y = 4 * (x - 3)^6 - 7 * (x - 3)^3 + 2
let x = 5;
let y = 4 * Math.pow((x - 3), 6) - 7 * Math.pow((x - 3), 3) + 2;
console.log(`y = ${y}`);


// =======================================================================
// Begin12. A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
A^3-A^6-A^9-A^15
let A1 = 5;

let A3 = A1 ** 3;
let A6 = A3 ** 2;
let A9 = A3 ** 3;
let A15 = A6 ** A9;
console.log(A3, A6, A9, A15);



// ========================================================================
// Begin13. Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin. Tc = (Tf - 32) * 5/9
// Bu misolni tushunmadim.



// ========================================================================
// Begin14. X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.
let X = 1;
let A4 = 20000;
let Y = 1;
let B1 = 15000;
// let shokolad = X / A4;
// let konfet = Y / B1;
let expensive = A4 - B1;
console.log(`${X}kg shokolad ${Y}kg konfetdan ${expensive} qimmatroq!`);












