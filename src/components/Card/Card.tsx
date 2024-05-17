import styles from "./Card.module.css";
import { useState } from "react";
import { useScene } from "../../context/SceneContext";

import CardClip from "../CardClip/CardClip";
import CardImage from "../CardImage/CardImage";
import { useHover } from "../../context/HoverContext";
import { useScreenMode } from "../../context/ScreenContext";
import { useSwirlDeg } from "../../context/SwirlContext";
import { useEffectState } from "../../context/EffectStateContext";
import { useFilter } from "../../context/FilterContext";

const Card = () => {
  const [isPictureMode, setIsPictureMode] = useState<boolean>(false);

  const { setIsHovered } = useHover();
  const { scene, setScene } = useScene();
  const { screenMode } = useScreenMode();
  const { swirlState } = useSwirlDeg();
  const { effectState } = useEffectState();
  const { filterState } = useFilter();

  const [rotateCardDeg, setRotateCardDeg] = useState<number>(0);
  // const rotateDegList: number[] = [
  //   -90, -270, -450, -630, -810, -990, -1170, -1350,
  // ];

  // Cardにマウスの左クリック
  const changeScene = () => {
    switch (scene) {
      case "card-stand":
        return setScene("card-cg");
      case "card-cg":
        if (rotateCardDeg <= -1350) {
          setRotateCardDeg(0);
        } else {
          setRotateCardDeg((prev) => prev - 90);
        }
        break;
      default:
        console.log("test");
    }
  };

  // Cardにマウスの右クリック
  const resetScene = (e: any) => {
    e.preventDefault();
    switch (scene) {
      case "card-stand":
        setScene("card-video");
        break;
      case "card-cg":
        setScene("card-stand");
        setRotateCardDeg(0);
        setIsPictureMode(false);
        break;
      default:
        console.log("test");
    }
  };

  return (
    <div
      className={`${styles.card}
      ${scene === "card-cg" ? styles.sceneCG : ""}
      ${screenMode === "cardMode" && styles.cardMode}
      ${screenMode === "mangaMode" && styles.mangaMode}
      ${screenMode === "cgMode" && styles.cgMode}`}
      onMouseEnter={() => setIsHovered({ cardHover: true, iconHover: false })}
      onMouseLeave={() => setIsHovered({ cardHover: false, iconHover: false })}
      onClick={changeScene}
      onContextMenu={resetScene}
      style={{
        transform: `rotate(${rotateCardDeg}deg) rotateY(${swirlState.cardSwirlDeg}deg)`,
        overflow:
          (isPictureMode && effectState.mirrorEffect) || scene === "card-stand"
            ? "hidden"
            : undefined,
        width: isPictureMode && effectState.mirrorEffect ? "100%" : undefined,
        imageRendering: effectState.pixelEffect ? "pixelated" : undefined,
        filter: effectState.filterEffect.targetCard
          ? `drop-shadow(0 0 5px #86fff3) drop-shadow(0 0 15px #fc3eff) opacity(${filterState.opacity}%) brightness(${filterState.brightness}%) contrast(${filterState.contrast}%) grayscale(${filterState.grayscale}%) hue-rotate(${filterState.hueRotate}deg) invert(${filterState.invert}%) saturate(${filterState.saturate}%) sepia(${filterState.sepia}%)`
          : undefined,
      }}
    >
      <CardImage
        scene={scene}
        isPictureMode={isPictureMode}
        setIsPictureMode={setIsPictureMode}
      />

      <CardClip scene={scene} />
    </div>
  );
};

export default Card;
