import CloudIcon from "@mui/icons-material/Cloud";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import styles from "./AnimatedSVG.module.css";

const AnimatedSVG = () => {
  const cloudArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.animationHolder}>
      <div className={styles.animatedSvg}>
        <LocalAirportIcon
          className={styles.icon}
          fontSize="large"
          sx={{
            width: 70,
            height: 70,
            fill: "#2f291e",
          }}
        ></LocalAirportIcon>
      </div>
      {cloudArr.map((el, index) => {
        return (
          <CloudIcon
            key={index}
            style={{
              top: index % 2 === 0 ? "0" : "50%",
              transform: `translateX(${el * 200}%)`,
            }}
            className={styles.cloud}
            fontSize="large"
            sx={{
              fill: "#ffffff",
            }}
          ></CloudIcon>
        );
      })}
    </div>
  );
};

export default AnimatedSVG;
