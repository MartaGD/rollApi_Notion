document.addEventListener('DOMContentLoaded', function() {
    const rollBtn = document.getElementById('roll-btn');
    const resultsContainer = document.getElementById('results-container');
    const diceResults = document.getElementById('dice-results');
    const totalResult = document.getElementById('total-result');
    
    const diceTypes = [4, 6, 8, 10, 12, 20];
    
    // SVG icons for each dice type
    const diceSvgs = {
        4: `<svg viewBox="0 0 24 24" width="16" height="16" fill="#40bfb4" style="display:inline-block;vertical-align:middle;margin-right:4px">
                <path d="M12,2L2,12L12,22L22,12L12,2z"/>
                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="8" font-weight="bold">4</text>
            </svg>`,
        6: `<svg viewBox="0 0 24 24" width="16" height="16" fill="#40bfb4" style="display:inline-block;vertical-align:middle;margin-right:4px">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="8" font-weight="bold">6</text>
            </svg>`,
        8: `<svg viewBox="0 0 24 24" width="16" height="16" fill="#40bfb4" style="display:inline-block;vertical-align:middle;margin-right:4px">
                <path d="M12,2 L4,8 L4,16 L12,22 L20,16 L20,8 z"/>
                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="8" font-weight="bold">8</text>
            </svg>`,
        10: `<svg viewBox="0 0 24 24" width="16" height="16" fill="#40bfb4" style="display:inline-block;vertical-align:middle;margin-right:4px">
                <path d="M12,2 L3,9.5 L7,20 L17,20 L21,9.5 z"/>
                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="8" font-weight="bold">10</text>
             </svg>`,
        12: `<svg viewBox="0 0 24 24" width="16" height="16" fill="#40bfb4" style="display:inline-block;vertical-align:middle;margin-right:4px">
                <path d="M12,2 L5,6 L2,14 L8,21 L16,21 L22,14 L19,6 z"/>
                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="8" font-weight="bold">12</text>
             </svg>`,
        20: `<svg viewBox="0 0 24 24" width="16" height="16" fill="#40bfb4" style="display:inline-block;vertical-align:middle;margin-right:4px">
                <path d="M12,2 L3,9 L5,19 L12,22 L19,19 L21,9 z"/>
                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="8" font-weight="bold">20</text>
             </svg>`
    };
    
    rollBtn.addEventListener('click', function() {
        let total = 0;
        let resultsHTML = '';
        let anyDiceRolled = false;
        
        diceTypes.forEach(type => {
            const count = parseInt(document.getElementById(`d${type}-count`).value) || 0;
            
            if (count > 0) {
                anyDiceRolled = true;
                const results = [];
                
                resultsHTML += `<div class="mb-2"><span class="font-medium">${diceSvgs[type]} D${type} (${count}):</span> `;
                
                for (let i = 0; i < count; i++) {
                    const roll = Math.floor(Math.random() * type) + 1;
                    results.push(roll);
                    total += roll;
                }
                
                resultsHTML += `<span class="dice-result">${results.join(', ')}</span></div>`;
            }
        });
        
        if (anyDiceRolled) {
            diceResults.innerHTML = resultsHTML;
            totalResult.textContent = total;
            resultsContainer.classList.remove('hidden');
        } else {
            alert('Por favor, selecciona al menos un dado para lanzar.');
        }
    });
});