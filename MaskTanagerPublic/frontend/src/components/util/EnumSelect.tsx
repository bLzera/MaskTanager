import { useState, useEffect } from 'react';
import { getEnum } from '../../service/configService';
import type { Enum } from '../../types/Enum';

type Props = {
    enumName: string,
    status: number,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    active: boolean,
}

export const EnumSelect = ({enumName, status, onChange, active}: Props) => {
    const [enums, setEnums] = useState<Enum[]>([]);

    useEffect(() => {
        const fetchEnums = async () => {
            const data = await getEnum({nome: enumName});
            setEnums(data);
        };

        fetchEnums();
    }, []); 



    return (
        <select disabled={!active} value={status} onChange={onChange} className="Select EnumSelect">
            {enums.map((el, i) => (
                <option key={i} value={el.id}>
                    {el.description}
                </option>
            ))}
        </select>
    )
}