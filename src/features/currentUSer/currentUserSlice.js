 
 
 //name change logic
 export function currentUserReducer(state = {}, action) {
    if (action.type === "edit-current-user-name") {
        return { ...state, name: action.payload.name }
    }
    return state
}


//name initalUser
export const initalCurrentuser = { name: "Samson" }


//return latest name
export function selectName(state){
    return state.currentUSer.name
}


//edit new Name
export function editName(neName){
    return {
        type:"edit-current-user-name",
        payload:{name:neName}
        }
}