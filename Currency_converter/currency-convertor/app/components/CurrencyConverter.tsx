'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface ExchangeRatesResult {
    rates: Record<string, number>;
    loading: boolean;
    error: string | null;
    lastUpdated: string | null;
    refetch: () => Promise<void>;
}

function useExchangeRates(base: string) : ExchangeRatesResult {
    const [rates, setRates] = useState<Record<string, number>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchRates = useCallback(async() => {
        if(!base) return;
        
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);

            if(!res.ok) throw new Error(`Request failed ${res.status}`);

            const data = await res.json();

            if(data.result !== "succesS") {
                throw new Error(data["error-type"] || "Could not load exchange rates");
            }

            setRates(data.rates || {});
            setLastUpdated(data.time_last_updated_utc || null);
        } catch(err) {
            setError(err instanceof Error ? err.message : "Could not load exchanage rates");
        } finally {
            setLoading(false);
        }
    }, [base]);

    useEffect(() => {
        fetchRates();
    }, [fetchRates]);

    return {
        rates,
        loading,
        error,
        lastUpdated,
        refetch: fetchRates
    };
}

const CURRENCIES = [
  { code: "USD", name: "US dollar" },
  { code: "INR", name: "Indian rupee" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British pound" },
  { code: "JPY", name: "Japanese yen" },
  { code: "AUD", name: "Australian dollar" },
  { code: "CAD", name: "Canadian dollar" },
  { code: "CHF", name: "Swiss franc" },
  { code: "CNY", name: "Chinese yuan" },
  { code: "SGD", name: "Singapore dollar" },
  { code: "AED", name: "UAE dirham" },
  { code: "ZAR", name: "South African rand" },
];
 
function flapDigit({char} : {
    char: string
}) {
    const [display, setDisplay] = useState(char);
    const [flipping, setFlipping] = useState<boolean>(false);

    const prev = useRef(char);

    useEffect(() => {
        if(prev.current !== char) {
            setFlipping(true);

            const t = setTimeout(() => {
                setDisplay(char);
                setFlipping(false);
            }, 140);

            prev.current = char;
            return () => clearTimeout(t);
        }
    }, [char]);

    return (
        <span
            style={{
                display: "inline-block",
                minWidth: char === "." || char === "," ? "0.4ch" : "1.1ch",
                transform: flipping ? "rotateX(90deg)" : "rotateX(0deg)",
                transition: "transform 140ms ease-in",
                transformOrigin: "center",
            }}
            >
            {display}
        </span>
    );
}

export default function CurrencyConvertor() {
    const [amount, setAmount] = useState("1000");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    const {
        rates,
        loading,
        error,
        lastUpdated,
        refetch
    } = useExchangeRates(fromCurrency);

    const rate = rates[toCurrency];
    const numericCount = parseFloat(amount);
    const hasValidAmount = amount !== "" && !Number.isNaN(numericCount);

    const converted = hasValidAmount && rate ? (numericCount * rate).toFixed(2) : "-";

    const formattedUpdated = lastUpdated
    ? new Date(lastUpdated).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

    const handleSwap = useCallback(() => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }, [fromCurrency, toCurrency]);

    const handleAmountChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if(v === "" || /^\d\.?d*$/.test((v))) {
            setAmount(v);
        }
    }, []);
}