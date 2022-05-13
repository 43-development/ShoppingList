function StoresScreen(options) {
    const rootElement = document.createElement('div')
    rootElement.id = 'body'

    rootElement.innerHTML = `
        <div class="listaTitlu h1">Magazine</div>
        <div class="gridCards"></div>
    `

    const addCard = AddCard({
        onCreateNewCard: () => {
            const newCardOptions = {
                editable: true,
                title: '',
                productCount: 0,
                checkedCount: 0,
                icon: '',
        
                onDeleteCard: () => {
                newCard.remove()
                },
        
                onSaveCard: () => {
                    console.log('am salvat cardul cu valorile', newCardOptions)
                },

                onNavigate: () => {
                    if (options && options.onNavigateTo) {
                        options.onNavigateTo(newCardOptions)
                    }
                }
            }
        
            const newCard = StoreCard(newCardOptions)
        
            addCard.parentElement.insertBefore(newCard, addCard)
        }
    })
    
    
    const grid = rootElement.querySelector('.gridCards')
    
    grid.appendChild(addCard);

    return rootElement
}
