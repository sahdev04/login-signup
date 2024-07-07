import Signup from "../components/signup";

const Desktop1 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1024px",
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <main
        style={{
          marginTop: "-150px",
          marginLeft: "-380px",
          width: "2200px",
          backgroundColor: "#8bffe3",
          overflow: "hidden",
          flexShrink: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "250px 426px 249px",
          boxSizing: "border-box",
          maxWidth: "153%",
        }}
      >
        <Signup />
      </main>
    </div>
  );
};

export default Desktop1;
