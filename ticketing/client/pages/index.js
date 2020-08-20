import buildClient from '../api/build-request'

const HomePage = ({ currentUser }) => {
  return currentUser
    ? <h1>You are signed in</h1>
    : <h1>You are NOT signed in</h1>

}

HomePage.getInitialProps = async (context) => {
  const { data } = await buildClient(context).get('/api/users/currentuser')
  return data
}

export default HomePage