import axiosClient from '~/api/axios/axiosClient';

const END_POINT = {
    MOVIES: 'Movie',
    TOP6MOVIES: 'GetTop6MovieView',
};
const GetMovieAPI = () => {
    return axiosClient.get(`${END_POINT.MOVIES}`);
};
const GetTop6MovieView = () => {
    return axiosClient.get(`${END_POINT.MOVIES}/${END_POINT.TOP6MOVIES}`);
};
export { GetMovieAPI, GetTop6MovieView };
