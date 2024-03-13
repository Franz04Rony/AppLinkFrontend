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
                <img src={image} alt="An image to the current link" />
            </div>

            <div className={s.text}>
                {label}
            </div>
            
            <div></div>

        </div>
  )
}
