import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const router = useRouter();

  const onSignUpTextClick = useCallback(() => {
    router.push("/desktop1");
  }, [router]);

  return (
    <div
      style={{
        width: "330.7px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        gap: "21px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "18px",
        color: "rgba(0, 0, 0, 0.8)",
        fontFamily: "Poppins",
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0px 9px",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "11px 20px 13px",
            backgroundColor: "#0e64d2",
            flex: "1",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "48px",
              width: "312px",
              position: "relative",
              borderRadius: "5px",
              backgroundColor: "#0e64d2",
              display: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Poppins",
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "left",
              display: "inline-block",
              minWidth: "44px",
              zIndex: "1",
            }}
          >
            Login
          </div>
        </button>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0px 12px 0px 0px",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "18px 0px 0px",
              boxSizing: "border-box",
              minWidth: "75px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "1px",
                position: "relative",
                borderTop: "1px solid rgba(0, 0, 0, 0.5)",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              minWidth: "66px",
            }}
          >
            Or With
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "18px 0px 0px",
              boxSizing: "border-box",
              minWidth: "75px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "1px",
                position: "relative",
                borderTop: "1px solid rgba(0, 0, 0, 0.5)",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0px 11px 9px 7px",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            padding: "9px 6px",
            backgroundColor: "#fff",
            flex: "1",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "52px",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              height: "48px",
              width: "312px",
              position: "relative",
              borderRadius: "10px",
              backgroundColor: "#fff",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              boxSizing: "border-box",
              display: "none",
            }}
          />
          <img
            style={{
              height: "26px",
              width: "26px",
              position: "relative",
              objectFit: "contain",
              minHeight: "26px",
              zIndex: "1",
            }}
            alt=""
            src="/google-logo@2x.png"
          />
          <div
            style={{
              position: "relative",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Poppins",
              color: "rgba(0, 0, 0, 0.6)",
              textAlign: "left",
              zIndex: "1",
            }}
          >
            Login with Google
          </div>
        </button>
      </div>
      <div
        style={{
          width: "304.7px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          fontSize: "16px",
          color: "#0e0e0e",
          fontFamily: "Manrope",
        }}
      >
        <div
          style={{
            flex: "1",
            position: "relative",
            fontWeight: "600",
            flexShrink: "0",
          }}
        >{`Don’t have an account ? `}</div>
        <div
          style={{
            height: "27.9px",
            width: "135.9px",
            position: "relative",
            fontWeight: "600",
            color: "#160062",
            display: "inline-block",
            flexShrink: "0",
            whiteSpace: "nowrap",
            cursor: "pointer",
            zIndex: "1",
            marginLeft: "-6.1px",
          }}
          onClick={onSignUpTextClick}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
