// Description: This script is responsible for fetching the calendar data from the server and rendering the calendar and event list.
document.addEventListener('DOMContentLoaded', function () {
    fetch('/scripts/calendar.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const events = convertTimestamps(data);
            generateCalendar(events);
            populateEventList(events);
        })
        .catch(error => console.error('Error:', error));

    function convertTimestamps(events) {
        return events.map(event => {
            return {
                ...event,
                date: new Date(event.timestamp * 1000)
            };
        });
    }

    function generateCalendar(events) {
        const calendar = document.getElementById('calendar');
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        // Getting the first day of the month
        const firstDay = new Date(currentYear, currentMonth, 1);
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Create calendar header
        const header = document.createElement('div');
        header.classList.add('calendar-header');
        header.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}`;
        calendar.appendChild(header);

        // Generating the days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.textContent = day;

            // Check if it's today
            if (date.toDateString() === currentDate.toDateString()) {
                dayElement.classList.add('today');
            }
            // Check if there's an event for this day
            if (events.some(event => event.date.toDateString() === date.toDateString())) {
                dayElement.classList.add('has-event');
            }

            calendar.appendChild(dayElement);
            addEventsToCalendar(events);
        }
    }

    function addEventsToCalendar(events) {
        const calendarDays = document.querySelectorAll('.calendar-day');
        calendarDays.forEach(dayElement => {
            const day = parseInt(dayElement.textContent, 10);
            const month = new Date().getMonth();
            const year = new Date().getFullYear();
            const event = events.find(e => e.date.getDate() === day && e.date.getMonth() === month && e.date.getFullYear() === year);

            if (event) {
                dayElement.classList.add('has-event');
                dayElement.addEventListener('click', function () {
                    showEventPopup(event, dayElement);
                });
            }
            else {
                dayElement.addEventListener('click', function () {
                    noEventsPopup(dayElement);
                });
            }
        });
    }

    function noEventsPopup(targetElement) {
        // Remove existing popup if any
        const existingPopup = document.querySelector('.popup');
        if (existingPopup) {
            existingPopup.remove();
        }
        // Create popup element
        const noPopup = document.createElement('div');
        noPopup.classList.add('no-event-popup');
        noPopup.classList.add('popup');
        noPopup.innerHTML = `
            <div class="py-3 no-event-header">
                <span class="no-event-close-btn">&times;</span>
            </div>
            <h3>No Events</h3>
            <p>Sorry, there are no events for this day.</p>
        `;
        // Append and position the popup
        document.body.appendChild(noPopup);
        const rect = targetElement.getBoundingClientRect();
        noPopup.style.left = `${rect.left + (rect.width / 2) - (noPopup.offsetWidth / 2)}px`;
        noPopup.style.top = `${rect.top + window.scrollY + rect.height + 5}px`;
        
        const closeButton = noPopup.querySelector('.no-event-close-btn');
        closeButton.addEventListener('click', function () {
            noPopup.remove();
        });

    }

    function showEventPopup(eventData, targetElement) {
        // Remove existing popup if any
        const existingPopup = document.querySelector('.popup');
        if (existingPopup) {
            existingPopup.remove();
        }
        let time;
        // Format the time if it's available
        if (eventData.duration) {
            const options = { hour: '2-digit', minute: '2-digit' };
            const startTime = eventData.date.toLocaleTimeString('en-GB', options);
            const endTime = new Date(eventData.date.getTime() + eventData.duration * 60000).toLocaleTimeString('en-GB', options);
            time = `${startTime} - ${endTime}`;
        }

        // Create popup element
        const popup = document.createElement('div');
        popup.classList.add('event-popup');
        popup.classList.add('popup');
        popup.innerHTML = `
            <div class="py-3 popup-header">
                <span class="popup-close-btn">&times;</span>
            </div>
            <h3>${eventData.title}</h3>
            <p>Date: ${eventData.date.toLocaleDateString()}</p>
            <p>Location: ${eventData.location}</p>
            <p>Time: ${time}</p>
        `;

        // Append and position the popup
        document.body.appendChild(popup);
        const rect = targetElement.getBoundingClientRect();
        popup.style.left = `${rect.left + (rect.width / 2) - (popup.offsetWidth / 2)}px`;
        popup.style.top = `${rect.top + window.scrollY + rect.height + 5}px`; // 5px below the element

        // Close button functionality
        const closeButton = popup.querySelector('.popup-close-btn');
        closeButton.addEventListener('click', function () {
            popup.remove();
        });
    }


    function populateEventList(events) {
        const eventList = document.getElementById('events');
        events.forEach(event => {
            // Skip events that have already passed
            if (event.timestamp < Date.now() / 1000) {
                return;
            }
            // Organise the events by date
            const li = document.createElement('li');
            li.textContent = `${event.title} - ${event.date.toLocaleDateString()}`;
            eventList.appendChild(li);
        });
    }

});