import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item 
                    marca="Ferrari"
                    anoLancamento={1985}
                />
                <Item
                    marca="Mercedez"
                    anoLancamento={1964}
                />
                <Item
                    marca="Audi"
                    anoLancamento={2008}
                />
                <Item 
                />
            </ul>
        </>
    )
}

export default List;