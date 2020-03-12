import React from "react";
import { svg } from "./SvgSprite.module.scss";

function SvgSprite() {
  return (
    <svg className={svg}>
      <symbol viewBox="0 0 128 128" id="mobilePhone">
        {/* <path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z" /> */}
        <path d="M91,1H37c-2.8,0-5,2.2-5,5v116c0,2.8,2.2,5,5,5h54c2.8,0,5-2.2,5-5V6C96,3.2,93.8,1,91,1z M94,122   c0,1.7-1.3,3-3,3H37c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h54c1.7,0,3,1.3,3,3V122z" />
        <path d="M73,10H55c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S73.6,10,73,10z" />
        <path d="M64,111c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S67.3,111,64,111z M64,121c-2.2,0-4-1.8-4-4s1.8-4,4-4   c2.2,0,4,1.8,4,4S66.2,121,64,121z" />
      </symbol>

      <symbol viewBox="0 0 30 30" id="delivery">
        {/* <path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z" /> */}
        <path d="M15.48 12c-.13.004-.255.058-.347.152l-2.638 2.63-1.625-1.62c-.455-.474-1.19.258-.715.712l1.983 1.978c.197.197.517.197.715 0l2.995-2.987c.33-.32.087-.865-.367-.865zM.5 16h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3C.223 9 0 8.777 0 8.5S.223 8 .5 8zm24 11c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-13-1C10.125 19 9 20.125 9 21.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-5-14C5.678 6 5 6.678 5 7.5v11c0 .822.678 1.5 1.5 1.5h2c.676.01.676-1.01 0-1h-2c-.286 0-.5-.214-.5-.5v-11c0-.286.214-.5.5-.5h13c.286 0 .5.214.5.5V19h-5.5c-.66 0-.648 1.01 0 1h7c.66 0 .654-1 0-1H21v-9h4.227L29 15.896V18.5c0 .286-.214.5-.5.5h-1c-.654 0-.654 1 0 1h1c.822 0 1.5-.678 1.5-1.5v-2.75c0-.095-.027-.19-.078-.27l-4-6.25c-.092-.143-.25-.23-.422-.23H21V7.5c0-.822-.678-1.5-1.5-1.5z" />
      </symbol>

      <symbol viewBox="0 0 512 512" id="cart">
        {/* <path d="M19.029 13h2.971l-.266 1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576 2h4.387l.297-1h-4.396l-.288 1zm2.684-9l-.743 2h-1.929l-3.474 12h-11.239l-4.615-11h14.812l-.564 2h-11.24l2.938 7h8.428l3.432-12h4.194zm-14.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm5.9-7-.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" /> */}
        <path d="M97.7,114.7h43.9l22.6,65.7l12,39.8c0,0,0,0.1,0,0.1l14.8,49.1c0,0.1,0.1,0.2,0.1,0.3l9.1,30.1h-3.5    c-18.1,0-32.8,14.7-32.8,32.8s14.7,32.8,32.8,32.8h16.3c-2.8,4.7-4.5,10.2-4.5,16c0,17.1,13.9,31,31,31s31-13.9,31-31    c0-5.9-1.6-11.3-4.5-16h59.5c-2.8,4.7-4.5,10.2-4.5,16c0,17.1,13.9,31,31,31s31-13.9,31-31c0-5.9-1.6-11.3-4.5-16h13.5    c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5H196.6c-9.8,0-17.8-8-17.8-17.8s8-17.8,17.8-17.8h13.6h39c0,0,0,0,0,0c0,0,0,0,0,0h87    c0,0,0,0,0,0c0,0,0,0,0,0h39c3.3,0,6.2-2.2,7.2-5.3l12-39.8c0-0.1,0-0.1,0-0.2l26.9-89.2c0.7-2.3,0.3-4.7-1.2-6.6s-3.6-3-6-3    h-53.1c0,0,0,0-0.1,0h-68.3c0,0,0,0,0,0s0,0,0,0h-68.3c0,0-0.1,0-0.1,0h-47.7l-22.6-65.8c-1-3-3.9-5.1-7.1-5.1H97.7    c-4.1,0-7.5,3.4-7.5,7.5S93.6,114.7,97.7,114.7z M255.5,381.3c0,8.8-7.2,16-16,16s-16-7.2-16-16s7.2-16,16-16    S255.5,372.5,255.5,381.3z M368.1,381.3c0,8.8-7.2,16-16,16s-16-7.2-16-16s7.2-16,16-16S368.1,372.5,368.1,381.3z M381.8,259.7    h-28.7l6.6-34.2h32.4L381.8,259.7z M337.8,259.7h-37.5v-34.2h44.2L337.8,259.7z M300.3,299.7v-25h34.6l-4.8,25H300.3z     M255.5,299.7l-4.8-25h34.6v25H255.5z M208.3,274.7h27.1l4.8,25h-24.4L208.3,274.7z M300.3,210.5v-25h51.9l-4.8,25H300.3z     M285.3,210.5h-47.1l-4.8-25h51.9V210.5z M285.3,225.5v34.2h-37.5l-6.6-34.2H285.3z M232.5,259.7h-28.7l-10.3-34.2h32.4    L232.5,259.7z M369.8,299.7h-24.4l4.8-25h27.1L369.8,299.7z M396.7,210.5h-34l4.8-25h36.7L396.7,210.5z M218.1,185.5l4.8,25h-34    l-7.5-25H218.1z" />
      </symbol>
    </svg>
  );
}

export default SvgSprite;
