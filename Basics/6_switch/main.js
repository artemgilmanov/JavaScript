'use strict';

let ein_name = 'Homer';

switch (ein_name) {
  case 'Martin':
    console.log('Hallo Martin!');
    break;
  case 'Anja':
    console.log('Hallo Anja!');
    break;
  case 'Julian':
    console.log('Hallo Julian!');
    break;
  case 'Homer':
    console.log('Hallo Homer!');
    break;
  default:
    console.log('Hi there! Wie heßt Du?');
    break;
}

let essen = 'Pizza';

switch (essen) {
  case 'Nudeln':
  case 'Steake':
    console.log('Das mag ich nicht!');
    break;
  case 'Pizza':
  case 'Pasta':
    console.log('Das mag ich!');
    break;
  default:
    console.log('Was ist das?');
    break;
}
