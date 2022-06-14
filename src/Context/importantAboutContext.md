# Sumit vai khub shundor kore bujhiyechen tar context er tutorial e je kivabe nije nije class use kore context crate kora jaay. orthat oita follow korle khub valovabei bojha jaay j createcontext() ki kore, useContext() kno, overall context api kivabe kaj kore clear idea paoa jaay. kkhno vule gele sumit vai er video dekha jete pare.

----------------------- step 1 : createContext ----------------

class Context {
constructor(value) {
this.value = value;
}

    // provider
    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    };

    // consumer
    Consumer = ({ children }) => children(this.value);

}

function createContext(value = null) {
const context = new Context(value);
return {
Provider: context.Provider,
Consumer: context.Consumer,
};
}

export default createContext;

----------------------- step 2 : useContext ----------------

import React from 'react';

const themeContext = createContext();

export default themeContext;

----------------------- step 3 : wrap your parent with the provider ----------------

ei app component er moddhei state gula define kore rakhche. ami chaile jekhane iccha sekhane rekhei ekhane import kore Provider er value hishebe pathate pari. ashol kotha hocche, ei provider er moddhe value hishebe jetai pathano hoy setai jeye createContext function call er maddhome context class er constructor er value hishebe save hoy. oi value e amra pore abar createContext function er return hishebe createContext.Provider r createContext.Consumer hiebe pai ebong use kori. Mot kotha, context er moddhe ki ki jabe ta hobe provider er sathe pathano value tai .. ekhon eta te valovabe bujhle fucntonal component e easily use kora jabe ebong context niye ar kono jhamela thakbe na. kothay context better, kothay redux ar kothay simple render props ba HOC diyei kaj hoye jabe ta ekhon motamuti clear, alhamdulillah.

<ThemeContext.Provider value={this.state}>
<App />
</ThemeContext.Provider>

----------------------- step 4 : use the context in any component ----------------

import { useContext } from 'react';

function Content() {
const context = useContext(ThemeContext);
const { theme, switchTheme } = context;

    console.log('Content rendered');
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );

}
