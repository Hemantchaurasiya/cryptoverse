import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url)=>({url,headers:cryptoApiHeader})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query:({coinId,timeperiod})=> createRequest(`/coin/${coinId}/history/${timeperiod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })
})

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,useGetExchangesQuery 
} = cryptoApi;