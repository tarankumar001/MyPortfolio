import { useRef } from "react"

 

const ContactSummary = () => {
    const containerRef=useRef(null)
  return (
<section ref={containerRef} className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
    {/* Marquee */}
    <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>"Lets build a <br/>
        <span className="font-normal">memorable</span>&{" "} <span className="italic">inspiring</span><br/>
        web application<span className="text-gold">togeher</span>"</p>
    </div>
    {/* Marquee */}
</section>  
)
}

export default ContactSummary