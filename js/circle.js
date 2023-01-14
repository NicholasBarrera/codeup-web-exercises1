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

//Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// Write a JavaScript function that checks whether a passed string is palindrome or not?

function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
// Check whether the string is empty or not
    if(cstr==="") {
        console.log("Nothing found!");
        return false;
    }
// Check if the length of the string is even or odd
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
// If the length of the string is 1 then it becomes a palindrome
        if (cstr.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {
// If the length of the string is odd ignore middle character
            ccount = (cstr.length - 1) / 2;
        }
    }
// Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match
        if (cstr[x] != cstr.slice(-1-x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');

//. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

//Write a JavaScript function that generates all combinations of a string.
function substrings(str1)
{
    var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++)
    {
        array1[x]=str1.substring(x, y);
    }
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent ; i++)
    {
        temp= "";
        for (var j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("dog");

//Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabet_order(str)
{
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));


//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(str)
{
    var array1 = str.split(' ');
    var newarray1 = [];

    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));


//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function find_longest_word(str)
{
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for(var x = 1 ; x < array1.length ; x++)
    {
        if(result.length < array1[x].length)
        {
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));
