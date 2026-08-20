'use client';
import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap,ScrollTrigger} from '@/lib/gsap';
export function SmoothScroll({children}:{children:React.ReactNode}){useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const lenis=new Lenis({duration:1.15,smoothWheel:true,wheelMultiplier:.85});const onScroll=()=>ScrollTrigger.update();lenis.on('scroll',onScroll);const tick=(time:number)=>lenis.raf(time*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);return()=>{gsap.ticker.remove(tick);lenis.off('scroll',onScroll);lenis.destroy()}},[]);return children}
