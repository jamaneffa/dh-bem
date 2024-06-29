window.addEventListener('load', async (e) => {
    try {
        
        const format = text => String(text).toLowerCase().trim();

        let baseUrl = new URL(window.location.href).origin
        
        let petition = await fetch(`${baseUrl}/api/products/`);
        let response = await petition.json();

        localStorage.setItem('products', JSON.stringify(response));
        localStorage.setItem('productNames', JSON.stringify(response.products.map(product => ({name: format(product.name), sku: product.sku}))));

        document.querySelector("#search").addEventListener("input", async (event) => {
            try {
                const products = JSON.parse(localStorage.getItem('products')).product;
                let filtro = ({name, sku}) => format(name).includes(format(event.target.value));

                let resultados = event.target.value.length > 1 ? JSON.parse(localStorage.getItem('productNames'))
                .filter(filtro) : [];

                console.log(JSON.parse(localStorage.getItem('products')));
                document.querySelector("#suggestions").innerHTML = null;
                console.log(resultados);

                resultados.forEach(element => {
                    const link = document.createElement('a');
                    link.href = `/products/${element.sku}`;
                    link.textContent = element.name;

                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        window.location.href = link.href;
                    });
                    const option = document.createElement('option');
                    option.appendChild(link);
                    document.querySelector("#suggestions").appendChild(option);
                });

            } catch (error) {
                console.log(error.message);
            }
        });
    } catch (error) {
        console.log(error);
    }
});
