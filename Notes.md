1.  Onk gula setState eksathe call hole ba onnano kichu khetreo react onk gula setState ke batch kore eksathe call kore. tai onk somoy expected output nao paoa jete pare, jodi directly setState er moddhe directly oi state ke niye update korar try kora hoy. jemon :

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
