import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <PayPalScriptProvider
                options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID }}
            >
                <App />
            </PayPalScriptProvider>
        </BrowserRouter>
    );
} else {
    console.error("Unable to find the root element for your application.");
}
