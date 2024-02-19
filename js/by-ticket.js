function buyTicket() {
    const section2 = document.getElementById('select-ticket');
    section2.scrollIntoView({ behavior: 'smooth' });
  }

//   seat select

// Function to handle button click
    function handleButtonClick(button) {
      // Toggle the 'btn-selected' class on the clicked button
      button.classList.toggle('btn-selected');

      // Update the count of selected buttons
      updateSelectedCount();
    }

    // Function to update the count of selected buttons
    function updateSelectedCount() {
      const selectedButtons = document.querySelectorAll('.btn-selected');
      const selectedCount = selectedButtons.length;

      // Display the count in the HTML
      document.getElementById('selectedCount').textContent = selectedCount;
    }