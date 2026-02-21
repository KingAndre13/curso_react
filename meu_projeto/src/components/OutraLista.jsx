function OutraLista({ itens }) {
    return (
        <>
            <h3>Podium GP da Hungria 2016</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                 <p>Não há itens na lista!</p>
                )}
        </>
    )
}

export default OutraLista