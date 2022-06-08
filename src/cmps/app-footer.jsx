import { Link } from "react-router-dom"
import React from "react"
export function AppFooter() {
  return (
    <footer className="footer-container">
        <div className="copyright-container">
          Uri Baynesay © 2022 
        </div>
        <div className="site-settings-container">
            <span> English (US)</span>
            <span> $US</span>
        </div>
    </footer>
  )
}
