import React, { lazy, Suspense } from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const AppViews = ({ match }) => {
    return (
        <Suspense fallback={<Loading cover="content" />}>
            <Switch>
                <Route path={`${match.url}/qa/hotel/reservation`} component={lazy(() => import(`./hotelReservation`))} />
                <Route path={`${match.url}/qa`} component={lazy(() => import(`./hotelReservation`))} />
                {/*<Redirect from={`${match.url}/qa`} to={`${match.url}/qa/hotel/reservation`} />*/}
            </Switch>

        </Suspense>
    )
};

export default AppViews;
