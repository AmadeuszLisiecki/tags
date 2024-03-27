import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import { TagsContent } from './components/TagsContent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TagsContent />
    </QueryClientProvider>
  );
}

export default App;
