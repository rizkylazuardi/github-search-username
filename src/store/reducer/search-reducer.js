import * as actionType from './../action/search-box-action-type';

/**
 * STORE DATA
 */
const initialState = {
    listData: [],
    loading: false,
};

/**
 * HANDLER
 */
const handler = (currentState) => {
    const startLoading = () => ({ ...currentState, loading: true });
    const finishLoading = () => ({ ...currentState, loading: false });
    const applyData = (item) => ({ ...currentState, listData: item , loading: false });

    return {
        startLoading,
        finishLoading,
        applyData
    };
};

/**
 * ACTION TYPE
 */
export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case actionType.START_LOADING:
            return handler(state).startLoading();
        case actionType.FINISH_LOADING:
            return handler(state).finishLoading();
        case actionType.SHOW_RESULT:
            return handler(state).applyData(payload);
        default:
            return state;
    }
};