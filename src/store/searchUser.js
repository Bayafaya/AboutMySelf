const searchDefault = {
    searchUser: '',
}

export const searchUserReducer = (state = searchDefault, action) => {
    switch (action.type) {
        case "user_name":
            return { ...state, searchUser: action.payload }
        default:
            return state;
    }
}
export const searchUserChanger = (payload) => ({ type: "user_name", payload });