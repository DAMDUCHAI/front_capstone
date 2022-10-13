const btnDeleteCategory = document.getElementsByClassName("remove-category")

function addToCategoryTable() {
    var table = document.getElementById("categoryTable").getElementsByTagName('tbody')[0];
    var selection = document.getElementById("categoryOption");
    var optionText = selection.options[selection.selectedIndex].text;
    var optionValue = selection.options[selection.selectedIndex].value;
    if (optionValue != -1) {
        var row = table.insertRow(table.rows.length);
        row.setAttribute('class','category-items');
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);

        cell0.innerHTML = optionValue;
        cell1.innerHTML = optionText;
        cell2.innerHTML = `<button class="btn btn-danger remove-category" onclick="deleteFromCategoryTable(event)" title="Xoá">X</button>`;
    }

}

  function deleteFromCategoryTable(event) {
    event.stopPropagation();
    var btnItem = event.target;
    var category = btnItem.parentElement.parentElement;
    category.remove();
  }
 