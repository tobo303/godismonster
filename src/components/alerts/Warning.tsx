import Alert from "react-bootstrap/Alert";

interface WarningProps {
	children: React.ReactNode
	heading?: string;
}
// See: https://stackoverflow.com/questions/59348989/react-prop-types-eslint-error-in-typescript-react-component
// Causes lint to report react/prop-types error.
const Warning: React.FC<WarningProps> = ({ children, heading } : WarningProps) => {
	return (
		<Alert variant="danger">
			{<Alert.Heading>{heading}</Alert.Heading>}
			{children}
		</Alert>
	)
}

export default Warning
