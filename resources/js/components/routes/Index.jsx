import React, {ReactComponentElement} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routesMap} from './Router'

function Routers() {
    const routes = routesMap

    return (
        <Routes>
            {
                routes.map(({path, component, layout, middleware = React.Fragment}, key
                ) => {
                    const Layout = layout;
                    const Middleware = middleware
                    const Component = component
                    return (
                        <Route path={path} key={key} element={
                            <Middleware>
                                <Layout>
                                    <Component/>
                                </Layout>
                            </Middleware>
                        }>
                        </Route>
                    )
                })}
        </Routes>
    )
}

export default Routers
