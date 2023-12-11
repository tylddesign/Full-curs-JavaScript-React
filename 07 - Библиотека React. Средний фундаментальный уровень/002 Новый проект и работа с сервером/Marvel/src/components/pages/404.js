import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link, useHistory } from "react-router-dom"

const Page404 = () => {
    let history = useHistory();

    return (
        <div>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Page doesn't exist</p>
            <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px' }} to="/">Back to main page</Link>
            <p style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'cursor': 'pointer' }} onClick={() => history.goBack()}>Back</p>
        </div>

    )
}

export default Page404;