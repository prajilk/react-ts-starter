import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import queryConfig from "./config/react-query";
import PageLoading from "./components/common/PageLoading";
import Error404 from "./components/common/Error404";
import Home from "./pages/Home";

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </NextUIProvider>
        </QueryClientProvider>
      </div>
      <Toaster position="top-right" />
    </Suspense>
  );
}

export default App;
