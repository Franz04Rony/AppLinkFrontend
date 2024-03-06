import PropTypes from 'prop-types'
import s from './PerfilPicture.module.css'

export const PerfilPicture = ({
    src,
}) => {
  return (
    <div className={s.picture}>
        <img src={src} alt="profile-picture" />
    </div>
  )
}

PerfilPicture.defaultProps = {
    src: "src\\atomic\\atoms\\PerfilPicture\\takagi-1.png",
}

export default PerfilPicture
