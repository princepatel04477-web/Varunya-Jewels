'use client';
import { motion } from 'motion/react';
export function StaggerList({children,className=''}:{children:React.ReactNode,className?:string}){return <motion.div className={className} initial="hidden" whileInView="show" viewport={{once:true,amount:.1}} variants={{hidden:{},show:{transition:{staggerChildren:.08}}}}>{children}</motion.div>}
export function StaggerItem({children,className=''}:{children:React.ReactNode,className?:string}){return <motion.div className={className} variants={{hidden:{clipPath:'inset(100% 0 0 0)'},show:{clipPath:'inset(0 0 0 0)',transition:{duration:.8,ease:[.16,1,.3,1]}}}}>{children}</motion.div>}
