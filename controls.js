for (const gamepad of gamepads) {
    if (!gamepad) continue;

    gamepad.buttons.forEach((button, index) => {
        const pressed = button.pressed;

        if (pressed && !previousButtons[index]) {
            handleButton(index);
        }

        previousButtons[index] = pressed;
    });
}

requestAnimationFrame(readGamepad);
