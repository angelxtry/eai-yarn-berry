import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DestinationInterfaceForm } from '@/components/forms/destination-interface.form';
import { DestinationSystemForm } from '@/components/forms/destination-system.form';
import { SourceInterfaceForm } from '@/components/forms/source-interface.form';
import { SourceSystemForm } from '@/components/forms/source-system.form';
import { DestinationInterfacePage } from '@/pages/destination-interface/destination-interface.page';
import { DestinationSystemPage } from '@/pages/destination-system/destination-system.page';
import { HomePage } from '@/pages/home/home.page';
import { LoginPage } from '@/pages/login/login.page';
import { SourceInterfacePage } from '@/pages/source-interface/source-interface.page';
import { SourceSystemPage } from '@/pages/source-system/source-system.page';
import { TempPage } from '@/pages/temp/temp.page';
import { RoutePath } from '@/router/paths';
import { ProtectedRoute } from '@/router/protected-route';
import { QueryParams } from '@/router/queryParams';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.login} element={<LoginPage />} />
        <Route path={RoutePath.temp} element={<TempPage />} />
        <Route
          path={RoutePath.home}
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={RoutePath.sourceSystem}
          element={
            <ProtectedRoute>
              <SourceSystemPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<SourceSystemForm />} />
          <Route path={QueryParams.sourceSystemId} element={<SourceSystemForm />} />
        </Route>
        <Route
          path={RoutePath.sourceInterface}
          element={
            <ProtectedRoute>
              <SourceInterfacePage />
            </ProtectedRoute>
          }
        >
          <Route index element={<SourceInterfaceForm />} />
          <Route path={QueryParams.sourceInterfaceId} element={<SourceInterfaceForm />} />
        </Route>
        <Route
          path={RoutePath.destinationSystem}
          element={
            <ProtectedRoute>
              <DestinationSystemPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<DestinationSystemForm />} />
          <Route path={QueryParams.systemId} element={<DestinationSystemForm />} />
        </Route>
        <Route
          path={RoutePath.destinationInterface}
          element={
            <ProtectedRoute>
              <DestinationInterfacePage />
            </ProtectedRoute>
          }
        >
          <Route index element={<DestinationInterfaceForm />} />
          <Route path={QueryParams.interfaceId} element={<DestinationInterfaceForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
