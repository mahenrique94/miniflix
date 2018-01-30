import { error, isLoading, success } from "./index";

export function list() {
    return dispatch => {
        dispatch(isLoading(true));
        fetch("http://localhost:3000/miniflix/api/media")
            .then(response => {
                if (!response.ok) {
                    throw new Error("An error raised on getting medias from api");
                }

                dispatch(isLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(medias => dispatch(success(medias)))
            .catch(error => dispatch(error(error)));
    }
}