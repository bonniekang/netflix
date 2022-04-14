import React from 'react';
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App';
import GlobalStyles from './Components/GlobalStyles'

const client = new QueryClient();


ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={client}>
                <GlobalStyles />
                <App />
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>, document.getElementById('root')
);

