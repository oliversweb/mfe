import React from 'react';
import MarketingApp from './components/MarketingApp';

const defaultDisplay = <div>
    <h1>Hi there!</h1>
    <hr />
    <MarketingApp />
</div>;

export default () => {
    return  defaultDisplay;
};