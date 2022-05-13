const storesScreen = StoresScreen({
  onNavigateTo: (cardOptions) => {
    const storeDetailsScreen = StoreDetailsScreen({
      ...cardOptions,
      onBack: () => {
        storeDetailsScreen.replaceWith(storesScreen)
      }
    })

    storesScreen.replaceWith(storeDetailsScreen)
  }
})

document.body.appendChild(storesScreen)

