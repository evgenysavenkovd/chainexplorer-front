import { Container } from '@app/components/ui/global';
import { AddressScreen, HomeScreen, TransactionScreen } from '@app/screens';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <Container />,
    children: [
      {
        path: routes.home.path,
        Component: HomeScreen,
      },
      {
        path: routes.transaction.path,
        Component: TransactionScreen,
      },
      {
        path: routes.address.path,
        Component: AddressScreen,
      },
    ],
  },
]);
