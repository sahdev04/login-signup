import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const Desktop = () => {
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
          marginLeft: "-394px",
          width: "1834px",
          backgroundColor: "#8bffe3",
          overflow: "hidden",
          flexShrink: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "250px 60px 249px",
          boxSizing: "border-box",
          maxWidth: "128%",
        }}
      >
        <form
          style={{
            margin: "0",
            backgroundColor: "#fff",
            border: "1px solid #dbdbdb",
            boxSizing: "border-box",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "82px 99px 147px 258px",
            gap: "37px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 0px 14px",
            }}
          >
            <h1
              style={{
                margin: "0",
                position: "relative",
                fontSize: "32px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#000",
                textAlign: "center",
              }}
            >
              Hi, Welcome Back! 👋
            </h1>
          </div>
          <FrameComponent1 />
          <FrameComponent />
        </form>
      </main>
    </div>
  );
};

export default Desktop;
