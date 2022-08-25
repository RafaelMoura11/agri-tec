import Context from './Context';

type Props = {
  children: React.ReactNode
}

function Provider({ children }: Props) {
    const contextValue = {}

    return (
        <Context.Provider value={ contextValue }>
        {children}
        </Context.Provider>
    );
}

export { Context, Provider };
