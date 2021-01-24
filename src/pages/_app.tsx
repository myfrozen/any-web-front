import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useStore, INITIAL_STATE } from 'store';

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const initialReduxState = pageProps[INITIAL_STATE];
  const store = useStore(initialReduxState);

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
