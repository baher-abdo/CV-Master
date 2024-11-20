import { TypeAnimation } from "react-type-animation";

export default function TypeEffict() {
    return (
        <TypeAnimation
        sequence={[
          '',100,
          'Easy to use',
          1900,
          'It is Amazing',
          1900,
          'It is Truly Awesome!',
          1900,
          'You Have to Try It!',
          1900,
        ]}
        speed={70}
        style={{ fontSize: '2em'}}
        repeat={Infinity}
      />
      );
}