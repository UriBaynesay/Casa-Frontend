import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export function AppFooter() {
  const [footerLayout, setFooterLayout] = useState("")
  const location = useLocation()

  useEffect(() => {
    if (!location.pathname.includes("/details")) {
      setFooterLayout("main-layout")
    }
  }, [location])

  return (
    <footer className={footerLayout}>
      <div className="footer-container">
        <div className="copyright-container">Uri Baynesay © 2022</div>
        <div className="site-settings-container">
          <span> English (US)</span>
          <span> $US</span>
        </div>
      </div>
    </footer>
  )
}
