import { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    post: [],
    err: '',
};

const myReducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                post: action.result,
                err: '',
            };
        case 'error':
            return {
                loading: false,
                post: {},
                err: `Something error happened while fetching data`,
            };
        default:
            return state;
    }
};

function UseReducervsUseState() {
    const [state, dispatch] = useReducer(myReducer, initialState);

    useEffect(() => {
        fetch(`https://cryptic-sea-29383.herokuapp.com/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: 'success', result: data });
            })
            .catch(() => {
                dispatch({ type: 'error' });
            });
    }, []);

    return (
        <div>
            {state.post.map((element) => (
                <p key={new Date().getMilliseconds() + Math.random()}>{element.title}</p>
            ))}
        </div>
    );
}

export default UseReducervsUseState;

// import { useEffect, useState } from 'react';

// export default function GetPost() {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [post, setPost] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((data) => {
//                 // console.log(data);
//                 setLoading(false);
//                 setPost(data);
//                 setError('');
//             })
//             .catch(() => {
//                 setLoading(false);
//                 setPost({});
//                 setError('There was a problem!');
//             });
//     }, []);

//     return (
//         <div>
//             {post.slice(0, 5).map((ele) => (
//                 <p key={new Date().getMilliseconds() + Math.random()}>{ele.title}</p>
//             ))}
//         </div>
//     );
// }
