'use client';
import {create} from 'zustand';import {persist} from 'zustand/middleware';import type {Product} from '@/lib/data';
export type CartLine={product:Product;quantity:number};
type CartState={lines:CartLine[];open:boolean;add:(product:Product)=>void;remove:(slug:string)=>void;setQuantity:(slug:string,quantity:number)=>void;setOpen:(open:boolean)=>void};
export const useCart=create<CartState>()(persist((set)=>({lines:[],open:false,add:product=>set(state=>({lines:state.lines.some(l=>l.product.slug===product.slug)?state.lines.map(l=>l.product.slug===product.slug?{...l,quantity:l.quantity+1}:l):[...state.lines,{product,quantity:1}],open:true})),remove:slug=>set(state=>({lines:state.lines.filter(l=>l.product.slug!==slug)})),setQuantity:(slug,quantity)=>set(state=>({lines:quantity<1?state.lines.filter(l=>l.product.slug!==slug):state.lines.map(l=>l.product.slug===slug?{...l,quantity}:l)})),setOpen:open=>set({open})}),{name:'varunyaa-bag',partialize:state=>({lines:state.lines})}))
