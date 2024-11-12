import { TypeAnimation } from "react-type-animation";

export default function TypeEffict() {
    return (
        <TypeAnimation
        sequence={[
          '',1000,
          'Easy to use',
          1300,
          'It is Amazing',
          1300,
          'It is Truly Awesome!',
          1300,
          'You Have to Try It!',
          1300,
        ]}
        speed={50}
        style={{ fontSize: '2em' ,color:"#1966d2"}}
        repeat={Infinity}
      />
      );
}