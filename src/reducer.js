import actions from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_CONTACT:
      return {
        contacts: [...state.contacts, action.payload],
      };
    case actions.DEL_CONTACT:
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case actions.START:
      return {
        loading: true,
      };
    case actions.COMPLETE:
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export default reducer;
