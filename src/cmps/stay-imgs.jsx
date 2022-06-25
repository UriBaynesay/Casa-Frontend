import "react-responsive-carousel/lib/styles/carousel.css"
import { Carousel } from "react-responsive-carousel"

export const StayImgs = ({ imgUrls }) => {
  return (
    <section className="img-layout">
      {/* for mobile */}
      <div className="imgs-carousel-container">
        <Carousel showThumbs={false} showArrows={false} showStatus={false}>
          {imgUrls.map((imgUrl) => {
            return (
              <img src={require(`../assets/img/houses/${imgUrl}`)} alt="" key={imgUrl}/>
            )
          })}
        </Carousel>
      </div>

      {/* wider screen */}
      <div className="stay-imgs-container">
        <img
          className="main-img-container"
          src={require(`../assets/img/houses/${imgUrls[0]}`)}
          alt=""
        />
        {imgUrls.map((imgUrl, idx) => {
          if (idx === 0) return 
          let style = null
          if (idx === 2) style = { borderTopRightRadius: "12px" }
          if (idx === 4) style = { borderBottomRightRadius: "12px" }
          return (
            <img
              style={style}
              className="secondary-img-container"
              key={idx}
              src={require(`../assets/img/houses/${imgUrl}`)}
              alt=""
            />
          )
        })}
      </div>
    </section>
  )
}
