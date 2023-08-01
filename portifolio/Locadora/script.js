//*EVITAR CADASTRO COM CAMPO VAZIO
function validationForm() {
    let validationCod = document.forms['register']['cod'].value;   
    let validationTitle = document.forms['register']['title'].value;
    let validationDirector = document.forms['register']['director'].value;
    let validationRelease = document.forms['register']['release'].value;
    let validationAct = document.forms['register']['act'].value;
    let validationNote = document.forms['register']['note'].value;
    let validationRadio = document.forms['register']['radio'].value;

    if(validationCod == "") {
        //Se validationCod = vazio
        alert("O código deve ser preenchido.");
        return false;
    }
    if(validationTitle == "") {
        alert("O título deve ser preenchido.");
        return false;
    }
    if(validationDirector == "") {
        alert("O diretor deve ser preenchido.");
        return false;
    }
    if(validationRelease == "") {
        alert("O lançamento deve ser preenchido.");
        return false;
    }
    if(validationAct == "") {
        alert("Os atores principais devem ser preenchidos.");
        return false;
    }
    if(validationNote == "") {
        alert("A nota deve ser preenchido.");
        return false;
    }
    if(validationRadio == "") {
        alert("O gênero deve ser selecionado.");
        return false;
    }
   
    alert("A validação correu de forma correta.");
    //Só vai ser gerado se não cair em nenhuma das validações (ifs)
}

//*INSERIR NOVOS FILMES NA LISTA
function insert() {
    let cod = document.forms['register']['cod'].value;
    let title = document.forms['register']['title'].value;
    let director = document.forms['register']['director'].value;
    let release = document.forms['register']['release'].value;
    let act = document.forms['register']['act'].value;
    let note = document.forms['register']['note'].value;
    let radio = document.forms['register']['radio'].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML = `
        <th scope='row'>${cod}</th>
        <td scope='col'>${title}</td>
        <td scope='col'>${director}</td>
        <td scope='col'>${release}</td>
        <td scope='col'>${radio}</td>
        <td scope='col'>${act}</td>
        <td scope='col'>${note}</td>

    `;
    //mesma coisa que window.document.getElementById("inesertRow").innerHTML

}