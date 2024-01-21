import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      user: 'userLogged',
      updatedAt: Date.now().toLocaleString(),
      total: null,
      items: []
    }
  },
  reducers: {
    addItem: (state, action) => {
      const productRepeted = state.value.items.find(
        (item) => item.id === action.payload.id
      )
      if (productRepeted) {
        const itemUpdated = state.value.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity
            return item
          }
          return item
        })
        const total = itemUpdated.reduce((acc, currentItem) => acc += currentItem.price * currentItem.quantity, 0)
        state.total = total
        state.value = {
          ...state.value,
          items: itemUpdated,
          total,
          updatedAt: Date.now().toLocaleString(),
        }
      } else {
        state.value.items.push(action.payload)
        const total = state.value.items.reduce((acc, current) => acc += current.price * current.quantity, 0)
        state.total = total

        state = {
          ...state.value,
          total,
          updatedAt: Date.now().toLocaleString(),
        }
      }

    },
    removeItem: (state, action) => {

    }
  }
})


export const { 
  addItem, 
  removeItem 
} = cartSlice.actions

export default cartSlice.reducer