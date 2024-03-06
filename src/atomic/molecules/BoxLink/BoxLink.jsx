import s from "./BoxLink.module.css"

export const BoxLink = ({
    image,
    label,
    link,
}) => {

    const handleClick = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div 
            className={s.box}
            onClick={ (e) => handleClick(link)}
        >
            <div className={s.picture}>
                <img src={image} alt="An image to the current box" />
            </div>

            <div className={s.text}>
                {label}
            </div>
            
            <div></div>

        </div>
  )
}

BoxLink.defaultProps = {
    image: "https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/4.ig.png?f=webp",
    label: "Texto test prueba ggs :P",
    link: "https://www.youtube.com",
}
