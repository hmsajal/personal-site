export default function mediaQuery(value,minOrMax,widthOrHeight){
    
    const mqVal = `(${minOrMax}-${widthOrHeight}:${value})`    
    const x = window.matchMedia(mqVal);
    
    return (x.matches)
}