0. Common Hooks in react:
   a) useState
   b) useEffect
   c) useCallback
   d) useMemo
   e) useRef
   f) useReducer
   g) useLayoutEffect
   h) useHistory
   i) useLocation
   j) useParams
   k) useRouteMatch
   l) useLocation
   m) useParams
   n) Navigate()
   o)

1. Onk gula setState eksathe call hole ba onnano kichu khetreo react onk gula setState ke batch kore eksathe call kore. tai onk somoy expected output nao paoa jete pare, jodi directly setState er moddhe directly oi state ke niye update korar try kora hoy. jemon :

//wrong way
const handleNumber = () => {
setNumber(number + 1);
};

sothik poddhoti hocche setState er moddhe ekta callback niye state ke update kora:

const handleNumber = () => {
setNumber((prevNumber) => prevNumber + 1);
};

2.  a) component jkhn browser DOM e render hoye jay tkhn componentDidMount call hoy.

        componentDidMount() {
            console.log('this component is mounted')
        }

    b) jkhn routing kore onno route e jaoa hoy, orthat onno route e jaoar thik aag muhurte componentWillUnmount call hoy.
    onk somoy amra component setInterval ba emon kichu chalu rakhi jeta choltei thake ar resource khay. ei dhoroner component unmount houar aage eita use korata convention:

        componentWillUnmount() {
            clearInterval(intervalID)
        }

    c) kono component er under e child component gular unneccessary render stop korte shouldComponentUpdate use kora hoy. ei class er vitor return false kore dilei oi component r update hobe na.

    shouldComponentUpdate() {
    return false
    }

3.  useState er default value jodi kono object / array orthat reference type data hoy, taile etake change korar somoy , orthat setState er moddhe khub carefully handle korte hobe. best way hocche spread operator diye shob gula property niye eshe choriye diye just jeta ke change korte hobe setai change kora. jemon :

    const [person, setPerson] = useState({name: 'Babul', age: 29, location: 'Bogura'})

    ekhn onclick e jodi location korte chai tahole

        const changeHandler = (e) => {
            setPerson({...person, location: e.target.value})
        }

        evabe korte hobe. jodi spread na kortam tahole puro object ta reset hoye or moddhe sudhu location property tai thakto, jehetu oita reference type data.

4.  useEffect e dependency change hole se re-render kore, onk gula dependancy o deya jaay array er moddhe. kintu jodi array ta blank rakha hoy tahole oi useEffect componentDidMount er moto behave korbe, orthat prothomei just ekbar render hobe, ar na. R useEffect er most import ekta jinish holo, ei useEffect er first parameter orthat callback function ta ashole kichu ekta return o kore. eikhane return use korbo amra performance optimize korte . jemon kono ekta component e setInterval diye timer cholche. ekhn seta class component hole amra componentWillUnmount er vitore oi interval ta clear kore diye memory leakage thekatam. but functional component e eta korte hobe evabe ja ekdom componentWillUnmount e :

           useEffect(() => {
             const timer = setInterval(aFunction, 1000)

             return () => clearInterval(timer)
           }, [])

erokom korle ei component unmount houar aag muhurte oi interval stop hoye performance thik rakhbe

     componentDidMount :
            useEffect(() => {
             const timer = setInterval(aFunction, 1000)
           }, [])


    componentWillUnMount:
            useEffect(() => {
             const timer = setInterval(aFunction, 1000)

             return () => clearInterval(timer)
           }, [])

    jodi dependency thake array te, taile sei dependancy te update hole re render hobe.. ar jodi second parameter e na deya hoy, tahole always call hotei thakbe

5. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.and also there is something called memo provided by react itself. explain kori... dhori, home component er under e Title.jsx naamer ekta dumb component ache. ar home er moddhe kichu functionalityr jonno state o neya ache ebong proyojon onujayee bivinno event e shei state update o hoy. ar jehetu state update hole component re-render hoy, so oi home component re-render hobe ebong sathe tar down ba vitore call houa prottekta child component e re-render hobe. amader ekhane oi Title component o re-render hobe, jetar konoi dorkar chilo na. ekhon ei ajaira re-render jodi amra thekate chai, tahole Title component e react theke memo import kore export korar somoy export default memo(Title) evabe dilei react oi component orthat function ta ke mone rakhbe ebong memor second parameter ba oi dependancy array er variable e change na hole se kkhonoi ar oi Title component ke ajaira re-render korbe na.

kintu ekhaneo ekta somossha theke jaay. oi component (Title) jodi prop akare tar parent theke kono function (ba jekono reference type data) recieve kore, tahole memo oi re-render ke thekate parbe na. dhori, home e jkhn Title ke call korbo tkhn title component er ekta button e onClick handle korar jonno home theke ekta fucntion prop akare pathacchi. erokom korle home re-render hole memo use kora sotteo Title er re-render amra thekate parbo na. karon jehetu reference type data ashtese, orthat jokhn home component re-render hocche, tokhn oi function er body same thaktese, but memory te reference change hoye jacche, jar karon memo taake tkhn notun hishebe chinbe ebong Title ke re-render korbe.

Taile ei reference type props kivabe handle korte pari? useCallback er maddhome. amra jekhane oi onClick handler fucntion body ta define korbo, tkhn oi fucntion ke useCallback diye wrap kore dibo. taholei kaj sesh. oi fucntion taakeo useCallback mone rakhbe, ar component er jonno memo to achei. Bass, ar oi component re-render hobe na, jodi na dependancy change hoy. evabei memo value mone rekhe ar useCallback function(or any ref type data) mone rekhe ajaira re-render theke bachay.

r ekta important hook theke jaay, useMemo. eta ashole kono costly operation er value mone rakhar jonno use kora hoy. emon kono boro operation jeta complete hote khub somoy laage, seta jodi kono component re render houar somoy barbar re calculate hoy, prochur performance isssue dekha dey. tai big calcultion ekbar kore useMemo er maddhome oi value mone rakha hoy. pore jodi asholei oi function ta re calculate er dorkar pore, just dependancy te jeta change hobe seta rekhe dili oi dependancy onujaye e oi fucntion abar cll hobe, nochet aager value e mone rakhbe useMemo. by the way, useMemo kintu direct ekta value return kore jeta kono variable e save rakhte hoy.

const aBigCalculation = useMemo(() => {
let i = 0;
while (i < 10000000000) {
i += 1;
}
}, []);

Finally,

- memo : dumb component er re render thekate
- useCallback - kono fucntion er reference mone rakhte , orthat fucntion body ta kei chine rakhbe. reference type data er khetre eta use kora hoy.
- useMemo : big calculative function gular return value mone rakhe performance issue theke bachate.

6. useRef hook ta muloto use hoy DOM related kaj korar jonno. react e to direct dom manupulate kora thik na, tai react nijei ref dey kono ekta element ke target kore shei onujayee function likhte. Homechild component e example diye rekhechi. r jodi ref ke parent theke props er maddhome child e pathate hoy, taile forwardRef naamer jinish ta use korte hoy. sumit vai er react 22 number tut e shundor kore bekkha kora ache . parent theke shob props akare jabe. maane parent ei shob lekha hobe (useEffect soho shob function). just child ke tkhn oi ref ta paoar jonno forwardRef namok ekta HOC er moddhe dite hobe jeta ekta abar onno component return kore. oita ekta variable e store krte hoy. then oi variable ke export kore use korte hoy. r oi ref ta paoa jaay ashol component er second parameter hioshebe, first parameter e thake props gula .. onkta evabe likhte hoy :

   function Child({props1, props2}, ref) {
   return <input ref={ref} type={props1}>
   }

   const forwaredRef = React.forwardRef(Child)

   export default forwaredRef;

   r parent er code homechild e lekhai ache

   useRef er current use kore ekta timer (ba interval) off kora jaay useEffect er baire theke.jeta khub interesting. sumit vai dekhaiche.orthat useRef ke amra storage hishebeo use korte pari .. hahaha.. ref er current er moddhe kichu store korbo, then oita globally access korbo . jemon useEffect er moddher interval. ei interval j variable e store kora seta kintu useEffect er baire theke accessible na, but interval ta jodi amra kono button er ref er current e save rakhi, taile baire theke oi button click korei oi interval stop korte parbo

7. ei part e amra janbo react er useReducer hook niye, jeta most important ekta hook react er.......
