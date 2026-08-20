export type CategorySlug='rings'|'pendants'|'earrings'|'bracelets'|'necklaces';
export type Product={slug:string;name:string;collection:string;category:CategorySlug;karat:string;weight:string;price:number;image:string};
export const categories:{slug:CategorySlug;name:string;singular:string;description:string;image:string;count:number}[]=[
 {slug:'rings',name:'Rings',singular:'ring',description:'Sculpted bands shaped for daily wear',image:'/images/category-ring.jpg',count:16},
 {slug:'pendants',name:'Pendants',singular:'pendant',description:'Solar forms suspended in fine gold',image:'/images/category-pendant.jpg',count:11},
 {slug:'earrings',name:'Earrings',singular:'earring',description:'Light, movement and considered weight',image:'/images/collection-earrings.jpg',count:14},
 {slug:'bracelets',name:'Bracelets',singular:'bracelet',description:'Articulated links and quiet texture',image:'/images/category-bracelet.jpg',count:12},
 {slug:'necklaces',name:'Necklaces',singular:'necklace',description:'Gold drawn around the line of the body',image:'/images/collection-necklace.jpg',count:9}
];
export const products:Product[]=[
 {slug:'prabha-ring',name:'Prabha Ring',collection:'Prabha',category:'rings',karat:'22K YELLOW GOLD',weight:'11.6 G',price:1980,image:'/images/category-ring.jpg'},
 {slug:'rekha-band',name:'Rekha Band',collection:'Rekha',category:'rings',karat:'18K YELLOW GOLD',weight:'8.2 G',price:1420,image:'/images/category-ring.jpg'},
 {slug:'savitur-pendant',name:'Savitur Pendant',collection:'Surya',category:'pendants',karat:'22K YELLOW GOLD',weight:'14.8 G',price:2380,image:'/images/category-pendant.jpg'},
 {slug:'bindu-pendant',name:'Bindu Pendant',collection:'Prabha',category:'pendants',karat:'18K YELLOW GOLD',weight:'9.7 G',price:1640,image:'/images/category-pendant.jpg'},
 {slug:'aruna-earrings',name:'Aruna Earrings',collection:'Aruna',category:'earrings',karat:'22K YELLOW GOLD',weight:'18.4 G',price:2940,image:'/images/collection-earrings.jpg'},
 {slug:'usha-hoops',name:'Usha Hoops',collection:'Aruna',category:'earrings',karat:'18K YELLOW GOLD',weight:'12.6 G',price:2180,image:'/images/collection-earrings.jpg'},
 {slug:'tara-bracelet',name:'Tara Bracelet',collection:'Rekha',category:'bracelets',karat:'22K YELLOW GOLD',weight:'28.4 G',price:4260,image:'/images/category-bracelet.jpg'},
 {slug:'rekha-bangle',name:'Rekha Bangle',collection:'Rekha',category:'bracelets',karat:'22K YELLOW GOLD',weight:'31.2 G',price:4680,image:'/images/collection-bangle.jpg'},
 {slug:'surya-collar',name:'Surya Collar',collection:'Surya',category:'necklaces',karat:'22K YELLOW GOLD',weight:'42.8 G',price:6850,image:'/images/collection-necklace.jpg'},
 {slug:'aranya-necklace',name:'Aranya Necklace',collection:'Prabha',category:'necklaces',karat:'18K YELLOW GOLD',weight:'35.1 G',price:5240,image:'/images/hero-gold.jpg'}
];
export const collections=[
 {slug:'surya',name:'Surya',meaning:'The architecture of first light',image:'/images/collection-necklace.jpg',count:12},
 {slug:'aruna',name:'Aruna',meaning:'Forms drawn from the rising sun',image:'/images/collection-earrings.jpg',count:9},
 {slug:'rekha',name:'Rekha',meaning:'A study in line and repetition',image:'/images/collection-bangle.jpg',count:14},
 {slug:'prabha',name:'Prabha',meaning:'Gold held at the edge of shadow',image:'/images/hero-gold.jpg',count:7}
];
