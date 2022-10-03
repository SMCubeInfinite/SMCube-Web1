let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.35
};

let callback = (entries, observer) => {
        entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.className == 'product-image') {
                        let productImage = document.getElementsByClassName('product-image');
                        let imageUrl = entry.target.getAttribute('data-img');
                        if (imageUrl) {
                                entry.target.src = imageUrl;
                                observer.unobserve(entry.target);
                        }
                }
        });
}

let observer = new IntersectionObserver(callback, options);
let productImage = document.getElementsByClassName('product-image');
for (let i = 0; i < productImage.length; i++) {
        observer.observe(productImage[i]);
}


const section = document.querySelectorAll('.section');
for (let i = 0; i < section.length; i++) {
        section[i].addEventListener('click', () => {
                let productPrice = document.getElementsByClassName('product-price');
                let productName = document.getElementsByClassName('product-name');
                let productImage = document.getElementsByClassName('product-image');

                let productImagePurchase = document.getElementById('product-image-purchase');
                let productNamePurchase = document.getElementById('product-name-purchase');
                let productPricePurchase = document.getElementById('product-price-purchase');
                let productPurchaseButton = document.getElementById('purchase-button');
                let productePurchaseCancelButton = document.getElementById('purchase-cancel-button');

                let PurchaseBoxDiv = document.getElementById('purchase-box-div');
                PurchaseBoxDiv.style.visibility = "visible";
                productImagePurchase.style.backgroundImage = "url('/image/" + [i] + ".jpg')";
                productPricePurchase.innerHTML = productPrice[i].innerHTML;
                productNamePurchase.innerText = productName[i].innerText;
                productePurchaseCancelButton.addEventListener('click', () => {
                        PurchaseBoxDiv.style.visibility = "hidden";
                });
        });
}
/*
const productImage = document.getElementsByClassName('product-image');
for (let i = 0; i < productImage.length; i++) {
        productImage[i].src = "/image/" + [i] + ".jpg";
}
*/


const search = () => {
        let search = document.getElementById('search').value.toUpperCase();
        let article = document.getElementById('article');
        let section = article.getElementsByTagName('section');
        for (let i = 0; i < section.length; i++) {
                let productNameParagraph = section[i].getElementsByTagName('p')[0];
                if (productNameParagraph) {
                        let productName = productNameParagraph.textContent || productNameParagraph.innerHTML;
                        if (productName.toUpperCase().indexOf(search) > -1) {
                                section[i].style.display = "";
                        }
                        else {
                                section[i].style.display = "none";
                        }
                }
        }
}
