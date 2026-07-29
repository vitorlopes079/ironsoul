import { useState } from "react";

export function AssetImage({ src, alt, className, label }) {
  const [missing, setMissing] = useState(false);
  return <div className={`${className} asset-image ${missing ? "asset-placeholder" : ""}`}>
    {!missing && <img src={src} alt={alt} onError={() => setMissing(true)} />}
    {missing && <span>{label}<small>Add this file to public/assets</small></span>}
  </div>;
}
