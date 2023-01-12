SHAZAM CORE

import {buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { build } from 'vite';


export const shazamCoreApi = createApi ({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', '2eb6eea384msh367af004d5e39e8p111377jsnd388daacae12');

            return headers;
        },

    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: '/charts/world'}),
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;


STORE.JS
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi  } from './services/shazamCore';

export const store = configureStore({
    reducer: {
        [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
        player: playerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});



DISCOVER.JS
import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants';


const Discover = () => {
    const genreTitle = 'Pop';

    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white'>
                    Discover { genreTitle }
                </h2>
                <select
                    onChange={() => {}}
                    value=""
                    className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'

                >
                    {genres.map((genre) => <option key={genre.value}
                                                   value={genre.value}>{genre.title}</option>)}
                </select>
            </div>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {[1,2,3,4,5,6,7,8,9,10].map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))};
            </div>

        </div>
    );
};

export default Discover;

//Practice Javascript exercises

//Write a JavaScript function that reverse a number

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));