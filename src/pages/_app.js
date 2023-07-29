import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <div className="container">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}
