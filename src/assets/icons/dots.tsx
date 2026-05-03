export const Dots = ({ props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    strokeWidth={4}
    transform="rotate(180)"
    viewBox="0 0 16 16"
    width={15}
    {...props}
  >
    <g fill="#fff" stroke="none">
      <path d="M4 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
)