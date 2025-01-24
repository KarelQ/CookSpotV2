function toggleDropdown() {
    document.getElementById('checkboxDropdown').classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.select-box') && !event.target.matches('.checkbox-dropdown') && !event.target.matches('.checkbox-dropdown label') && !event.target.matches('.checkbox-dropdown input') && !event.target.matches('.search-input')) {
        var dropdowns = document.getElementsByClassName('checkbox-dropdown');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function filterOptions() {
    var input, filter, labels, i;
    input = document.querySelector('.search-input');
    filter = input.value.toLowerCase();
    labels = document.querySelectorAll('.checkbox-dropdown label');
    for (i = 0; i < labels.length; i++) {
        if (labels[i].textContent.toLowerCase().indexOf(filter) > -1) {
            labels[i].style.display = "";
        } else {
            labels[i].style.display = "none";
        }
    }
}
