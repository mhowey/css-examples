export default function GridPage() {
  const style = {
    gridBox: { border: "1px solid lime", minWidth: "100px" },
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={style.gridBox}>One</div>
      <div style={style.gridBox}>Two</div>
      <div style={style.gridBox}>Three</div>
      <div style={style.gridBox}>Four</div>
      <div style={style.gridBox}>Five</div>
      <div style={style.gridBox}>Six</div>
      <div style={style.gridBox}>Seven</div>
      <div style={style.gridBox}>Eight</div>
      <div style={style.gridBox}>Nine</div>
    </div>
  );
}
