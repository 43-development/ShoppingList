function StoreDetailsScreen(options) {
    const rootElement = document.createElement('div')

    rootElement.innerHTML = `
        <h1>store details screen for ${options.title}</h1>
        <button class="btn">back</button>
    `

    rootElement.querySelector('button').addEventListener('click', () => {
        if (options && options.onBack) {
            options.onBack()
        }
    })

    return rootElement
}
