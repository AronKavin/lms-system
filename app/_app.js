// _app.js
import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css'; // Tailwind or any global styles

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
