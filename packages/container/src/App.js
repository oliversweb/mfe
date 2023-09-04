import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Progress from './components/Progress';
import Header from './components/Header';
// import StaticFooter from './components/StaticFooterApp';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
// const DynamicFooterLazy = lazy(() => import('./components/DynamicFooterApp'));
// const BannerLazy = lazy(() => import('./components/BannerApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>        
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
            {/* <DynamicFooterLazy /> */}
            {/* <StaticFooter /> */}
            {/* <BannerLazy /> */}
          </Suspense>          
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
