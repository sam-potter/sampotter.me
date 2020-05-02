import css from "styled-jsx/css";

export default css.global`
  :root {
    // Colours
    --background: #f0f2f5;
    --primary: #0070f3;
    --primary-faded: rgba(0, 112, 243, 0.1);

    // Typography
    --text-primary: #111;
    --text-muted: #666;

    // Shadows
    --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);

    // Misc
    --padding-mobile: 20px;
    --blur-background: rgba(255, 255, 255, 0.7);
    --blur-filter: blur(5px);
  }
`;
