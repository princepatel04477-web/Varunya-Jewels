export type Product = { slug:string; name:string; collection:string; karat:string; weight:string; price:number; image:string };
export const products: Product[] = [
 {slug:'surya-collar',name:'Surya Collar',collection:'Surya',karat:'22K YELLOW GOLD',weight:'42.8 G',price:6850,image:'/images/collection-necklace.jpg'},
 {slug:'aruna-earrings',name:'Aruna Earrings',collection:'Aruna',karat:'22K YELLOW GOLD',weight:'18.4 G',price:2940,image:'/images/collection-earrings.jpg'},
 {slug:'rekha-bangle',name:'Rekha Bangle',collection:'Rekha',karat:'22K YELLOW GOLD',weight:'31.2 G',price:4680,image:'/images/collection-bangle.jpg'},
 {slug:'prabha-ring',name:'Prabha Ring',collection:'Prabha',karat:'18K YELLOW GOLD',weight:'11.6 G',price:1980,image:'/images/hero-gold.jpg'}
];
export const collections = [
 {slug:'surya',name:'Surya',meaning:'The architecture of first light',image:'/images/collection-necklace.jpg',count:12},
 {slug:'aruna',name:'Aruna',meaning:'Forms drawn from the rising sun',image:'/images/collection-earrings.jpg',count:9},
 {slug:'rekha',name:'Rekha',meaning:'A study in line and repetition',image:'/images/collection-bangle.jpg',count:14},
 {slug:'prabha',name:'Prabha',meaning:'Gold held at the edge of shadow',image:'/images/hero-gold.jpg',count:7}
];
