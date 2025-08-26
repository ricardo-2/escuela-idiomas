"use client";

function ButtonCheckout ({priceID}) {
    return (
        <button
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl shadow"
        onClick={async () => {
            const res = await fetch ('/api/checkout', {
                method: 'POST',
                body: JSON.stringify({
                    priceID
                }),
                headers: {
                    'Content-Type': 'aplication/json'
                }
            })
            const date = await res.json()
            console.log(data)
            window.location.href = data.url;
        }}
        >
            Pagar tarjeta           
        </button>
    );
}

export default ButtonCheckout;