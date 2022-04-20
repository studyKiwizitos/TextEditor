// Elements
const elements = document.querySelectorAll('.btn');

let index = 0;
const colors = ['salmon', 'green'];

// Event
elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        if (command == 'createLink' || command == 'insertImage') {
            let url = prompt('Enter the link here:')
            document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null);
        }
    });
});
