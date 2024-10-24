import { LucideProps } from "lucide-react";

export const Icons = {
  subLogo: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M220 240H260V320H220V240Z" />
      <path d="M160 240V200H320V240H160Z" />
      <path d="M280 0H320V160H280V0Z" />
      <path d="M0 0H40V160H0V0Z" />
      <path d="M0 160H40V320H0V160Z" />
      <path d="M40 320V280H160V320H40Z" />
      <path d="M160 40V0H280V40H160Z" />
      <path d="M40 40V0H160V40H40Z" />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 750 1574" fill="none">
      <rect x="75" y="887" width="200" height="600" rx="100" />
      <rect x="475" y="887" width="200" height="600" rx="100" />
      <rect
        x="75"
        y="287"
        width="200"
        height="600"
        rx="100"
        transform="rotate(-90 75 287)"
      />
      <rect
        x="75"
        y="687"
        width="200"
        height="600"
        rx="100"
        transform="rotate(-90 75 687)"
      />
    </svg>
  ),
  logoHorizontal: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 1730 670" fill="#FFF">
      <rect
        x="35"
        y="235"
        width="200"
        height="600"
        rx="100"
        transform="rotate(-90 35 235)"
      />
      <rect x="765" y="35" width="200" height="600" rx="100" />
      <rect x="1165" y="35" width="200" height="600" rx="100" />
      <rect
        x="35"
        y="635"
        width="200"
        height="600"
        rx="100"
        transform="rotate(-90 35 635)"
      />
    </svg>
  ),
  instagram: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 48 48">
      <path d="M17,43h14c5.523,0,10-4.477,10-10v-2H7v2C7,38.523,11.477,43,17,43z" />
      <path
        fill="#FFFFFF"
        d="M32,40H16c-4.418,0-8-3.582-8-8V16c0-4.418,3.582-8,8-8h16c4.418,0,8,3.582,8,8v16
	C40,36.418,36.418,40,32,40z"
      />
      <path
        d="M32,41H16c-4.962,0-9-4.038-9-9V16c0-4.962,4.038-9,9-9h16c4.962,0,9,4.038,9,9v16C41,36.962,36.962,41,32,41z M16,9
	c-3.86,0-7,3.14-7,7v16c0,3.86,3.14,7,7,7h16c3.86,0,7-3.14,7-7V16c0-3.86-3.14-7-7-7H16z"
      />
      <path
        d="M24,15c-4.962,0-9,4.038-9,9s4.038,9,9,9s9-4.038,9-9S28.962,15,24,15z M24,31c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7
	S27.86,31,24,31z"
      />
      <circle cx="33.5" cy="14.5" r="1.5" />
    </svg>
  ),
  whatsapp: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 48 48">
      <rect x="-491" y="-628" fill="#fff" width="688" height="782" />
      <path
        d="M42.893,24C41.89,14.46,33.801,7,24,7C13.523,7,5,15.523,5,26c0,2.975,0.706,5.93,2.047,8.577L4.534,42H4v2
	c0,1.103,0.897,2,2,2c0.281,0,0.391-0.032,0.798-0.15l9.004-2.725C18.389,44.369,21.145,45,24,45c10.477,0,19-8.523,19-19v-2H42.893
	z"
      />
      <path
        fill="#FFFFFF"
        d="M24,6C14.059,6,6,14.059,6,24c0,3.072,0.773,5.962,2.131,8.493L5.25,41C5,41.875,5,41.799,5,42
	c0,0.552,0.448,1,1,1c0.181,0,0.125,0,1-0.25l8.89-2.696C18.329,41.289,21.079,42,24,42c9.941,0,18-8.059,18-18
	C42,14.059,33.941,6,24,6z"
      />
      <path
        d="M29.241,34.313c-0.913,0-2.313-0.232-5.192-1.367c-3.126-1.233-6.2-3.914-8.654-7.549l-0.081-0.118
	c-0.658-0.881-2.18-3.181-2.18-5.619c0-2.631,1.314-4.033,1.876-4.632l0.088-0.095C15.868,14.091,16.775,14,17.13,14
	c0.38,0.004,0.697,0,0.977,0.013c0.661,0.026,1.416,0.217,1.96,1.428c0.26,0.577,0.7,1.663,1.042,2.507
	c0.216,0.531,0.389,0.96,0.442,1.074c0.298,0.593,0.312,1.181,0.035,1.733l-0.066,0.134c-0.13,0.267-0.266,0.543-0.554,0.88
	l-0.241,0.289c-0.17,0.207-0.342,0.412-0.493,0.57c0.397,0.656,1.237,1.912,2.4,2.949c1.43,1.274,2.655,1.807,3.313,2.093
	c0.138,0.06,0.252,0.11,0.34,0.153c0.39-0.451,1.102-1.303,1.346-1.669c0.781-1.167,1.86-0.777,2.268-0.629
	c0.582,0.211,3.399,1.612,3.427,1.626l0.261,0.128c0.427,0.207,0.829,0.401,1.08,0.821c0.397,0.664,0.175,2.102-0.2,3.156
	c-0.545,1.529-2.881,2.855-4.13,2.97l-0.235,0.025C29.848,34.281,29.577,34.313,29.241,34.313z M17.288,16c-0.031,0-0.063,0-0.093,0
	c-0.115,0-0.376,0.014-0.623,0.284l-0.104,0.111c-0.467,0.497-1.335,1.424-1.335,3.264c0,1.891,1.361,3.858,1.778,4.416
	c0.028,0.038,0.073,0.104,0.14,0.201c2.231,3.304,4.977,5.722,7.731,6.808c3.469,1.368,4.364,1.265,5.086,1.182l0.286-0.031
	c0.628-0.057,2.189-0.984,2.426-1.649c0.219-0.611,0.286-1.136,0.296-1.429c-0.05-0.023-0.104-0.048-0.161-0.076l-0.289-0.142
	c-0.654-0.329-2.86-1.406-3.212-1.534c-0.005-0.001-0.009-0.003-0.014-0.005c-0.453,0.629-1.315,1.634-1.525,1.873
	c-0.409,0.47-1.134,0.915-2.251,0.356c-0.068-0.035-0.161-0.074-0.276-0.124c-0.707-0.308-2.179-0.947-3.848-2.436
	c-1.502-1.338-2.528-2.968-2.9-3.606c-0.449-0.768-0.325-1.509,0.371-2.203c0.123-0.123,0.265-0.298,0.408-0.473l0.268-0.32
	c0.122-0.143,0.167-0.235,0.276-0.457l0.041-0.083c-0.094-0.209-0.281-0.666-0.51-1.229c-0.332-0.82-0.761-1.877-1.013-2.438l0,0
	c-0.086-0.191-0.146-0.261-0.16-0.274c0.022,0.024-0.017,0.024-0.06,0.024C17.793,16.001,17.543,16,17.288,16z M19.785,19.973h0.01
	H19.785z M19.797,19.86C19.797,19.86,19.797,19.86,19.797,19.86L19.797,19.86z M18.08,15.984L18.08,15.984L18.08,15.984z"
      />
      <path
        d="M6,44c-1.103,0-2-0.897-2-2c0-0.29,0.032-0.397,0.137-0.754l0.151-0.521l2.759-8.148C5.706,29.93,5,26.975,5,24
	C5,13.523,13.523,5,24,5s19,8.523,19,19s-8.523,19-19,19c-2.855,0-5.611-0.631-8.198-1.875L6.798,43.85C6.391,43.968,6.281,44,6,44z
	 M24,7C14.626,7,7,14.626,7,24c0,2.792,0.695,5.565,2.012,8.021c0.131,0.244,0.155,0.531,0.066,0.793l-3.023,8.999
	c-0.033,0.114-0.053,0.178-0.063,0.223c0.021-0.038,0.098-0.063,0.247-0.105l0.487-0.142l8.874-2.691
	c0.247-0.073,0.512-0.052,0.742,0.064C18.75,40.382,21.327,41,24,41c9.374,0,17-7.626,17-17S33.374,7,24,7z"
      />
    </svg>
  ),
  gmail: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 48 48" baseProfile="basic">
      <path d="M43.247,20.475c-0.098-0.462-0.505-0.793-0.977-0.793l-17.906-0.027c0,0-0.001,0-0.001,0c-0.265,0-0.519,0.105-0.707,0.292	c-0.188,0.188-0.293,0.442-0.293,0.708v9.262c0,0.552,0.448,1,1,1h7.669c-1.77,2.255-4.451,3.544-7.669,3.544	c-5.433,0-9.908-4.16-10.414-9.46c0.506-5.3,4.981-9.46,10.414-9.46c2.486,0,4.9,0.896,6.798,2.521	c0.397,0.34,0.989,0.318,1.358-0.052l5.347-5.347c0.193-0.193,0.299-0.457,0.292-0.73c-0.006-0.273,0.006-1.727,0-2	c-0.006-0.273-0.124-0.532-0.326-0.716C34.139,5.853,29.356,4,24.362,4C13.332,4,4.358,12.972,4.358,24c0,0.338,0,1.662,0,2	c0,11.028,8.974,20,20.004,20c6.393,0,11.562-2.207,14.948-6.383c3.332-4.11,4.511-9.561,4.312-14.062	C43.706,23.724,43.566,21.986,43.247,20.475z" />
      <path
        fill="#fff"
        d="M24.362,20.654v7.262h10.343c-1.354,4.399-5.028,7.544-10.343,7.544 c-6.332,0-11.465-5.133-11.465-11.46s5.133-11.46,11.465-11.46c2.845,0,5.443,1.044,7.449,2.762l5.347-5.347 C33.78,6.878,29.29,5,24.362,5C13.869,5,5.358,13.506,5.358,24s8.511,19,19.005,19c16.616,0,19.47-14.916,17.906-22.319 L24.362,20.654z"
      />
      <path d="M24.362,44c-11.03,0-20.004-8.972-20.004-20S13.332,4,24.362,4c4.994,0,9.777,1.853,13.469,5.216 c0.202,0.184,0.32,0.443,0.326,0.716c0.006,0.273-0.099,0.537-0.292,0.73l-5.347,5.347c-0.369,0.37-0.961,0.392-1.358,0.052 c-1.897-1.626-4.312-2.521-6.798-2.521c-5.771,0-10.465,4.692-10.465,10.46s4.694,10.46,10.465,10.46 c4.08,0,7.319-2.046,8.899-5.544h-8.899c-0.552,0-1-0.448-1-1v-7.262c0-0.266,0.105-0.52,0.293-0.708 c0.188-0.188,0.441-0.292,0.707-0.292c0,0,0.001,0,0.001,0l17.906,0.027c0.472,0,0.879,0.332,0.977,0.793 c1.025,4.852,0.205,12.034-3.937,17.143C35.924,41.793,30.755,44,24.362,44z M24.362,6C14.435,6,6.358,14.075,6.358,24 s8.077,18,18.004,18c5.852,0,10.358-1.898,13.394-5.643c3.509-4.327,4.364-10.328,3.679-14.678l-16.073-0.024v5.261h9.343 c0.317,0,0.616,0.151,0.804,0.406c0.189,0.255,0.245,0.585,0.151,0.888c-1.566,5.089-5.896,8.25-11.299,8.25 c-6.873,0-12.465-5.589-12.465-12.46s5.592-12.46,12.465-12.46c2.654,0,5.238,0.855,7.372,2.425l3.955-3.955 C32.488,7.417,28.506,6,24.362,6z" />
    </svg>
  ),
  thili: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 0 120 304"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M51.667 17.3225H68.3337V50.6549H51.667V17.3225Z" fill="black" />
      <path d="M26.667 17.3225V0.65625H93.3337V17.3225H26.667Z" fill="black" />
      <line
        x1="52.0648"
        y1="92.3213"
        x2="52.0648"
        y2="50.6557"
        stroke="url(#paint0_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="67.8988"
        y1="92.3218"
        x2="67.8988"
        y2="50.6562"
        stroke="url(#paint1_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="43.3145"
        y1="83.5721"
        x2="76.6478"
        y2="83.5721"
        stroke="url(#paint2_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <path
        d="M59.1778 102.322H75.8445V185.653H59.1778V102.322Z"
        fill="black"
      />
      <path
        d="M9.17773 102.322H25.8444V135.655H9.17773V102.322Z"
        fill="black"
      />
      <path
        d="M42.5111 152.321V135.655H59.1778V152.321H42.5111Z"
        fill="black"
      />
      <line
        x1="0.823242"
        y1="136.17"
        x2="42.49"
        y2="136.17"
        stroke="url(#paint3_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="9.57064"
        y1="193.986"
        x2="9.57064"
        y2="135.654"
        stroke="url(#paint4_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="0.823242"
        y1="151.903"
        x2="42.49"
        y2="151.903"
        stroke="url(#paint5_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="25.4066"
        y1="193.985"
        x2="25.4066"
        y2="135.653"
        stroke="url(#paint6_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="0.823242"
        y1="185.235"
        x2="34.1566"
        y2="185.235"
        stroke="url(#paint7_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <path d="M94.1953 102.322H110.862V152.32H94.1953V102.322Z" fill="black" />
      <line
        x1="94.5921"
        y1="193.986"
        x2="94.5921"
        y2="152.321"
        stroke="url(#paint8_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="110.427"
        y1="193.986"
        x2="110.427"
        y2="152.321"
        stroke="url(#paint9_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="85.8438"
        y1="185.237"
        x2="119.177"
        y2="185.237"
        stroke="url(#paint10_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <path
        d="M17.5117 211.986H34.1784V261.985H17.5117V211.986Z"
        fill="black"
      />
      <path
        d="M50.8451 295.317V278.651H67.5118V295.317H50.8451Z"
        fill="black"
      />
      <line
        x1="17.9017"
        y1="303.651"
        x2="17.9017"
        y2="261.985"
        stroke="url(#paint11_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="33.7376"
        y1="303.651"
        x2="33.7376"
        y2="261.985"
        stroke="url(#paint12_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="9.1543"
        y1="294.901"
        x2="50.821"
        y2="294.901"
        stroke="url(#paint13_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="9.1543"
        y1="279.068"
        x2="50.821"
        y2="279.068"
        stroke="url(#paint14_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <rect
        x="85.8486"
        y="245.652"
        width="16.6667"
        height="49.9987"
        fill="black"
      />
      <line
        x1="86.2601"
        y1="245.652"
        x2="86.2601"
        y2="203.987"
        stroke="url(#paint15_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="102.095"
        y1="245.652"
        x2="102.095"
        y2="203.987"
        stroke="url(#paint16_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <line
        x1="77.5117"
        y1="211.903"
        x2="110.845"
        y2="211.903"
        stroke="url(#paint17_linear_392_320)"
        strokeOpacity="0.2"
        strokeWidth="0.833322"
        strokeDasharray="2.5 2.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_392_320"
          x1="52.9814"
          y1="50.6557"
          x2="52.9814"
          y2="92.3213"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.95" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_392_320"
          x1="68.8154"
          y1="50.6562"
          x2="68.8154"
          y2="92.3218"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.95" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_392_320"
          x1="43.3145"
          y1="84.4888"
          x2="76.6478"
          y2="84.4888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_392_320"
          x1="0.823242"
          y1="137.087"
          x2="42.49"
          y2="137.087"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_392_320"
          x1="10.4873"
          y1="193.986"
          x2="10.4873"
          y2="135.654"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_392_320"
          x1="0.823242"
          y1="152.82"
          x2="42.49"
          y2="152.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_392_320"
          x1="26.3232"
          y1="193.985"
          x2="26.3232"
          y2="135.653"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_392_320"
          x1="0.823242"
          y1="186.152"
          x2="34.1566"
          y2="186.152"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_392_320"
          x1="95.5088"
          y1="193.986"
          x2="95.5088"
          y2="152.321"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_392_320"
          x1="111.344"
          y1="193.986"
          x2="111.344"
          y2="152.321"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_392_320"
          x1="85.8438"
          y1="186.154"
          x2="119.177"
          y2="186.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_392_320"
          x1="18.8184"
          y1="261.985"
          x2="18.8184"
          y2="303.651"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.95" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_392_320"
          x1="34.6543"
          y1="261.985"
          x2="34.6543"
          y2="303.651"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.95" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_392_320"
          x1="9.1543"
          y1="295.818"
          x2="50.821"
          y2="295.818"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_392_320"
          x1="9.1543"
          y1="279.984"
          x2="50.821"
          y2="279.984"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_392_320"
          x1="87.1768"
          y1="203.987"
          x2="87.1768"
          y2="245.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_392_320"
          x1="103.012"
          y1="203.987"
          x2="103.012"
          y2="245.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.05" stopOpacity="0.3" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_392_320"
          x1="77.5117"
          y1="212.82"
          x2="110.845"
          y2="212.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  newSign: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 0 490 490"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M317.887 223.827C308.453 230.486 300.767 238.998 294.81 249.319V128.681C294.81 113.426 281.789 102.623 267.289 102.623C252.632 102.623 240.918 113.574 240.918 128.681V460.264C240.918 475.17 252.146 487.5 267.001 487.5C281.629 487.5 294.81 475.399 294.81 460.264V340.117C294.81 312.172 300.877 290.913 314.849 275.854C328.862 260.751 348.087 253.095 372.837 253.095C393.663 253.095 408.728 260.283 418.524 274.401L418.546 274.431L418.568 274.461C428.839 288.359 434.184 309.904 434.184 339.528V410.202C434.184 425.189 446.064 437.439 460.842 437.439C475.62 437.439 487.5 425.189 487.5 410.202V325.393C487.5 289.279 478.395 258.221 459.894 236.047C441.704 213.783 416.017 202.745 383.191 202.745C357.325 202.745 335.539 210.979 317.887 223.827ZM146.011 98.6442H148.511C146.011 98.6442 146.011 98.6453 146.011 98.6476V98.6578V98.6747V98.6984V98.7287V98.7657V98.8094V98.8597V98.9166V98.9801V99.0501V99.1266V99.2096V99.2991V99.3951V99.4974V99.6061V99.7212V99.8427V99.9704V100.104V100.245V100.391V100.544V100.703V100.868V101.039V101.216V101.4V101.589V101.785V101.986V102.194V102.407V102.626V102.851V103.083V103.319V103.562V103.811V104.065V104.325V104.591V104.862V105.139V105.422V105.71V106.004V106.304V106.609V106.919V107.235V107.557V107.884V108.216V108.553V108.896V109.245V109.598V109.957V110.321V110.691V111.065V111.445V111.83V112.22V112.615V113.015V113.42V113.831V114.246V114.666V115.091V115.521V115.956V116.396V116.84V117.29V117.744V118.203V118.666V119.135V119.608V120.085V120.568V121.055V121.546V122.042V122.543V123.048V123.557V124.071V124.589V125.112V125.639V126.171V126.706V127.246V127.791V128.339V128.892V129.449V130.01V130.575V131.145V131.718V132.295V132.877V133.462V134.052V134.645V135.243V135.844V136.449V137.058V137.671V138.287V138.908V139.532V140.159V140.791V141.426V142.065V142.707V143.353V144.003V144.656V145.312V145.972V146.636V147.303V147.973V148.647V149.324V150.004V150.688V151.375V152.065V152.759V153.455V154.155V154.858V155.564V156.273V156.986V157.701V158.419V159.14V159.865V160.592V161.322V162.055V162.791V163.529V164.271V165.015V165.762V166.512V167.264V168.02V168.777V169.538V170.301V171.066V171.834V172.605V173.378V174.154V174.932V175.712V176.495V177.281V178.068V178.858V179.65V180.445V181.241V182.04V182.841V183.644V184.45V185.257V186.067V186.878V187.692V188.508V189.325V190.145V190.966V191.79V192.615V193.442V194.271V195.102V195.934V196.768V197.604V198.442V199.281V200.122V200.965V201.809V202.655V203.502V204.351V205.201V206.053V206.906V207.76V208.616V209.474V210.332V211.192V212.053V212.916V213.779V214.644V215.51V216.377V217.246V218.115V218.985V219.857V220.729V221.603V222.477V223.353V224.229V225.106V225.984V226.863V227.743V228.623V229.505V230.387V231.269V232.153V233.037V233.921V234.807V235.692V236.579V237.466V238.353V239.241V240.129V241.018V241.907V242.797V243.686V244.577V245.467V246.358V247.249V248.14V249.031V249.923V250.814V251.706V252.598V253.49V254.382V255.273V256.165V257.057V257.949V258.841V259.732V260.624V261.515V262.406V263.297V264.187V265.077V265.967V266.857V267.746V268.635V269.523V270.411V271.299V272.186V273.073V273.959V274.844V275.729V276.613V277.497V278.38V279.262V280.143V281.024V281.904V282.783V283.661V284.539V285.416V286.291V287.166V288.04V288.913V289.785V290.655V291.525V292.394V293.261V294.128V294.993V295.857V296.72V297.581V298.442V299.301V300.159V301.015V301.87V302.723V303.576V304.426V305.276V306.123V306.97V307.814V308.657V309.499V310.339V311.177V312.013V312.848V313.681V314.513V315.342V316.17V316.996V317.82V318.642V319.462V320.28V321.097V321.911V322.723V323.534V324.342V325.148V325.952V326.754V327.553V328.351V329.146V329.939V330.729V331.518V332.304V333.087V333.869V334.648V335.424V336.198V336.969V337.738V338.505V339.269V340.03V340.789V341.545V342.298V343.049V343.797V344.542V345.284V346.024V346.761V347.495V348.226V348.954V349.679V350.401V351.121V351.837V352.55V353.26V353.967V354.671V355.372V356.07V356.765V357.456V358.144V358.829V359.51V360.188V360.863V361.535V362.203V362.868V363.529V364.186V364.841V365.491V366.139V366.782V367.422V368.059V368.691V369.32V369.946V370.567V371.185V371.799V372.409V373.016V373.618V374.217V374.812V375.402V375.989V376.572V377.151V377.725V378.296V378.863V379.425V379.984V380.538V381.088V381.633V382.175V382.712V383.245V383.774V384.298V384.818V385.333V385.844V386.35V386.853V387.35V387.843V388.331V388.815V389.294V389.769V390.239V390.704V391.165V391.62V392.071V392.518V392.959V393.395V393.827V394.254V394.676V395.093V395.504V395.911V396.313V396.71V397.102V397.488V397.87V398.246V398.617V398.983V399.344V399.699V400.049V400.394V400.733V401.067V401.396V401.719V402.037V402.35V402.656V402.958V403.254V403.544V403.828V404.107V404.381V404.648V404.91V405.166V405.417V405.662V405.9V406.133V406.361V406.582V406.797V407.007V407.21V407.408V407.599V407.784V407.964V408.137V408.304V408.465V408.62V408.769V408.911V409.047V409.177V409.3V409.418V409.529V409.633V409.731V409.823V409.908C146.011 425.294 158.798 437.733 173.82 437.733C189.031 437.733 199.903 425.393 199.903 410.202V409.535V408.868V408.202V407.537V406.872V406.207V405.544V404.88V404.218V403.556V402.894V402.234V401.573V400.914V400.255V399.596V398.938V398.281V397.624V396.968V396.312V395.657V395.002V394.348V393.695V393.042V392.39V391.738V391.087V390.436V389.786V389.136V388.487V387.838V387.19V386.543V385.896V385.249V384.604V383.958V383.313V382.669V382.025V381.382V380.739V380.097V379.455V378.813V378.173V377.532V376.893V376.253V375.614V374.976V374.338V373.701V373.064V372.428V371.792V371.156V370.521V369.887V369.253V368.619V367.986V367.354V366.722V366.09V365.459V364.828V364.198V363.568V362.938V362.309V361.681V361.053V360.425V359.798V359.171V358.545V357.919V357.294V356.669V356.044V355.42V354.796V354.173V353.55V352.927V352.305V351.683V351.062V350.441V349.821V349.201V348.581V347.962V347.343V346.724V346.106V345.489V344.871V344.254V343.638V343.022V342.406V341.79V341.175V340.561V339.946V339.332V338.719V338.105V337.493V336.88V336.268V335.656V335.045V334.434V333.823V333.212V332.602V331.993V331.383V330.774V330.166V329.557V328.949V328.341V327.734V327.127V326.52V325.914V325.308V324.702V324.096V323.491V322.886V322.282V321.677V321.073V320.47V319.866V319.263V318.66V318.058V317.456V316.854V316.252V315.651V315.05V314.449V313.848V313.248V312.648V312.048V311.449V310.85V310.251V309.652V309.054V308.455V307.857V307.26V306.662V306.065V305.468V304.872V304.275V303.679V303.083V302.487V301.892V301.296V300.701V300.107V299.512V298.918V298.323V297.729V297.136V296.542V295.949V295.356V294.763V294.17V293.578V292.985V292.393V291.801V291.21V290.618V290.027V289.436V288.845V288.254V287.663V287.073V286.482V285.892V285.302V284.713V284.123V283.534V282.944V282.355V281.766V281.177V280.589V280V279.412V278.824V278.236V277.648V277.06V276.472V275.885V275.297V274.71V274.123V273.536V272.949V272.362V271.776V271.189V270.603V270.016V269.43V268.844V268.258V267.672V267.087V266.501V265.915V265.33V264.744V264.159V263.574V262.989V262.404V261.819V261.234V260.649V260.064V259.48V258.895V258.311V257.726V257.142V256.558V255.973V255.389V254.805V254.221V253.637V253.053V252.469V251.885V251.301V250.718V250.134V249.55V248.966V248.383V247.799V247.215V246.632V246.048V245.465V244.881V244.298V243.714V243.131V242.547V241.964V241.38V240.797V240.213V239.63V239.047V238.463V237.88V237.296V236.713V236.129V235.546V234.962V234.379V233.795V233.211V232.628V232.044V231.46V230.877V230.293V229.709V229.125V228.541V227.957V227.373V226.789V226.205V225.621V225.037V224.453V223.868V223.284V222.7V222.115V221.531V220.946V220.361V219.776V219.192V218.607V218.022V217.436V216.851V216.266V215.681V215.095V214.51V213.924V213.338V212.752V212.166V211.58V210.994V210.408V209.821V209.235V208.648V208.061V207.474V206.887V206.3V205.713V205.126V204.538V203.951V203.363V202.775V202.187V201.599V201.01V200.422V199.833V199.244V198.655V198.066V197.477V196.887V196.298V195.708V195.118V194.528V193.938V193.347V192.757V192.166V191.575V190.984V190.392V189.801V189.209V188.617V188.025V187.433V186.84V186.248V185.655V185.062V184.468V183.875V183.281V182.687V182.093V181.498V180.904V180.309V179.714V179.119V178.523V177.927V177.331V176.735V176.139V175.542V174.945V174.348V173.751V173.153V172.555V171.957V171.358V170.76V170.161V169.562V168.962V168.362V167.762V167.162V166.562V165.961V165.36V164.758V164.157V163.555V162.953V162.35V161.747V161.144V160.541V159.937V159.333V158.729V158.124V157.519V156.914V156.309V155.703V155.097V154.49V153.884V153.277V152.669V152.061V151.453V150.845V150.236V149.627V149.018V148.408V147.798V147.188V146.577V145.966V145.354V144.742V144.13V143.518V142.905V142.292V141.678V141.064V140.45V139.835V139.22V138.605V137.989V137.373V136.756V136.139V135.522V134.904V134.286V133.668V133.049V132.429V131.81V131.19V130.569V129.948V129.327V128.705V128.083V127.461V126.838V126.215V125.591V124.967V124.342V123.717V123.091V122.466V121.839V121.213V120.585V119.958V119.33V118.701V118.072V117.443V116.813V116.183V115.552V114.921V114.289V113.657V113.024V112.391V111.758V111.124V110.489V109.854V109.219V108.583V107.946V107.31V106.672V106.034V105.396V104.757V104.118V103.478V102.838V102.197V101.556V100.914V100.272V99.6289V98.9855C199.903 75.9753 219.244 56.9724 241.693 56.9724H316.756C331.496 56.9724 343.701 44.761 343.701 29.7362C343.701 14.7114 331.496 2.5 316.756 2.5H29.1582C14.3799 2.5 2.5 14.7501 2.5 29.7362C2.5 44.7223 14.3799 56.9724 29.1582 56.9724H105.947C128.293 56.9724 146.011 75.5289 146.011 98.6442ZM460.554 157.095C475.333 157.095 487.212 144.845 487.212 129.859C487.212 114.873 475.333 102.623 460.554 102.623C445.776 102.623 433.896 114.873 433.896 129.859C433.896 144.845 445.776 157.095 460.554 157.095Z"
        fill="black"
        stroke="black"
        strokeWidth="5"
      />
    </svg>
  ),
};
