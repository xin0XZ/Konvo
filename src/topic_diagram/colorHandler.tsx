enum Colors {
    Red,
    Blue,
    Green
}

const depthToColor: Record<number, Colors> = {
    1: Colors.Red,
    2: Colors.Green,
    3: Colors.Blue,
}
export default depthToColor;