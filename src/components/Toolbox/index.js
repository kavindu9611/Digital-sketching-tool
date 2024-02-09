import StyleSheet from "./index.module.css";
import { COLORS } from "@/constants";

const Toolbox = () => {
  const updateBrushSize = (e) => {};
  return (
    <div className={StyleSheet.toolboxContainer}>
      <div className={StyleSheet.toolItem}>
        <h4 className={StyleSheet.toolText}>Color</h4>
        <div className={StyleSheet.itemContainer}>
          <div
            className={StyleSheet.colorBox}
            style={{ backgroundColor: COLORS.BLACK }}
          />
          <div
            className={StyleSheet.colorBox}
            style={{ backgroundColor: COLORS.RED }}
          />
          <div
            className={StyleSheet.colorBox}
            style={{ backgroundColor: COLORS.GREEN }}
          />
          <div
            className={StyleSheet.colorBox}
            style={{ backgroundColor: COLORS.BLUE }}
          />
          <div
            className={StyleSheet.colorBox}
            style={{ backgroundColor: COLORS.ORANGE }}
          />
          <div
            className={StyleSheet.colorBox}
            style={{ backgroundColor: COLORS.YELLOW }}
          />
        </div>
      </div>

      <div className={StyleSheet.toolItem}>
        <h4 className={StyleSheet.toolText}>Brush Size</h4>
        <div className={StyleSheet.itemContainer}>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
};
export default Toolbox;
