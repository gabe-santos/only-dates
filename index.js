import {
	newItineraryBtn,
	formModal,
	formModalClose,
	formModalSubmit,
	formEventTitle,
	formEventDateStart,
	formEventDateEnd,
	formEventDescription,
} from './src/selectors';
import { openFormModal, closeFormModal } from './src/formModal';
import { updateUI } from './src/uiUpdates';
import { Itinerary } from './src/Itinerary'; // Itinerary Object
import { calendarControl } from './src/calendar';
import { itineraryList, addNewItinerary } from './src/itineraryList';

// Form Modal Code
// Displays popup form when '+ New Itinerary' clicked
newItineraryBtn.onclick = openFormModal;
// Closes form popup when close btn pressed
formModalClose.onclick = closeFormModal;

// Closes form popup when area outside of form window is pressed
window.onclick = e => {
	if (e.target == formModal) closeFormModal();
};

formModalSubmit.onclick = e => {
	e.preventDefault();
	addNewItinerary(
		formEventTitle.value,
		formEventDateStart.value,
		formEventDateEnd.value,
		formEventDescription.value
	);
};

const init = () => {
	addNewItinerary(
		'Create a New Itinerary',
		new Date(),
		new Date(),
		"Click '+ New Itinerary' to the left to get started!"
	);
	updateUI(itineraryList);
};

addEventListener('load', init); // run init on page load
