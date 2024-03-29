import React, { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const AppViews = ({ match }) => {
    return (
        <Suspense fallback={<Loading cover="content" />}>
            <Switch>
                <Route path={`${match.url}/mapping/hotel`} component={lazy(() => import(`./mapping/hotel`))} />
                {/* <Route path={`${match.url}/mapping/room`} component={lazy(() => import(`./mapping/room`))} /> */}

                <Route exact path={`${match.url}/reservation/:reservationId`} component={lazy(() => import(`./reservation/detail`))} />
                <Route path={`${match.url}/reservation`} component={lazy(() => import(`./reservation/list`))} />
                <Redirect from={`${match.url}/reservation`} to={`${match.url}/reservation/list`} />

                <Route exact path={`${match.url}/markup/:hotelId`} component={lazy(() => import(`./markup/detail`))} />
                <Route path={`${match.url}/markup`} component={lazy(() => import(`./markup/list`))} />
                <Redirect from={`${match.url}/markup`} to={`${match.url}/markup/list`} />

            </Switch>
        </Suspense>
    )
};

export default AppViews;
