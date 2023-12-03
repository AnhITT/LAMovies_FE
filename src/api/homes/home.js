import axiosClient from '~/api/axios/axiosClient';

const END_POINT = {
    MOVIES: 'Movie',
};

export const getMovieAPI = () => {
    return axiosClient.get(`${END_POINT.MOVIES}`);
};
