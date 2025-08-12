// Best of 3 scoreboard logic
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const messageH2 = document.querySelector('#message h2');
let userScore = 0;
let computerScore = 0;
let finished = false;

function getWinner(id) {
    if (id.includes('rock-paper') || id.includes('paper-scissors') || id.includes('scissors-rock')) return 'user';
    if (id.includes('rock-scissors') || id.includes('paper-rock') || id.includes('scissors-paper')) return 'computer';
    return 'draw';
}

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function(e) {
        if (finished) return;
        const winner = getWinner(e.target.id);
        if (winner === 'user') userScore++;
        else if (winner === 'computer') computerScore++;
        userScoreSpan.textContent = userScore;
        computerScoreSpan.textContent = computerScore;
        if (userScore === 2 || computerScore === 2) {
            finished = true;
                    if (userScore === 2) {
                        messageH2.textContent = 'You win the best of 3!';
                        setTimeout(() => {
                            const alertDiv = document.createElement('div');
                            alertDiv.textContent = '🎉 You won!';
                            alertDiv.className = 'win-alert';
                            document.body.appendChild(alertDiv);
                            setTimeout(() => {
                                alertDiv.remove();
                            }, 2000);
                        }, 300);
                    } else {
                        messageH2.textContent = 'Computer wins the best of 3!';
                    }
        }
    });
});

document.querySelector('form').addEventListener('reset', function() {
    userScore = 0;
    computerScore = 0;
    finished = false;
    userScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    messageH2.textContent = '';
});
