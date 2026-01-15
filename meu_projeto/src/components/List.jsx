import Item from './Item'
function List () {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari'/>
                <Item marca='Lanborghini'/>
                <Item marca='Renault'/>
            </ul>
        </>
    )
}

export default List