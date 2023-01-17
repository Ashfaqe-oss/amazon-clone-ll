export const initialState = {
  basket: [],
  user: null,
  userName: "",
  hover: false,
};

export const getBasketTotal = ( basket ) =>
  basket?.reduce(
    ( amount, item ) =>
      parseFloat( item.price.replace( /,/g, "" ) ) + parseFloat( amount ),
    0
  );

const reducer = ( state, action ) => {
  console.log( action );
  switch ( action.type ) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USERNAME":
      return {
        ...state,
        userName: action.userName,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "SET_HOVER":
      return {
        ...state,
        hover: action.hover,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      // Logic for Removing item from basket...

      // we cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        ( basketItem ) => basketItem.id === action.id
      );

      if ( index >= 0 ) {
        // item exists in basket, remove it...
        newBasket.splice( index, 1 );
      } else {
        console.warn(
          `Cant remove product (id: ${ action.id }) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
