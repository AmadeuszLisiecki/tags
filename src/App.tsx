import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter } from 'react-router-dom';

import './App.css';
import { TagsContent } from './components/TagsContent';

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <TagsContent />
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
