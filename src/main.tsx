import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import React from "react";
import {store} from "./Store/store.ts";
import Field from "./Field/Field.tsx";
import Battlefield from "./Field/BattleField/Battlefield.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Field/>,
        // errorElement:<ErrorPage/>,
        children:[
            {
                path:"/playarea",
                // index,
                element: <Battlefield/>
            },
            // {
            //     path:"/login",
            //     element: <LogInWind/>
            // },
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