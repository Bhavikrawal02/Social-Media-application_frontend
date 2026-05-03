export const FeedXLogo = ({width="90",height="60",...props}:any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
            <text
                x="50%"
                y="50%"
                fill="#a78bfa"
                dominantBaseline="middle"
                fontFamily="Poppins, Inter, Arial, sans-serif"
                fontSize={25}
                fontWeight={700}
                letterSpacing={1}
                textAnchor="middle"
            >
                {"   Feed   "}
                <tspan fill="#7c3aed">{"X"}</tspan>
            </text>
            <path
                stroke="#a78bfa"
                strokeLinecap="round"
                strokeWidth={4}
                d="M60 50h114"
                opacity={0.8}
            />
        </svg>
    )
}