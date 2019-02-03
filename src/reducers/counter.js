import { INC_COUNTER, DEC_COUNTER } from "../actions";

const initState = {
    countStore: 14
};

export default function counter(state = initState, action={})
{
    switch(action.type) {
        case INC_COUNTER: {
            return Object.assign({}, 
                state, {countStore: state.countStore+1 });
        }
        case DEC_COUNTER: {
            return Object.assign({}, 
                state, {countStore: state.countStore-1 });
        }
        default: 
            return state;
    }
}