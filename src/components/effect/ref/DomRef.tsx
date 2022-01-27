import { useEffect, useRef } from "react";

export default function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
      inputRef.current.focus();
    }, []); //auto cursor on first render
    
  return <div><input type="text" ref={inputRef} /></div>;
}
