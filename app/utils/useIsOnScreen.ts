import { useEffect, useRef, useState } from "react"

export default function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)
  const observer = useRef();

  useEffect(() => {
     //@ts-ignore
     observer.current = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
    //@ts-ignore
    observer.current.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    //@ts-ignore
    return () => { observer.current.disconnect() }
  }, [])

  return isIntersecting
}