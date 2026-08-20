'use client';
import { MotionConfig } from 'motion/react';
import { EASE, DUR } from '@/lib/motion';
export function MotionProvider({children}:{children:React.ReactNode}){return <MotionConfig reducedMotion="user" transition={{duration:DUR.base,ease:EASE}}>{children}</MotionConfig>}
