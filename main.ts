input.onButtonPressed(Button.A, function () {
    if (ServoAngle <= 0) {
        ServoAngle = 0
    } else {
        ServoAngle = ServoAngle - 10
    }
    radio.sendNumber(ServoAngle)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(ServoAngle)
})
input.onButtonPressed(Button.B, function () {
    if (ServoAngle >= 180) {
        ServoAngle = 180
    } else {
        ServoAngle = ServoAngle + 10
    }
    radio.sendNumber(ServoAngle)
})
let ServoAngle = 0
let current_channel = 57
basic.showIcon(IconNames.Happy)
basic.clearScreen()
radio.setGroup(current_channel)
ServoAngle = 90
basic.forever(function () {
	
})
