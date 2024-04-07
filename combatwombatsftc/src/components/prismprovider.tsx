"use client"

import Prism from "prismjs"
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-java'
import { useEffect } from "react"

export default function PrismProvider() {
    useEffect(() => {
        Prism.highlightAll()
      }, [])

    return (
        <div className="hidden"></div>
    )
}