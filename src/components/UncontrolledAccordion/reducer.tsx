export const TOOGLE_COLLASED = 'TOGGLE-COLLAPSED'
type ActionType = {
    type: string

}
export type StateType = {
    collapsed:boolean
}
export const reducer = (state: StateType, action: ActionType) : StateType => {

    switch (action.type) {
        case TOOGLE_COLLASED :
             return  {
                ...state,
                collapsed : !state.collapsed}

        default:
            throw new Error('Bad action type')
    }

}