import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

export const AppViews = ({match}) => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        {/* <Route path={`${match.url}/home`} component={lazy(() => import(`./home`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/home`} /> */}
        <Route path={`${match.url}/token`} component={lazy(() => import(`./token`))} />
        {/* QA */}
        <Route path={`${match.url}/qa/hotel/reservation`} component={lazy(() => import(`./qa/hotelReservation`))} />
        <Route path={`${match.url}/qa`} component={lazy(() => import(`./qa`))} />
        {/*<Redirect from={`${match.url}/qa`} to={`${match.url}/qa/hotelReservation`} />*/}
        {/* HotelMore */}
        <Route path={`${match.url}/hotel`} component={lazy(() => import(`./hotel`))} />
        <Route path={`${match.url}/hotel/calculate`} component={lazy(() => import(`./hotel`))} />
        <Route path={`${match.url}/hotel/reservation`} component={lazy(() => import(`./hotel`))} />
        <Route path={`${match.url}/hotel/mapping/hotel`} component={lazy(() => import(`./hotel`))} />
        <Route path={`${match.url}/hotel/mapping/room`} component={lazy(() => import(`./hotel`))} />
        <Route path={`${match.url}/hotel/mapping/hotel`} component={lazy(() => import(`./hotel`))} />
        <Route path={`${match.url}/hotel/markup`} component={lazy(() => import(`./hotel`))} />
        <Redirect from={`${match.url}/hotel`} to={`${match.url}/hotel/mapping/hotel`} />
        <Redirect from={`${match.url}/`} to={`${match.url}/hotel/mapping/hotel`} />
      </Switch>
    </Suspense>
  )
}

export default AppViews;
