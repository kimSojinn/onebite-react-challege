import "./App.css";
import CurrencyInput from "./components/CurrencyInput";

function App() {
    return (
        <div className="App">
            <h1>환율 변환기 (KRW-USD)</h1>
            <CurrencyInput label={"krw:"} />
            <CurrencyInput label={"usd:"} />
        </div>
    );
}

export default App;
