import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import AuthorizedRoutes from './AuthorizedRoutes';
import UnAuthorizedRoutes from './UnAuthorizedRoutes';

function BirdRouter() {
  const firebaseUser = useContext(UserContext);
  console.log(firebaseUser);

  return firebaseUser ? <AuthorizedRoutes /> : <UnAuthorizedRoutes />;
}

export default BirdRouter;
