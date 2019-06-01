Vue.component('dropdown', {
    template: '#tmpl-dropdown',
    props: {
        id: {
            type: String,
        },

        visible: {
            type: Boolean,
            default: false,
        },

        items: {
            type: Array,
            default: [],
        },
    },

    methods: {
        clicked: function(item) {
            if (item.click) {
                item.click();
            }

            closeDropdown();
        },
    },
});

var openedDropdown;

var _parseElement = function(element) {
    if (element instanceof Object) {
        if (element.$el) {
            element = element.$el;
        }
    } else if (element instanceof String || typeof(element) === 'string') {
        element = document.getElementById(element);
    } else {
        console.error('Got unexpected type ' + typeof(element) + ' for dropdown element');
        return;
    }

    return element;
};

var clickHndl = function(event) {
    if (!openedDropdown) {
        return;
    }

    var element = event.target;

    while (element) {
        if (element == openedDropdown) {
            return;  // TODO dropdown click
        }

        element = element.parentElement;
    }

    // Click outside the dropdown, close it
    closeDropdown();
};

function closeDropdown() {
    if (!openedDropdown) {
        return;
    }

    document.removeEventListener('click', clickHndl);

    if (openedDropdown.className.indexOf('hidden') < 0) {
        openedDropdown.className = (openedDropdown.className + ' hidden').trim();
    }

    openedDropdown = undefined;
}

function openDropdown(element) {
    element = _parseElement(element);
    if (!element) {
        console.error('Invalid dropdown element');
        return;
    }

    event.stopPropagation();
    closeDropdown();

    if (getComputedStyle(element.parentElement).position === 'relative') {
        // Position the dropdown relatively to the parent
        element.style.left = (window.event.clientX - element.parentElement.offsetLeft + element.parentElement.scrollLeft) + 'px';
        element.style.top = (window.event.clientY - element.parentElement.offsetTop + element.parentElement.scrollTop) + 'px';
    } else {
        // Position the dropdown absolutely on the window
        element.style.left = (window.event.clientX + window.scrollX) + 'px';
        element.style.top = (window.event.clientY + window.scrollY) + 'px';
    }

    document.addEventListener('click', clickHndl);
    element.className = element.className.split(' ').filter(c => c !== 'hidden').join(' ');
    openedDropdown = element;
}

