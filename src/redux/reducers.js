import srcproducts from '../source/products';
const initialState = {
    products: srcproducts
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default reducer