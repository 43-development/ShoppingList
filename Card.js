const addCard = AddCard({
  onCreateNewCard: () => {
    const newEditableCard = StoreCard({
      editable: true,
      title: '',
      productCount: 0,
      checkedCount: 0,
      icon: '',

      onDeleteCard: () => {
        newEditableCard.remove()
      }
    })

    addCard.parentElement.insertBefore(newEditableCard, addCard)
  }
})

const kauflandReadonly = StoreCard({
  editable: false,
  title: "Kaufland",
  productCount: 10,
  checkedCount: 5,
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kaufland_201x_logo.svg/440px-Kaufland_201x_logo.svg.png",

  onEnterEditMode: () => {
    kauflandReadonly.replaceWith(kauflandEditable)
  }
})

const kauflandEditable = StoreCard({
  editable: true,
  title: "Kaufland",
  productCount: 10,
  checkedCount: 5,
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kaufland_201x_logo.svg/440px-Kaufland_201x_logo.svg.png",

  onDeleteCard: () => {
    kauflandEditable.remove();
  },

  onSaveCard: () => {
    kauflandEditable.replaceWith(kauflandReadonly)
  }
})

const grid = document.querySelector('.gridCards')

grid.appendChild(kauflandReadonly);
grid.appendChild(addCard);
