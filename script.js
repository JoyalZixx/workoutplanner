// Get the form and the exercise list elements
const form = document.getElementById('workout-form');
const exerciseList = document.getElementById('exercise-list');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const exerciseName = document.getElementById('exercise-name').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const restTime = document.getElementById('rest-time').value;

    // Create a new exercise item
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <strong>${exerciseName}</strong>
            <p>Sets: ${sets}, Reps: ${reps}, Rest: ${restTime}s</p>
        </div>
        <button class="start-timer">Start Timer</button>
    `;

    // Add functionality to the "Start Timer" button
    const startButton = li.querySelector('.start-timer');
    startButton.addEventListener('click', function() {
        startRestTimer(restTime, startButton);
    });

    // Add the new exercise item to the list
    exerciseList.appendChild(li);

    // Clear the form
    form.reset();
});

// Timer function
function startRestTimer(restTime, button) {
    let timeLeft = restTime;
    button.disabled = true;
    button.textContent = `Resting: ${timeLeft}s`;

    const timerInterval = setInterval(() => {
        timeLeft--;
        button.textContent = `Resting: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            button.textContent = 'Rest Finished';
            button.disabled = false;
        }
    }, 1000);
}
