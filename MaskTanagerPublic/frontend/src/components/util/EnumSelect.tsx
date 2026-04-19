import type { Enum } from '../../types/Enum';
import style from './EnumSelect.module.css'

console.log(style);

type Props = {
    options: Enum[],
    value: number,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

//ideia ter ícon que representa um filtro e quando aperta expande lista de filtros disponíveis
//dar foco primeiro à estilização das telas básicas do tema claro.
/** 
 * todo
 * 
 * melhorar tela da listagem de tasks
 * melhorar design card de task
 * estilizar tela de inclusão de task
 * estilizar tela de visualização de task
 * estilizar tela de edição de task
 * 
 * finalizar o básico e dps melhorar
*/
export const EnumSelect = ({options, value, onChange}: Props) => {
    return (
        <select value={value} onChange={onChange} className={style.EnumSelect}>
            {options.map((el) => (
                <option key={el.id} value={el.id} className="Option EnumOption">
                    {el.title}
                </option>
            ))}
        </select>
    )
}