import Text from "../Atoms/Text";

export default function ThemeLabel({ theme }) {
    return (
        <Text text={"Current Theme : " + theme} />
    );
}