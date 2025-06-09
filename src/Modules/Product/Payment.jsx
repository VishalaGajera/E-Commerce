

import React, { useState } from "react";

function PaymentForm() {
    const [cardNumber, setCardNumber] = useState("");
    
    const [expiry, setExpiry] = useState("");
    
    const [cvv, setCvv] = useState("");
    
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Payment Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name on Card
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                            Card Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cardNumber"
                            type="text"
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-7ding-tight focus:outline-none focus:shadow-outline"
                            id="expiry"
                            type="text"
                            placeholder="MM/YY"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                            CVV
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cvv"
                            type="text"
                            placeholder="XXX"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm;