import type { Enum } from '../../types/Enum';
import style from './EnumSelect.module.css'

console.log(style);

type Props = {
    options: Enum[],
    value: number,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

//TODO entender pq o <select> não ta pegando o classname
//já foi realizado
    //console.log(style);
//o objeto retorna o atributo EnumSelect
export const EnumSelect = ({options, value, onChange}: Props) => {
    return (
        <select value={value} onChange={onChange} className={style.EnumSelect}>
            {options.map((el) => (
                <option key={el.id} value={el.id} className="Option EnumOption">
                    {el.description}
                </option>
            ))}
        </select>
    )
}