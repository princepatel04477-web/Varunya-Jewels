'use client';
// React Bits SplitText (MIT), adapted to the Varunyaa ownership contract.
import {useMemo,useRef} from 'react';
import {gsap,useGsap} from '@/lib/gsap';
import {useReducedMotion} from '@/hooks/useReducedMotion';
type Props={text:string;className?:string;delay?:number;duration?:number;tag?:'h1'|'h2'|'p'|'span';onComplete?:()=>void};
export default function SplitText({text,className='',delay=.08,duration=.9,tag='p',onComplete}:Props){const root=useRef<HTMLElement>(null);const reduced=useReducedMotion();const words=useMemo(()=>text.split(' '),[text]);useGsap(()=>{if(!root.current)return;const spans=root.current.querySelectorAll('[data-word]');gsap.fromTo(spans,{clipPath:'inset(0 0 105% 0)',yPercent:45},{clipPath:'inset(0 0 0% 0)',yPercent:0,duration,ease:'power4.out',stagger:delay,onComplete})},[text,delay,duration],root);const Tag=tag;return <Tag ref={root as never} className={className} aria-label={text}>{words.map((word,i)=><span key={`${word}-${i}`} className="rb-word-mask" aria-hidden="true"><span data-word style={reduced?undefined:{clipPath:'inset(0 0 105% 0)'}}>{word}</span>{i<words.length-1?'\u00a0':null}</span>)}</Tag>}
