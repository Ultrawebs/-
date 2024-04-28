<script>
    // Function to prevent right-click menu
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    // Function to prevent keyboard shortcuts
    document.onkeydown = function (e) {
        // Disable F12 key
        if (e.keyCode == 123) {
            return false;
        }
        // Disable Ctrl+Shift+I key combination
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        // Disable Ctrl+Shift+J key combination
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        // Disable Ctrl+Shift+U key combination
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
        // Disable Ctrl+C key combination
        if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
    };

    // Detect if the developer tools are opened
    window.addEventListener('devtoolschange', function(event) {
        // If developer tools are opened, navigate back to the home page
        window.location.href = 'about:home'; // Change 'about:home' to your desired home page URL
    });
</script>
