import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <div style={{ background:"#0A0A0A",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative" }}>
      <div style={{ position:"absolute",top:5,right:5,width:6,height:6,background:"#C2502B",borderRadius:"50%" }} />
      <div style={{ color:"#F2EFE9",fontSize:16,fontWeight:800,letterSpacing:"-0.5px",fontFamily:"sans-serif" }}>FZ</div>
    </div>,
    { ...size }
  );
}
