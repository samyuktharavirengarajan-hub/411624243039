export default function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: "gray",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "15px",
                transition: "0.3s",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}>
            {text}
        </button>
    );
}