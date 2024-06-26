function filterSelection(category) {
    let columns = document.querySelectorAll('.column');
    
    if (category === 'all') {
        columns.forEach(function(column) {
            column.style.display = 'flex';
        });
    } else {
        columns.forEach(function(column) {
            var categories = column.classList;
            if (!categories.contains(category)) {
                column.style.display = 'none';
            } else {
                column.style.display = 'flex';
            }
        });
    }
    
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.classList.remove('btn_active');
    });
    
    let activeButton = document.querySelector('[onclick="filterSelection(\'' + category + '\')"]');
    activeButton.classList.add('btn_active');
}
