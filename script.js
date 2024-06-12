document.addEventListener('DOMContentLoaded', () => {
    const currencySelector = document.getElementById('currency');

    currencySelector.addEventListener('change', updatePrices);

    function updatePrices() {
        const selectedCurrency = currencySelector.options[currencySelector.selectedIndex];
        const symbol = selectedCurrency.getAttribute('data-symbol');
        const plans = document.querySelectorAll('.pricing-section');

        plans.forEach(plan => {
            const priceElement = plan.querySelector('.price');
            if (priceElement && priceElement.textContent.includes('/month')) {
                let price = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ''));
                switch (selectedCurrency.value) {
                    case 'EUR':
                        price = price * 0.011; // Example conversion rate for EUR
                        break;
                    case 'GBP':
                        price = price * 0.009; // Example conversion rate for GBP
                        break;
                    case 'INR':
                        price = price * 1; // INR remains the same
                        break;
                    case 'USD':
                        price = price * 0.012; // Example conversion rate for USD
                        break;
                    default:
                        break;
                }
                priceElement.textContent = `${symbol}${price.toFixed(2)}/month`;
            } else if (priceElement && !priceElement.textContent.includes('/month')) {
                let price = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ''));
                switch (selectedCurrency.value) {
                    case 'EUR':
                        price = price * 0.011; // Example conversion rate for EUR
                        break;
                    case 'GBP':
                        price = price * 0.009; // Example conversion rate for GBP
                        break;
                    case 'INR':
                        price = price * 1; // INR remains the same
                        break;
                    case 'USD':
                        price = price * 0.012; // Example conversion rate for USD
                        break;
                    default:
                        break;
                }
                priceElement.textContent = `${symbol}${price.toFixed(2)} for 1 day`;
            }
        });
    }
});
