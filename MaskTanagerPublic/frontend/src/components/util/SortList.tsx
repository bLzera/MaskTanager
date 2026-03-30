
type sortOptions<T extends string> = {
    key: T;
    label: string;
}

type Props<T extends string> = {
    onSort: (key: T) => void; 
    options: sortOptions<T>[];
    sortType: T | null;
}

export const SortList = <T extends string>({onSort, sortType, options}: Props<T>) => {
    return(
        <select
            value={sortType ?? ''}
            onChange={(e) => {
                const key = e.target.value as T;
                onSort(key);
            }}
        >
            {options.map((option) => (
                <option
                    key={option.key}
                    value={option.key as T}
                >
                    {option.label}
                </option>
            ))}
        </select>
    )
} 