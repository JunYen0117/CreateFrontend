export const initialState = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  cartTotal: 0,
}

// const item = {
//   id: '',
//   quantity: 0,
//   name: '',
//   price: 0,
//   color: '',
//   size: '',
// }

/**
 * addItem only, duplicate item is not allow
 * @param  {} state
 * @param  {} action
 */
const addItem = (state, action) => {
  // 尋找 已經在購物車的商品 的 Index
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  )

  // 載入頁面的商品數量
  const payloadQuantity = action.payload.quantity

  // 如果 購物車 存在該商品 則 該商品數量 +1
  if (existingItemIndex > -1) {
    // 根據 index 尋找到 對應的商品
    const item = state.items[existingItemIndex]
    // 取得 productId
    const id = item.id
    // 如果 商品存在 則 商品數量 = 載入頁面的商品數量
    // 如果 商品不存在 則 state.items[existingItemIndex].quantity + 1
    const quantity = payloadQuantity
      ? item.quantity + payloadQuantity
      : item.quantity + 1

    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    }

    return updateItem(state, action)
  }
  return [...state.items, action.payload]
}

const removeItem = (state, action) => {
  return state.items.filter((item) => item.id !== action.payload.id)
}

/**
 * upateItem (ex. quantity, color, name, price...)
 * ex. action = {type="UPDATE_ITEM", payload: {id:1, quantity:1, color:'red'}
 * @param  {} state
 * @param  {} action
 */

// 更新商品數量
const updateItem = (state, action) => {
  // 尋找 已經在購物車的商品 的 Index
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  )
  // 如果 該商品 存在購物車
  if (existingItemIndex > -1) {
    const newState = [...state.items]
    newState[existingItemIndex] = {
      ...newState[existingItemIndex],
      ...action.payload,
    }
    return newState
  }

  return [...state.items]
}

// 加入商品
const plusItemQuantityOnce = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  )

  if (existingItemIndex > -1) {
    //const newState = [...state.items]
    const item = state.items[existingItemIndex]
    const id = item.id
    const quantity = item.quantity + 1

    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    }

    return updateItem(state, action)
  }

  return [...state.items]
}

const minusItemQuantityOnce = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  )

  if (existingItemIndex > -1) {
    const item = state.items[existingItemIndex]
    const id = item.id
    const quantity = item.quantity > 1 ? item.quantity - 1 : 1

    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    }

    return updateItem(state, action)
  }

  return [...state.items]
}

const calculateItemTotals = (items) =>
  items.map((item) => ({
    ...item,
    itemTotal: item.price * item.quantity,
  }))

const calculateTotal = (items) =>
  items.reduce((total, item) => total + item.quantity * item.price, 0)

const calculateTotalItems = (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0)

// initialState = {
//   items: [],
//   isEmpty: true,
//   totalItems: 0,
//   cartTotal: 0,
// }

// 購物車 State
const generateCartState = (state, items) => {
  const isEmpty = items.length === 0

  return {
    ...initialState,
    ...state,
    items: calculateItemTotals(items),
    totalItems: calculateTotalItems(items),
    cartTotal: calculateTotal(items),
    isEmpty,
  }
}

// 給 useCart 使用
// for useReducer init use
export const init = (items) => {
  return generateCartState({}, items)
}

// 把 variables 相對應的 callback function 分別都變成一種 action.type

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return generateCartState(state, addItem(state, action))
    case 'REMOVE_ITEM':
      return generateCartState(state, removeItem(state, action))
    case 'UPDATE_ITEM':
      return generateCartState(state, updateItem(state, action))
    case 'PLUS_ONE':
      return generateCartState(state, plusItemQuantityOnce(state, action))
    case 'MINUS_ONE':
      return generateCartState(state, minusItemQuantityOnce(state, action))
    case 'CLEAR_CART':
      return initialState
    default:
      throw new Error('No action specified')
  }
}
