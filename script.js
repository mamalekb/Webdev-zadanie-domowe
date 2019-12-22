window.onload = function () {
    let totalPrice = 0.00;

    updateSum(totalPrice);

    let buttons = document.getElementsByClassName('add-product');
    for (let button of buttons) {
        button.addEventListener('click', function (e) {
            addToCard(e.target.parentElement);
        });
    }

    document.getElementById('koszyk').addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-product')) {
            removeElement(e.target);
        }
    });

    document.getElementById('koszyk').addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-all')) {
            removeAllElements(e.target);
        }
    });

    function addToCard(parentOfProduct) {
        let productToAdd = document.createElement('div');
        productToAdd.classList.add('card-product');
        let productNameToAdd = document.createElement('p');
        let productPriceToAdd = document.createElement('p');
        productPriceToAdd.classList.add('card-product-price');
        let productRemoveButtonToAdd = document.createElement('button');
        productRemoveButtonToAdd.textContent = 'usuń';
        productRemoveButtonToAdd.classList.add('remove-product');


        let nameOfProduct = parentOfProduct.firstElementChild;
        let priceOfProduct = nameOfProduct.nextElementSibling;

        productNameToAdd.textContent = nameOfProduct.textContent;
        productPriceToAdd.textContent = priceOfProduct.textContent;

        productToAdd.appendChild(productNameToAdd);
        productToAdd.appendChild(productPriceToAdd);
        productToAdd.appendChild(productRemoveButtonToAdd);
        document.getElementById('koszyk').appendChild(productToAdd);
        totalPrice += parseFloat(priceOfProduct.textContent);
        updateSum(totalPrice)
    }


    function updateSum(value) {
        document.getElementById('total-price').textContent = value.toFixed(2);
    }

    function removeElement(clickedElement) {
        let elementToRemove = clickedElement.parentElement;
        document.getElementById('koszyk').removeChild(elementToRemove);
        totalPrice -= parseFloat(clickedElement.previousElementSibling.textContent);
        updateSum(totalPrice);
    }

    function removeAllElements(clickedAllElements) {
        let AllElementsToRemove = clickedAllElements.parentElement;
        document.querySelectorAll('#koszyk').removeChild(AllElementsToRemove);
        while (AllElementsToRemove.firstChild) {
            AllElementsToRemove.removeChild(AllElementsToRemove.firstChild);
        }
        updateSum(totalPrice);
    }

    document.getElementById('koszyk').addEventListener('click', function (e) {
        if (e.target.classList.contains('buy')) {
            alert(e.target);
        }
    });

    function alert() {
        if (window.confirm('Czy jesteś pewien, że chcesz zakończyć zakupy?')) {
            window.open("formularz zgłoszeniowy.html","Proszę uzupełnić formularz zakupowy");
        }
    };
}