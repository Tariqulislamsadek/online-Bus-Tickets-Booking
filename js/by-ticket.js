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

    // button disable

    function handleButtonClick(button) {
        const selectedButtons = document.querySelectorAll('.btn-selected');
        
        if (selectedButtons.length < 4 || button.classList.contains('btn-selected')) {
          // Toggle the 'btn-selected' class on the clicked button
          button.classList.toggle('btn-selected');
  
          // Disable other buttons if four are selected
          if (selectedButtons.length === 3 && !button.classList.contains('btn-selected')) {
            disableOtherButtons();
          }
  
          // Update the count of selected buttons
          updateSelectedCount();
        }
      }
  
      // Function to update the count of selected buttons
      function updateSelectedCount() {
        const selectedButtons = document.querySelectorAll('.btn-selected');
        const selectedCount = selectedButtons.length;
  
        // Display the count in the HTML
        document.getElementById('selectedCount').textContent = selectedCount;
      }
  
      // Function to disable other buttons
      function disableOtherButtons() {
        const allButtons = document.querySelectorAll('.btn');
        
        allButtons.forEach(button => {
          if (!button.classList.contains('btn-selected')) {
            button.disabled = true;
            button.classList.add('btn-disabled');
          }
        });
      }


 

