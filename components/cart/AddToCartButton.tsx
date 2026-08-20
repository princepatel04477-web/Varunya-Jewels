'use client';
import type {Product} from '@/lib/data';import {useCart} from '@/stores/cart';
export function AddToCartButton({product}:{product:Product}){const add=useCart(s=>s.add);return <button className="add-button" onClick={()=>add(product)}>Add to bag</button>}
