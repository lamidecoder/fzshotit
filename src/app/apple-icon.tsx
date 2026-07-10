import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ background:"#0A0A0A",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative" }}>
      <div style={{ position:"absolute",top:18,right:18,width:20,height:20,background:"#C2502B",borderRadius:"50%" }} />
      <div style={{ color:"#F2EFE9",fontSize:72,fontWeight:800,letterSpacing:"-2px",fontFamily:"sans-serif" }}>FZ</div>
    </div>,
    { ...size }
  );
}
