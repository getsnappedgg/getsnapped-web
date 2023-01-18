import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ThemeProvider } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider
			breakpoints={["xl", "lg", "md", "sm"]}
			minBreakpoint="sm"
			theme={theme}
		>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
