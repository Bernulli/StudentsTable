// variables
const btnShowForm = document.getElementById('btn-showForm');
const formAdd = document.getElementById('form-add-student');
const formEdit = document.getElementById('form-edit-student');
const table = document.getElementById('table-tbody');
const addStudent = document.getElementById('btn-add-form-add');
const addEditStudent = document.getElementById('btn-add-form-edit');
const cancelBtnAdd = document.getElementById('btn-cancel-form-add');
const cancelBtnEdit = document.getElementById('btn-cancel-form-edit');
let currentTR;

// event listeners
btnShowForm.addEventListener('click', showAddForm);
addStudent.addEventListener('click', createStudent);
cancelBtnAdd.addEventListener('click', hideForm);
cancelBtnEdit.addEventListener('click', hideForm);
table.addEventListener('click', removeOrEdit);
addEditStudent.addEventListener('click', editTable);


// functions
function showAddForm(){
    formAdd.style.display = 'block';
    formEdit.style.display = 'none';
}

function hideForm(){
    formAdd.style.display = 'none';
    formEdit.style.display = 'none';
}

function editTable(){
    currentTR.children[1].innerHTML = document.getElementById('edit-name').value;
    currentTR.children[3].innerHTML = document.getElementById('edit-email').value;
    currentTR.children[2].innerHTML = document.getElementById('edit-address').value;
}


function removeOrEdit(e){
    if(e.target.classList.contains('btn-delete')){
        e.target.parentElement.parentElement.remove();
    }
    else if(e.target.classList.contains('btn-edit')){
        formAdd.style.display = 'none';
        formEdit.style.display = 'block';

        currentTR = e.target.parentElement.parentElement;
        document.getElementById('edit-name').value = currentTR.children[1].innerHTML;
        document.getElementById('edit-email').value = currentTR.children[3].innerHTML;
        document.getElementById('edit-address').value = currentTR.children[2].innerHTML;
    }
}

function createStudent(){
    let countChild = table.children.length;
    countChild++;

    let name = document.getElementById('add-name').value;
    let email = document.getElementById('add-email').value;
    let address = document.getElementById('add-address').value;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th scope="row">${countChild}</th>
        <td>${name}</td>
        <td>${address}</td>
        <td>${email}</td>
        <td>
          <button class="btn-element btn-edit">Edit</button>
          <button class="btn-element btn-delete">Delete</button>
        </td>
        `;
    table.appendChild(tr);
    document.getElementById('add-name').value = '';
    document.getElementById('add-email').value = '';
    document.getElementById('add-address').value = '';
}

