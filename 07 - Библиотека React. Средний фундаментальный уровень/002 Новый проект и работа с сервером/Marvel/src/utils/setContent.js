import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spinner/Spinner';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton />;
        case 'loading':
            return <Spinner />;
        case 'error':
            return <ErrorMessage />;
        case 'confirmed':
            return <Component data={data} />
        default:
            throw new Error('Unexpexted process state')
    }
}

export default setContent;