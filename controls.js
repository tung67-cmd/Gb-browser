// GB BROWSER 3.0 // Configuration joystick R36SX / GB350

let selectedIndex = 0;

function getFocusableElements() { return [...document.querySelectorAll( "button:not(:disabled), input:not(:disabled)" )].filter(el => el.offsetParent !== null); }

function selectElement(index) { const elements = getFocusableElements();

if (!elements.length) return;

selectedIndex =
    (index + elements.length) % elements.length;

elements[selectedIndex].focus();


}

function handleJoystickButton(index) { switch (index) {

    case 0: // A
        document.activeElement?.click();
        break;

    case 1: // B
        history.back();
        break;

    case 2: // X
        location.reload();
        break;

    case 3: // Y
        location.href = "index.html";
        break;

    case 4: // L1
        history.back();
        break;

    case 5: // R1
        history.forward();
        break;

    case 6: // SELECT
        document.getElementById("favorites")
            ?.scrollIntoView();
        break;

    case 7: // START
        document.getElementById("address")?.focus();
        break;
}


}

let previousButtons = [];

function readJoystick() { const gamepads = navigator.getGamepads();

for (const pad of gamepads) {
    if (!pad) continue;

    pad.buttons.forEach((button, index) => {
        if (button.pressed && !previousButtons[index]) {
            handleJoystickButton(index);
        }

        previousButtons[index] = button.pressed;
    });

    // Croix directionnelle ou joystick analogique
    if (pad.axes.length >= 2) {
        if (pad.axes[1] < -0.6) {
            selectElement(selectedIndex - 1);
        }

        if (pad.axes[1] > 0.6) {
            selectElement(selectedIndex + 1);
        }
    }
}

requestAnimationFrame(readJoystick);


}

window.addEventListener("gamepadconnected", () => { console.log("Joystick GB350 détecté !"); previousButtons = []; requestAnimationFrame(readJoystick); });

window.GBJoystick = { selectElement };
