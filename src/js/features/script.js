const exampleModal = document.getElementById('modalFormContact');

function selectElement(id, valueToSelect) {    
    const element = document.getElementById(id);
    element.value = valueToSelect;
}

if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    console.log(event.relatedTarget);
    // Extract info from data-bs-* attributes
    const motivation = button.getAttribute('data-bs-whatever');
    
    switch (motivation) {
        case 'consulting':
            selectElement('motivation-message', motivation);
            break;
        case 'hiring':
            selectElement('motivation-message', motivation);
            break;
        case 'freelance':
            selectElement('motivation-message', motivation);
            break;  
        default: 
            console.log('cas imprévu');     
    }
  }
)

// const form = document.querySelector('')
}