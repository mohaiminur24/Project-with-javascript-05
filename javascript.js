// All function is here

const getInnerTextById = (id) => {
    const innerText = document.getElementById(id).innerText;
    return innerText;
};
const setInnerTextById = (id,value) => {
    const textField = document.getElementById(id);
    textField.innerText = value.toFixed(2);
};

const randomNumber = () => {

    const random = Math.round((Math.random()*15)+5);
    return random;

};






// All function end here

const buyNowButton = document.querySelectorAll('.buyNowButton');
for(const button of buyNowButton){

    button.addEventListener("click",function mmr(even){

        const productName = even.target.parentNode.childNodes[3].innerText;
        const productPrice = parseFloat(even.target.parentNode.childNodes[7].childNodes[2].innerText);
        const quantity = parseInt(even.target.parentNode.childNodes[9].value);
        const totalPrice = parseFloat((productPrice*quantity).toFixed(2));
        console.log(totalPrice);

        const createTableData = document.createElement('tr');
        createTableData.innerHTML =`
                    <tr>
                        <td class="text-yellow-500 font-bold">${quantity}</td>
                        <td>${productName}</td>
                        <td><i class="fa-solid fa-bangladeshi-taka-sign text-yellow-500 font-bold"></i> <span>${totalPrice}</span></td>
                    </tr>
        `;
        const tableParent = document.getElementById('parentTableBody');
        tableParent.appendChild(createTableData);


        even.target.parentNode.style.display = 'none';

        const totalAmount = parseFloat(getInnerTextById('totalamount'));
        const total = totalAmount+totalPrice;
        setInnerTextById('totalamount',total);


        document.getElementById('discount').removeAttribute('disabled');
        document.getElementById('discount').classList.remove('opacity-50');

    });

};

document.getElementById('discount').addEventListener('click',function(){
    const totalAmount = getInnerTextById('totalamount');
    const discountNumber = randomNumber();
    const discounts = (totalAmount*discountNumber)/100;
    setInnerTextById('discountPrice',discounts)
    const valueafterdiscount = totalAmount-discounts;
    setInnerTextById('afterprice',valueafterdiscount);
    setInnerTextById('discoutrate',discountNumber);

    this.setAttribute('disabled','');
    this.classList.remove('hover:bg-yellow-600');
    this.classList.add('opacity-50');

    return mmr();


});