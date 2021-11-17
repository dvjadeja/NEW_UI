import Confetti from "react-dom-confetti";

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 300,
  dragFriction: 0.12,
  duration: 6000,
  stagger: 3,
  width: "30px",
  height: "10px",
  perspective: "1000px",
  colors: ["#FBE845", "#DCE25C", "#CC3055", "#67C4D3", "#DB324F"],
};

const CelebrationConfetti = (props) => {
  return <Confetti active={props.active} config={config} />;
};

export default CelebrationConfetti;
