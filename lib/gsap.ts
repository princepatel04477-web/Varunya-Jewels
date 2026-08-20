'use client';
import {useLayoutEffect,type DependencyList,type RefObject} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
if(typeof window!=='undefined')gsap.registerPlugin(ScrollTrigger);
type Scope = RefObject<Element|null>;
export function useGsap(fn:(ctx:gsap.Context)=>void|(()=>void),deps:DependencyList=[],scope?:Scope){
 useLayoutEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;let dispose:(()=>void)|void;const ctx=gsap.context(self=>{dispose=fn(self)},scope?.current??undefined);return()=>{dispose?.();ctx.revert()}},deps);// eslint-disable-line react-hooks/exhaustive-deps
}
export {gsap,ScrollTrigger};
