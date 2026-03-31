import style from './Header.module.css'

export const Header = () => {
    return(
        <div className={style.HeaderContainer}>
            <h2 className={style.HeaderTitle}>MaskTanager</h2>
            <div className={style.HeaderProfileContainer}>
                <span className={style.ProfileName}>biel do mau</span>
            </div>
        </div>
    )
}