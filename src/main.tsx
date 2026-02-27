import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Registr from "./components/Registr/Registr.tsx";
import {LogInWind} from "./components/Registr/LogInWind/LogInWind.tsx";
import {NewAccount} from "./components/Registr/NewAccount/NewAccount.tsx";
import {Provider} from "react-redux";
import React from "react";
import {store} from "./Store/store.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Registr/>,
        // errorElement:<ErrorPage/>,
        children:[
            {
                path:"/newaccount",
                // index,
                element: <NewAccount/>
            },
            {
                path:"/login",
                element: <LogInWind/>
            },
        ]
    },
    // {
    //     path: '/workwindow',
    //     element:<WorkWind/>,
    //     children:[
    //         {
    //             path: '/workwindow/today',
    //             element: <TodayList/>,
    //         },
    //         {
    //             path: '/workwindow/sevenDaysList',
    //             element: <TodayList/>
    //         },
    //         {
    //             path: '/workwindow/alllist',
    //             element: <TodayList/>
    //         },
    //         {
    //             path: '/workwindow/completed',
    //             element: <TodayList/>
    //         },
    //         {
    //             path: '/workwindow/trash',
    //             element: <TodayList/>
    //         },
    //         {
    //             path: '/workwindow/tags',
    //             element: <TodayList/>
    //         },
    //         {
    //             path: '/workwindow/menu',
    //             element: <UserMenu/>
    //         },
    //         {
    //             path: '/workwindow/notelist',
    //             element: <TodayList/>
    //         }
    //
    //     ]
    // }
]);

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider
            store={store}
        >
            <RouterProvider router={router}/>
        </Provider>

    </React.StrictMode>,
)