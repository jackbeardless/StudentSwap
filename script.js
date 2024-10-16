// JavaScript to toggle the dropdown visibility
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.avatar-icon').addEventListener('click', function() {
        document.getElementById('dropdownMenu').classList.toggle('show');
    });

    // Close the dropdown if clicked outside
    window.onclick = function(event) {
        if (!event.target.matches('.avatar-icon')) {
            var dropdowns = document.getElementsByClassName('dropdown-menu');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});



///Dialog Box script
const dialog = document.querySelector('.dialog-overview');
const openButton = document.querySelector('[data-dialog="open"]');
const saveButton = document.getElementById('saveListingButton');

openButton.addEventListener('click', () => {
    dialog.open = true;
});

saveButton.addEventListener('click', () => {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemDescription = document.getElementById('itemDescription').value;

    // You can handle saving the data here (e.g., send it to a server or log it)
    console.log('Item Name:', itemName);
    console.log('Item Price:', itemPrice);
    console.log('Description:', itemDescription);

    // Close the dialog after saving
    dialog.open = false;

    alert('Listing saved successfully!');
});
