// sample item list
var itemList = [{
    name: 'Milk',
    quantity: '1',
    price: '100',
    discount: '10'
},
{
    name: 'Bread',
    quantity: '2',
    price: '200',
    discount: '20'
},
{
    name: 'Eggs',
    quantity: '3',
    price: '300',
    discount: '30'
}
];
// on form submission call the function
const form = document.getElementById('addItem');
const allItems = document.getElementById('allItems');
const totalQty = document.getElementById('totalQty');
const totalPrice = document.getElementById('totalPrice');
const deleteAll = document.getElementById('deleteAll');

// validate the form and add the item to the list
const addItem = (e) =>
{
    e.preventDefault();
    if (e.target.item.value === '' || e.target.quantity.value === '' || e.target.price.value === '' || e.target.discount.value === '') {
        alert('Please fill all the fields');
        return;
    }
    const item = {
        name: e.target.item.value,
        quantity: e.target.quantity.value,
        price: e.target.price.value,
        discount: e.target.discount.value
    }
    itemList.push(item);
    displayItems();
}

// append the item to the list and reset the form
form.addEventListener('submit', (e) =>
{
    addItem(e);
    form.reset();
});

// replace the item with a form and onSubmit modify the item
const onItemEdit = (item, index) =>
{
    const itemRowToEdit = document.getElementById('allItems').children[index];
    const editForm = document.createElement('td');
    editForm.classList.add('form-inline');
    editForm.innerHTML = `
            <form class="row">
                <td>
                    <div class="col">
                        <input type="text" class="form-control" name="item" value="${item.name}">
                    </div>
                </td>
                <td>
                    <div class="col">    
                        <input type="number" class="form-control" name="price" value="${item.price}">
                    </div>
                </td>
                <td>
                    <div class="col">
                        <input type="number"class="form-control"  name="discount" value="${item.discount}">
                    </div>
                </td>
                <td>
                    <div class="col">
                        <input type="number" class="form-control" name="quantity" value="${item.quantity}">
                    </div>
                </td>
                <td>
                    <div class="col">
                        <button type="submit" class="btn btn-success">Save</button>
                    </div>
                </td>
                <td>
                    <div class="col">
                        <button type="button" class="btn btn-danger">Cancel</button>
                    </div>
                </td>
            </form>
        `;
    // on submit modify the item and display the items
    editForm.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        item.name = e.target.item.value;
        item.quantity = e.target.quantity.value;
        item.price = e.target.price.value;
        item.discount = e.target.discount.value;
        displayItems();
    });
    // on cancel remove the form and display the items
    editForm.addEventListener('click', (e) =>
    {
        if (e.target.innerHTML === 'Cancel') {
            displayItems();
        }
    });
    itemRowToEdit.replaceWith(editForm);
}

const appendItem = (item, index) =>
{
    const itl = item.quantity * item.price * (1 - item.discount / 100);

    const itemRow = document.createElement('tr');

    const itemName = document.createElement('td');
    itemName.classList.add('col-md-4');
    itemName.innerHTML = item.name;

    const itemPrice = document.createElement('td');
    itemPrice.innerHTML = item.price;
    itemPrice.classList.add('col-md-2');
    allItems.appendChild(itemRow);

    const itemDiscount = document.createElement('td');
    itemDiscount.innerHTML = item.discount;
    itemDiscount.classList.add('col-md-2');
    allItems.appendChild(itemRow);

    const itemQuantity = document.createElement('td');
    itemQuantity.innerHTML = item.quantity;
    itemQuantity.classList.add('col-md-2');
    allItems.appendChild(itemRow);

    const itemTotal = document.createElement('td');
    itemTotal.innerHTML = Math.floor(itl);
    itemTotal.classList.add('col-md-3');
    allItems.appendChild(itemRow);

    const itemEdit = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-warning');
    editButton.innerHTML = '<span><i class="bi bi-pencil"></i></span>';
    itemEdit.appendChild(editButton);
    itemEdit.classList.add('col-md-2');

    const itemDelete = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerHTML = '<span><i class="bi bi-trash"></i></span>';
    itemDelete.appendChild(deleteButton);
    itemDelete.classList.add('col-md-2');

    itemRow.appendChild(itemName);
    itemRow.appendChild(itemPrice);
    itemRow.appendChild(itemDiscount);
    itemRow.appendChild(itemQuantity);
    itemRow.appendChild(itemTotal);
    itemRow.appendChild(itemEdit);
    itemRow.appendChild(itemDelete);

    deleteButton.addEventListener('click', (_) =>
    {
        itemList.splice(index, 1);
        displayItems();
    });

    editButton.addEventListener('click', () =>
    {
        onItemEdit(item, index);
    });
    allItems.appendChild(itemRow);
}

const displayItems = () =>
{
    while (allItems.firstChild) {
        allItems.removeChild(allItems.firstChild);
    }
    itemList.forEach((item, index) =>
    {
        appendItem(item, index);
    });
    totalQty.innerHTML = itemList.reduce((acc, item) => acc + parseInt(item.quantity), 0);
    totalPrice.innerHTML = Math.floor(itemList.reduce((acc, item) => acc + parseInt(item.quantity) * parseInt(item.price) * (1 - parseInt(item.discount) / 100), 0));
}

deleteAll.addEventListener('click', () =>
{
    itemList = [];
    displayItems();
});

displayItems();




