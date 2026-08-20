export const EASE = [0.16,1,0.3,1] as const;
export const DUR = {ui:.24,base:.6,hero:.9} as const;
export const fadeUp = {hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:DUR.base,ease:EASE}}};
export const fadeIn = {hidden:{opacity:0},visible:{opacity:1,transition:{duration:DUR.base}}};
export const staggerParent = {hidden:{},visible:{transition:{staggerChildren:.06}}};
export const revealClip = {hidden:{clipPath:'inset(100% 0 0 0)'},visible:{clipPath:'inset(0% 0 0 0)',transition:{duration:DUR.hero,ease:EASE}}};
