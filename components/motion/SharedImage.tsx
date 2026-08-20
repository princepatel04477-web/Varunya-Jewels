'use client';
import { motion } from 'motion/react';
export function SharedImage({slug,children,className=''}:{slug:string;children:React.ReactNode;className?:string}){return <motion.div layoutId={`product-${slug}`} className={className}>{children}</motion.div>}
