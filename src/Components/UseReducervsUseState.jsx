import { Audio } from 'react-loader-spinner';
import useAuth from '../Hooks/useAuth';

function UseReducervsUseState() {
    const { fetchData } = useAuth();

    if (fetchData.loading) {
        return <Audio height="100" width="100" color="grey" ariaLabel="loading" />;
    }
    return (
        <div>
            {fetchData?.post.map((element) => (
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
