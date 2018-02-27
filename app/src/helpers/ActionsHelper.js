export default class ActionsHelper {

    static dispatch(type, payload) {
        return ({ type, payload });
    }

}