import * as MatrixActions from './matrix.actions';

export interface State {
    matrixImages: any;
    updateMatrix: boolean;
    pinMode: boolean;
    pinCollapsed: boolean;
    incomeFilter: boolean;
    quickGuide: boolean;
    placesSet: Array<any>;
    processImages: boolean;
};

export const initialState: State = {
    matrixImages: null,
    updateMatrix: false,
    pinMode: false,
    pinCollapsed: false,
    incomeFilter: false,
    quickGuide: false,
    placesSet: [],
    processImages: false
};

export function matrixReducer(state: any = initialState, action: MatrixActions.Actions): any {
    switch (action.type) {
        case MatrixActions.UPDATE_MATRIX: {
            return Object.assign({}, state, {updateMatrix: action.payload});
        }

        case MatrixActions.SET_PIN_MODE: {
            return Object.assign({}, state, {placesSet: []}, {pinMode: action.payload});
        }

        case MatrixActions.SET_PIN_COLLAPSED: {
            return Object.assign({}, state, {pinCollapsed: action.payload});
        }

        case MatrixActions.OPEN_INCOME_FILTER: {
            return Object.assign({}, state, {incomeFilter: action.payload});
        }

        case MatrixActions.OPEN_QUICK_GUIDE: {
            return Object.assign({}, state, {quickGuide: action.payload});
        }

        case MatrixActions.ADD_PLACE_TO_SET: {
            return Object.assign({}, state, {placesSet: [...state.placesSet, action.payload].sort((a, b) => a.income > b.income ? 1 : -1)});
        }

        case MatrixActions.REMOVE_PLACE_FROM_SET: {
            return Object.assign({}, state, {placesSet: <Array<any>> state.placesSet.filter(place => place._id !== action.payload._id)});
        }

        case MatrixActions.SET_PINNED_PLACES: {
            return Object.assign({}, state, {placesSet: action.payload});
        }

        case MatrixActions.GET_PINNED_PLACES_SUCCESS: {
          return Object.assign({}, state, {placesSet: action.payload});
        }

        case MatrixActions.SET_MATRIX_IMAGES: {
            return Object.assign({}, state, {matrixImages: action.payload});
        }

        case MatrixActions.GET_MATRIX_IMAGES_SUCCESS: {
            return Object.assign({}, state, {matrixImages: action.payload});
        }

        default:
            return state;
    }
}
