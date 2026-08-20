'use client';
import { motion } from 'motion/react';
import { EASE } from '@/lib/motion';
export function Reveal({children,className='',delay=0,direction='up'}:{children:React.ReactNode,className?:string;delay?:number;direction?:'up'|'left'}){
 const initial=direction==='left'?'inset(0 100% 0 0)':'inset(100% 0 0 0)';
 return <motion.div className={className} initial={{clipPath:initial}} whileInView={{clipPath:'inset(0 0 0 0)'}} viewport={{once:true,amount:.15}} transition={{duration:.9,delay,ease:EASE}}>{children}</motion.div>
}
