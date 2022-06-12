export const StayImgs = ({imgUrls}) => {
  return (
    <div className="img-layout">
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
    </div>
  )
}
