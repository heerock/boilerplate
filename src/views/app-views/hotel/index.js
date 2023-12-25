import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const AppViews = ({ match }) => {
    return (
        <Suspense fallback={<Loading cover="content" />}>
            <Switch>
                <Route path={`${match.url}/mapping/hotel`} component={lazy(() => import(`./mapping/hotel`))} />
                {/* <Route path={`${match.url}/mapping/room`} component={lazy(() => import(`./mapping/room`))} /> */}
            </Switch>
        </Suspense>
    )
};

export default AppViews;