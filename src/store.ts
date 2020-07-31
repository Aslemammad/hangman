import React from 'react';
import { ContextInterface } from './interfaces';


const StateContext = React.createContext<ContextInterface | undefined>(undefined);
const SetStateContext = React.createContext<any | undefined>(undefined);

export const useStateContext = () => {
    const context = React.useContext(StateContext);
    if (context === undefined) {
        throw new Error('useStateContext must be used within a Provider');
    }
    return context;
};
export const useSetStateContext = () => {
    const context = React.useContext(SetStateContext);
    if (context === undefined) {
        throw new Error('useSetStateContext must be used within a Provider');
    }
    return context;
};
export const StateProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = React.useState({
        user: '',
        products: [],
        carts: [],
        showModal: false
    });
    return (
        <StateContext.Provider value={state}>
            <SetStateContext.Provider value={setState}>{children}</SetStateContext.Provider>
        </StateContext.Provider>
    );
};