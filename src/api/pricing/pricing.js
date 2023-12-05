import axiosClient from '~/api/axios/axiosClient';

const END_POINT = {
    PRICINGS: 'Pricing',
    GETPRICINGBYID: 'GetPricingById?id=',
};
const GetPricingAPI = () => {
    return axiosClient.get(`${END_POINT.PRICINGS}`);
};
const GetPricingByIdAPI = (id) => {
    return axiosClient.get(`${END_POINT.PRICINGS}/${END_POINT.GETPRICINGBYID}${id}`);
};
export { GetPricingAPI, GetPricingByIdAPI };
