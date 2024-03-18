import { Footer } from "../atomic/atoms/Footer/Footer"
import { Header } from "../atomic/molecules/Header/Header"
import s from "./styles/Welcome.module.css"

export const Welcome = () => {
  return (
    <div>
        <Header
            isAuthorized={false}
        />
        <main className={s.main}>
          <aside className={s.box}>
            <span className={s.first}>
              App
            </span>
            <span className={s.second}>
              Link
            </span>
          </aside>

          <aside className={s.note}>
            <div>
              <p className={s.textPrimary}>Crea una cuenta y guarda tus páginas favoritas desde un solo sitio.</p>
              <span className={s.textSecondary}>Evita registrarte utilizando la cuenta de invitados:</span>
              <ul>
                <li className={s.textSecondary}>UserName: Guest</li>
                <li className={s.textSecondary}>Password: Guest123$</li>
              </ul>
            </div>
            
          </aside>
        </main>
        <Footer/>

    </div>
  )
}
