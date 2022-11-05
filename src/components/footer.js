import React from "react"
import "../styles/footer.css"

export default function Footer() {
  return (
    <div className="footer flex-row-vstart-hcenter">
      <div className="about-mindbetter flex-col-hstart-vstart">
        <p className="txt-768">Mindbetter</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lrpvc64twuj-12%3A74?alt=media&token=e5af5841-739b-45b7-a8b8-08b9438e0770"
          alt="Not Found"
          className="frame-14"
        />
      </div>
      <div className="links flex-row-vstart-hstart">
        <p className="txt-891">About</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lrpvc64twuj-12%3A83?alt=media&token=76816220-52db-4cbe-a092-d1f7a8fe79c0"
          alt="Not Found"
          className="frame-18"
        />
      </div>
    </div>
  )
}
