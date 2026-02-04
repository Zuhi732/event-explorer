import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // নতুন কালার প্যালেট (Neon Theme)
      colors: {
        neonPink: "#ff007f", // উজ্জ্বল গোলাপি
        neonBlue: "#00d4ff", // উজ্জ্বল নীল
        deepDark: "#0a0f1e", // খুব গাঢ় ব্যাকগ্রাউন্ড
        cardDark: "#12182b", // কার্ডের ব্যাকগ্রাউন্ড
      },
      // কাস্টম শ্যাডো (Glow ইফেক্টের জন্য)
      boxShadow: {
        "neon-glow":
          "0 0 15px rgba(255, 0, 127, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)",
      },
    },
  },
  // প্লাগিন হিসেবে DaisyUI ব্যবহার করা হলো
  plugins: [daisyui],

  // DaisyUI এর ডার্ক থিম কনফিগারেশন
  daisyui: {
    themes: ["dark"],
  },
};
