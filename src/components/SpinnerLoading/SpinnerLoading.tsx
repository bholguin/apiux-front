import { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';
import { StyledContainer } from './SpinnerLoading.styles';

const SplashScreen: FC = (): JSX.Element => {
    const { promiseInProgress } = usePromiseTracker();
    return promiseInProgress ? (
        <StyledContainer>
            <ThreeDots color='purple' />
        </StyledContainer>
    ) : (
        <div />
    );
};

export default SplashScreen;