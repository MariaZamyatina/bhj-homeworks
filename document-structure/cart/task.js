const products = document.querySelector('.products');

//localStorage.clear();
// если localStorage не пустой//
// получаем из него необходимые данные
if (localStorage.getItem('key') != null) {
    console.log('ok');
    let dataStorage = JSON.parse(localStorage.getItem("key"));
    addHtml(dataStorage['dict']); 
  };

products.addEventListener('click', (e) => {
  if (e.target.classList.contains('product__quantity-control_dec')) {
    let parent = e.target.closest('.product__quantity-controls').children[1];
    let quantity = parseInt(parent.textContent.trim(' '));
    if (quantity == 0) return;
    quantity -= 1;
    parent.textContent = quantity;
  }
  if (e.target.classList.contains('product__quantity-control_inc')) {
    let parent = e.target.closest('.product__quantity-controls').children[1];
    let quantity = parseInt(parent.textContent.trim(' '));
    quantity += 1;
    parent.textContent = quantity;
  }
  if (e.target.classList.contains('product__add')) {
    addToBasket(e.target);
  }
});

function addToBasket(elClicked) {
  const basket = document.getElementsByClassName('cart__products')[0];
  const imgs = basket.querySelectorAll('img'); // массив всех изображений

  const parent = elClicked.closest('.product'); 
  const count = parent.querySelector('.product__quantity-value').textContent.trim(); // получаем количество выбранного продукта
  const img = parent.querySelector('img').cloneNode(); // получаем изображение выбранного продукта
  // Проверим есть ли этот элемент в корзине. Если есть - изменяем коичество
  checkedImg = [...imgs].filter( el => el.src == img.src ); // []

  if (checkedImg.length !== 0) {
      let countAdd = checkedImg[0].nextElementSibling.textContent;
      countAdd = parseInt(countAdd) + parseInt(count);
      checkedImg[0].nextElementSibling.textContent = countAdd;

      addLocalStorage();

      return;   
    };
    
  // иначе создаем новый элемент в корзине
  const newElement = document.createElement('div');
  newElement.classList.add('cart__product');
  img.className = 'cart__product-image';
  newElement.appendChild(img);
  const attr = parent.getAttribute('data-id');
  newElement.dataset.id = attr;
//   const count = parent.querySelector('.product__quantity-value').textContent.trim();
  const child = document.createElement('div');
  child.classList.add('cart__product-count');
  child.textContent = count;
  newElement.appendChild(child);
  basket.appendChild(newElement);

  addLocalStorage();
};

function addLocalStorage() {
    
    let dataDict = {'dict' : []}; // словарь для добавления в localstorage
    let products = Array.from(document.querySelectorAll('.cart__product'));
    console.log('products',products);

    products.forEach((element) => {
      let data = {'img' : '', 'count' : '', 'id' : ''};  
      const img = element.querySelector('img').cloneNode(); // получаем изображение выбранного продукта
      const id = element.getAttribute('data-id'); // получаем количество товара
      const count = element.querySelector('.cart__product-count').textContent; // получаем количество выбранного продукта
      
      data['img'] = img.src;
      data['id'] = id;
      data['count'] = count;
      console.log('data',data);

      dataDict['dict'].push(data);
    });
    
    localStorage.setItem('key', JSON.stringify(dataDict));
  };

function addHtml(arr) {
  const basket = document.getElementsByClassName('cart__products')[0];
  arr.forEach((element) => {  
  const newElement = document.createElement('div');
  newElement.classList.add('cart__product');
  newElement.dataset.id = element['id'];
  newElement.innerHTML += `<img class="cart__product-image" src="${element['img']}">
                            <div class="cart__product-count">${element['count']}</div>`;
  console.log(newElement);
  basket.appendChild(newElement);
})
};
