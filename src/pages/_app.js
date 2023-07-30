import Navbar from "@/components/shared/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
    return (
        <div className="container">
            <Provider store={store}>
                <Navbar />
                <Component {...pageProps} />
            </Provider>
        </div>
    );
}
