'use client';
import { motion } from 'motion/react';
export function GoldRule({className=''}:{className?:string}){return <div className={`gold-rule ${className}`} aria-hidden="true"><motion.span initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true}} transition={{duration:.9,ease:[.16,1,.3,1]}} /></div>}
