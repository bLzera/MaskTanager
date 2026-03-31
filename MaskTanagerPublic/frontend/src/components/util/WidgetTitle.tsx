import style from './WidgetTitle.module.css';

type Props = {
    nome: string,
}

export const WidgetTitle = ({nome}: Props) => {
    return (
        <div className={style.TitleContainer}>
            <h2 className={style.Title}>{nome}</h2>
        </div>
    )
}