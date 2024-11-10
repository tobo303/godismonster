const currencyFormatter = (amount: number): string => {
    return Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK'
    }).format(amount);
}

export default currencyFormatter;