import React from 'react';
import { MainContainerLoading, Dot, DotWrapper } from './styledLoadingIcon';

const LoadingDots = () => {
    return (
        <MainContainerLoading>
            <DotWrapper>
                <Dot delay="0s" />
                <Dot delay=".1s" />
                <Dot delay=".2s" />
            </DotWrapper>
        </MainContainerLoading>
    )
}

export default LoadingDots;



