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
