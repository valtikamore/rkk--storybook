import {reducer, StateType, TOOGLE_COLLASED} from "./reducer"


test('collapsed should be true' , () => {

    const state:StateType = {
        collapsed : false
    }

    const newState = reducer(state,{type:TOOGLE_COLLASED})

    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false' , () => {

    const state:StateType = {
        collapsed : true
    }

    const newState = reducer(state,{type:TOOGLE_COLLASED})

    expect(newState.collapsed).toBe(false)
})
test('collapsed shouldn"t be crazy ' , () => {

    const state:StateType = {
        collapsed : false
    }
    expect(()=> {
        reducer(state,{type:'ddd'})
    }).toThrowError()



})