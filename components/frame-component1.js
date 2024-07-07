import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      style={{
        width: "324px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "23.5px",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "20px",
        color: "#000c14",
        fontFamily: "Poppins",
      }}
      className={className}
    >
      <div
        style={{
          width: "88px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 7px",
          boxSizing: "border-box",
        }}
      >
        <b style={{ flex: "1", position: "relative" }}>EMAIL</b>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 5px 0px 7px",
        }}
      >
        <div
          style={{
            flex: "1",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "10px 21px",
          }}
        >
          <div
            style={{
              height: "49px",
              width: "313px",
              position: "relative",
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              boxSizing: "border-box",
              display: "none",
            }}
          />
          <input
            style={{
              width: "172px",
              border: "none",
              outline: "none",
              fontFamily: "Poppins",
              fontSize: "16px",
              backgroundColor: "transparent",
              height: "24px",
              position: "relative",
              color: "rgba(0, 0, 0, 0.7)",
              textAlign: "left",
              display: "inline-block",
              whiteSpace: "nowrap",
              padding: "0",
              zIndex: "1",
            }}
            placeholder="example@gmail.com"
            type="text"
          />
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <b
          style={{
            width: "131px",
            position: "relative",
            display: "inline-block",
            textShadow:
              "1px 0 0 rgba(0, 0, 0, 0.4), 0 1px 0 rgba(0, 0, 0, 0.4), -1px 0 0 rgba(0, 0, 0, 0.4), 0 -1px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          PASSWORD
        </b>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 0px 9px",
            textAlign: "left",
            fontSize: "15px",
            color: "#e86969",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "13px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: "11px 15px 9px 10px",
                gap: "20px",
              }}
            >
              <div
                style={{
                  height: "48px",
                  width: "312px",
                  position: "relative",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(0, 0, 0, 0.4)",
                  boxSizing: "border-box",
                  display: "none",
                }}
              />
              <input
                style={{
                  width: "162px",
                  border: "none",
                  outline: "none",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  backgroundColor: "transparent",
                  height: "24px",
                  position: "relative",
                  color: "rgba(0, 0, 0, 0.7)",
                  textAlign: "left",
                  display: "inline-block",
                  textShadow:
                    "1px 0 0 rgba(0, 0, 0, 0.4), 0 1px 0 rgba(0, 0, 0, 0.4), -1px 0 0 rgba(0, 0, 0, 0.4), 0 -1px 0 rgba(0, 0, 0, 0.4)",
                  padding: "0",
                  zIndex: "1",
                }}
                placeholder="Enter Your Password"
                type="text"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "4px 0px 0px",
                }}
              >
                <img
                  style={{
                    width: "18px",
                    height: "18px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                  alt=""
                  src="/eye-icon.svg"
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ position: "relative", fontWeight: "500" }}>
                Forgot Password?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
