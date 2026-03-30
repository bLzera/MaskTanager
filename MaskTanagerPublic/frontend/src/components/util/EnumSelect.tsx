import type { Enum } from '../../types/Enum';

type Props = {
    options: Enum[],
    value: number,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const EnumSelect = ({options, value, onChange}: Props) => {
    return (
        <select value={value} onChange={onChange} className="Select EnumSelect">
            {options.map((el, i) => (
                <option key={i} value={el.id}>
                    {el.description}
                </option>
            ))}
        </select>
    )
}