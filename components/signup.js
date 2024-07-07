import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Signup = ({ className = "" }) => {
  const router = useRouter();

  const onLoginTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <form
      style={{
        margin: "0",
        width: "858px",
        backgroundColor: "#fff",
        border: "1px solid #dbdbdb",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "127px 20px 174px 26px",
        gap: "32px",
        maxWidth: "100%",
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 11px 0px 2px",
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
            textAlign: "left",
          }}
        >
          Create an account
        </h1>
      </div>
      <div
        style={{
          width: "313px",
          height: "49px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          border: "1px solid rgba(0, 0, 0, 0.4)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "12px 11px",
        }}
      >
        <div
          style={{
            height: "49px",
            width: "313px",
            position: "relative",
            borderRadius: "10px",
            backgroundColor: "#fff",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            boxSizing: "border-box",
            display: "none",
          }}
        />
        <input
          style={{
            width: "128px",
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
            padding: "0",
            zIndex: "1",
          }}
          placeholder="Enter Your Email"
          type="text"
        />
      </div>
      <div
        style={{
          width: "320px",
          height: "48px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 5px 0px 2px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            height: "49px",
            flex: "1",
            borderRadius: "10px",
            backgroundColor: "#fff",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "12px 11px",
          }}
        >
          <div
            style={{
              height: "49px",
              width: "313px",
              position: "relative",
              borderRadius: "10px",
              backgroundColor: "#fff",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              boxSizing: "border-box",
              display: "none",
            }}
          />
          <input
            style={{
              width: "204px",
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
              padding: "0",
              zIndex: "1",
            }}
            placeholder="Enter Your Phone Number"
            type="text"
          />
        </div>
      </div>
      <div
        style={{
          width: "312px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 5px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            height: "49px",
            flex: "1",
            borderRadius: "10px",
            backgroundColor: "#fff",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "12px 14px 12px 11px",
            gap: "20px",
          }}
        >
          <div
            style={{
              height: "49px",
              width: "313px",
              position: "relative",
              borderRadius: "10px",
              backgroundColor: "#fff",
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
              padding: "0",
              zIndex: "1",
            }}
            placeholder="Enter Your Password"
            type="text"
          />
          <img
            style={{
              height: "24px",
              width: "24px",
              position: "relative",
              objectFit: "contain",
              zIndex: "1",
            }}
            alt=""
            src="/eye-password-logo@2x.png"
          />
        </div>
      </div>
      <div
        style={{
          width: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "16px",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "12px 20px",
            backgroundColor: "#0e64d2",
            width: "312px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            boxSizing: "border-box",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              position: "relative",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Poppins",
              color: "#fff",
              textAlign: "left",
              display: "inline-block",
              minWidth: "62px",
            }}
          >
            Sign Up
          </div>
        </button>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 0px 2px",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "center",
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
                fontSize: "18px",
                fontFamily: "Poppins",
                color: "rgba(0, 0, 0, 0.8)",
                textAlign: "left",
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
            justifyContent: "flex-start",
            padding: "0px 6px 0px 2px",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              padding: "9px 8px",
              backgroundColor: "#fff",
              flex: "1",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "49px",
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
                objectFit: "cover",
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
              Signup with Google
            </div>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 13px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "9px",
            }}
          >
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                textDecoration: "underline",
                fontWeight: "500",
                fontFamily: "Poppins",
                color: "rgba(0, 0, 0, 0.8)",
                textAlign: "left",
                whiteSpace: "nowrap",
              }}
            >{`Already have an account? `}</div>
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                textDecoration: "underline",
                fontWeight: "500",
                fontFamily: "Poppins",
                color: "#160062",
                textAlign: "left",
                display: "inline-block",
                minWidth: "43px",
                cursor: "pointer",
              }}
              onClick={onLoginTextClick}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

Signup.propTypes = {
  className: PropTypes.string,
};

export default Signup;
