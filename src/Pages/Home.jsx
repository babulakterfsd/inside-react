// import { useReducer } from 'react';

// function Home() {
//     const [count, dispatch] = useReducer((state, action) => {
//         switch (action) {
//             case 'increment':
//                 return state + 1;
//             case 'decrement':
//                 return state - 1;
//             default:
//                 return state;
//         }
//     }, 0);

//     return (
//         <div
//             style={{
//                 minHeight: '100vh',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 flexDirection: 'column',
//             }}
//         >
//             <h1 style={{ marginBottom: '30px' }}>The count is {count} now</h1>
//             <div
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                 }}
//             >
//                 <button
//                     type="button"
//                     style={{ marginRight: '30px' }}
//                     onClick={() => dispatch('increment')}
//                 >
//                     increment
//                 </button>
//                 <button type="button" onClick={() => dispatch('decrement')}>
//                     decrement
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Home;
